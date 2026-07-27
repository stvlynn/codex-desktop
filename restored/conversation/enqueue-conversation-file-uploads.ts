// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dka` / export `xP` — enqueue file uploads into composer attachment state.

type ScopeLike = {
  get: (atom: unknown) => any;
  set: (
    atom: unknown,
    conversationId: string,
    updater: (prev: UploadingAttachment[]) => UploadingAttachment[],
  ) => void;
};

export type UploadingAttachment = {
  mimeType: string | null;
  name: string;
  previewSrc: string | null;
  progress: number;
  status: "uploading" | "ready" | "error";
  uploadId: string;
  error?: string;
  height?: number;
  width?: number;
};

type UploadResult = {
  height?: number;
  previewSrc?: string | null;
  width?: number;
  [key: string]: unknown;
};

type EnqueueDeps = {
  fileAttachmentsAtom: unknown;
  conversationsApiAtom: unknown;
  createObjectUrl: (file: File) => string | null;
  createUploadId: () => string;
  readImageDimensions: (
    file: File,
  ) => Promise<{ height?: number; previewSrc?: string; width?: number } | null>;
  uploadFile: (
    api: unknown,
    file: File,
    options: {
      isTemporaryChat?: boolean;
      onProgress: (progress: number) => void;
      storeInLibrary: boolean;
    },
  ) => Promise<UploadResult>;
  /** Bundle `wh` — feature gate for library storage. */
  isLibraryStoreEnabled: (scope: ScopeLike, gateId: string) => boolean;
  markProgress: (
    scope: ScopeLike,
    conversationId: string,
    uploadId: string,
    progress: number,
  ) => void;
  markReady: (
    scope: ScopeLike,
    conversationId: string,
    uploadId: string,
    result: UploadResult,
  ) => void;
  markError: (
    scope: ScopeLike,
    conversationId: string,
    uploadId: string,
    fileName: string,
  ) => void;
};

let deps: EnqueueDeps | null = null;

export function setEnqueueConversationFileUploadsDeps(next: EnqueueDeps): void {
  deps = next;
}

/** Bundle `Dka` / export `xP`. */
export async function enqueueConversationFileUploads(
  scope: ScopeLike,
  conversationId: string,
  files: File[],
  { isTemporaryChat = false }: { isTemporaryChat?: boolean } = {},
): Promise<void> {
  if (deps == null) {
    throw new Error(
      "enqueueConversationFileUploads deps have not been configured",
    );
  }
  const pending = files.map((file) => ({
    file,
    objectUrl: deps!.createObjectUrl(file),
    uploadId: deps!.createUploadId(),
  }));
  const attachments: UploadingAttachment[] = pending.map(
    ({ file, objectUrl, uploadId }) => ({
      mimeType: file.type || null,
      name: file.name,
      previewSrc: objectUrl,
      progress: 0,
      status: "uploading",
      uploadId,
    }),
  );
  scope.set(deps.fileAttachmentsAtom, conversationId, (prev) => [
    ...prev,
    ...attachments,
  ]);
  const storeInLibrary =
    !isTemporaryChat && deps.isLibraryStoreEnabled(scope, "3765605143");
  await Promise.all(
    pending.map(async ({ file, objectUrl, uploadId }) => {
      try {
        const [uploaded, dimensions] = await Promise.all([
          deps!.uploadFile(scope.get(deps!.conversationsApiAtom), file, {
            ...(isTemporaryChat ? { isTemporaryChat: true } : {}),
            onProgress: (progress) => {
              deps!.markProgress(scope, conversationId, uploadId, progress);
            },
            storeInLibrary,
          }),
          deps!.readImageDimensions(file),
        ]);
        if (objectUrl != null) URL.revokeObjectURL(objectUrl);
        deps!.markReady(scope, conversationId, uploadId, {
          ...uploaded,
          height: dimensions?.height,
          previewSrc: dimensions?.previewSrc,
          width: dimensions?.width,
        });
      } catch {
        if (objectUrl != null) URL.revokeObjectURL(objectUrl);
        deps!.markError(scope, conversationId, uploadId, file.name);
      }
    }),
  );
}
