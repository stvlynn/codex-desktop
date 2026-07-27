// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Krt`) / export `Ict`.

export type BuildDictationAudioUploadRequestPeers = {
  sanitizeFilename: (filename: string) => string;
  createBoundary: () => string;
  encodeBody: (bytes: Uint8Array) => unknown;
  buildMultipart: (input: {
    blob: Blob;
    boundary: string;
    filename: string;
    contentType: string;
    language: unknown;
  }) => Promise<Uint8Array>;
  authHeaders: () => Record<string, string>;
  clientHeaderKey: string;
  post: (
    path: "/transcribe",
    body: unknown,
    headers: Record<string, string>,
  ) => Promise<{ body: { text: Promise<string> | string } }>;
};

let peers: BuildDictationAudioUploadRequestPeers | null = null;

/** Wire buildDictationAudioUploadRequest peers once companions land. */
export function setBuildDictationAudioUploadRequestPeers(
  next: BuildDictationAudioUploadRequestPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ict` / internal `Krt`.
 * Build multipart upload + POST /transcribe for dictation audio.
 */
export async function buildDictationAudioUploadRequest(
  blob: Blob,
  options: { contentType?: string; filename?: string; language?: unknown } = {},
): Promise<string> {
  if (peers == null) {
    throw new Error(
      "BuildDictationAudioUploadRequest peers are not configured",
    );
  }
  const contentType =
    options.contentType ??
    (blob.type && blob.type.trim().length > 0 ? blob.type : "audio/webm");
  const extension = contentType.split(/[/;]/)[1] ?? "webm";
  const filename = peers.sanitizeFilename(
    options.filename ?? `codex.${extension}`,
  );
  const boundary = peers.createBoundary();
  const encoded = peers.encodeBody(
    await peers.buildMultipart({
      blob,
      boundary,
      filename,
      contentType,
      language: options.language,
    }),
  );
  const headers = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`,
    [peers.clientHeaderKey]: "1",
    ...peers.authHeaders(),
  };
  const response = await peers.post("/transcribe", encoded, headers);
  return typeof response.body.text === "string"
    ? response.body.text
    : await response.body.text;
}
