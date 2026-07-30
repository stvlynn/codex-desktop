// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Resolve ChatGPT artifact download targets and fetch blobs / browser downloads.

import { getArtifactDownloadBlob } from "../../artifacts/get-artifact-download-blob";
import { isLocalChatgptId } from "../../chatgpt/is-local-chatgpt-id";
import { X_CODEX_BINARY_RESPONSE_HEADER } from "../../config/x-codex-binary-response-header";
import { downloadBlobAsFile } from "../../utils/download-blob-as-file";
import { resolveChatgptArtifactDownloadTarget } from "./resolve-chatgpt-artifact-download-target";

export type DownloadClient = {
  conversationAttachmentDownloadRequest: (args: {
    conversationId: string;
    fileId: string;
  }) => Promise<DownloadRequest>;
  fileDownloadRequest: (fileId: string) => Promise<DownloadRequest>;
  fileDownloadRequestFromDownloadUrl: (
    downloadUrl: string,
  ) => Promise<DownloadRequest>;
};

export type DownloadRequest = {
  downloadUrl: string;
  requestHeaders?: Record<string, string> | null;
};

export type ArtifactDownloadTarget =
  | { type: "download-url"; downloadUrl: string }
  | { type: "file-id"; fileId: string };

function asNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

function asPlainObject(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value
    ? Object.fromEntries(Object.entries(value as Record<string, unknown>))
    : null;
}

function triggerBrowserDownload(url: string, fileName: string): void {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.style.display = "none";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

function withBinaryResponseHeader(request: DownloadRequest): DownloadRequest {
  return {
    ...request,
    requestHeaders: {
      ...request.requestHeaders,
      [X_CODEX_BINARY_RESPONSE_HEADER]: "1",
    },
  };
}

function readDownloadUrlFromReference(
  reference: Record<string, unknown>,
): string | null {
  const nestedFile = asPlainObject(reference.file);
  const nestedItem = asPlainObject(reference.item);
  const raw =
    asNonEmptyString(reference.download_url) ??
    asNonEmptyString(reference.url) ??
    asNonEmptyString(nestedFile?.download_url) ??
    asNonEmptyString(nestedItem?.download_url);
  return raw == null
    ? null
    : (resolveChatgptArtifactDownloadTarget(raw) as string | null);
}

function readFileIdFromReference(
  reference: Record<string, unknown>,
): string | null {
  const nestedFile = asPlainObject(reference.file);
  const nestedItem = asPlainObject(reference.item);
  return (
    asNonEmptyString(reference.file_id) ??
    asNonEmptyString(reference.id) ??
    asNonEmptyString(nestedFile?.file_id) ??
    asNonEmptyString(nestedItem?.file_id)
  );
}

/** Resolve a content-reference payload into an artifact download target. */
export function resolveChatgptArtifactTargetFromReference(
  reference: unknown,
): ArtifactDownloadTarget | null {
  const record = reference as Record<string, unknown>;
  const downloadUrl = readDownloadUrlFromReference(record);
  if (downloadUrl != null) {
    return { downloadUrl, type: "download-url" };
  }
  const fileId = readFileIdFromReference(record);
  return fileId == null ? null : { fileId, type: "file-id" };
}

async function buildClientDownloadRequest(args: {
  client: DownloadClient;
  conversationId?: string | null;
  target: ArtifactDownloadTarget;
}): Promise<DownloadRequest> {
  const { client, conversationId, target } = args;
  if (target.type === "download-url") {
    const safeUrl = resolveChatgptArtifactDownloadTarget(target.downloadUrl) as
      | string
      | null;
    if (safeUrl == null) throw Error("ChatGPT file download URL is unsafe");
    return client.fileDownloadRequestFromDownloadUrl(safeUrl);
  }
  return conversationId != null && !isLocalChatgptId(conversationId)
    ? client.conversationAttachmentDownloadRequest({
        conversationId,
        fileId: target.fileId,
      })
    : client.fileDownloadRequest(target.fileId);
}

export async function resolveSafeDownloadRequest(args: {
  client: DownloadClient;
  conversationId?: string | null;
  target: ArtifactDownloadTarget;
}): Promise<DownloadRequest> {
  const request = await buildClientDownloadRequest(args);
  const safeUrl = resolveChatgptArtifactDownloadTarget(request.downloadUrl) as
    | string
    | null;
  if (safeUrl == null) throw Error("ChatGPT file download URL is unsafe");
  return { ...request, downloadUrl: safeUrl };
}

export async function downloadArtifactBlob(args: {
  client: DownloadClient;
  conversationId?: string | null;
  target: ArtifactDownloadTarget;
}): Promise<Blob> {
  return getArtifactDownloadBlob(
    withBinaryResponseHeader(await resolveSafeDownloadRequest(args)),
  ) as Promise<Blob>;
}

export async function downloadArtifactToDisk(
  client: DownloadClient,
  options: {
    conversationId?: string | null;
    fileName: string;
    target: ArtifactDownloadTarget;
  },
): Promise<void> {
  const request = await resolveSafeDownloadRequest({
    client,
    conversationId: options.conversationId,
    target: options.target,
  });
  if (request.requestHeaders == null) {
    triggerBrowserDownload(request.downloadUrl, options.fileName);
    return;
  }
  downloadBlobAsFile(
    await getArtifactDownloadBlob(withBinaryResponseHeader(request)),
    options.fileName,
  );
}
