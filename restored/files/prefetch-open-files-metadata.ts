// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `PWi`) / export `oH`.

export type PrefetchOpenFilesMetadataPeers = {
  buildQueryKey: (
    method: string,
    params: Record<string, unknown>,
    cacheKey: unknown,
  ) => unknown;
  contentSampleByteLimit: unknown;
  contentSampleMaxFileBytes: unknown;
};

let peers: PrefetchOpenFilesMetadataPeers | null = null;

/** Wire open-files metadata prefetch peers once companions land. */
export function setPrefetchOpenFilesMetadataPeers(
  next: PrefetchOpenFilesMetadataPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oH` / internal `PWi`.
 * Prefetch metadata/binary/latex queries for open files.
 */
export async function prefetchOpenFilesMetadata(args: {
  cacheKey: unknown;
  openFiles: Array<{ hostId: unknown; path: unknown }>;
  queryClient: {
    refetchQueries: (
      filters: Record<string, unknown>,
      options: { throwOnError: boolean },
    ) => Promise<unknown>;
  };
  throwOnError?: boolean;
}): Promise<void> {
  if (peers == null) {
    throw new Error("PrefetchOpenFilesMetadata peers are not configured");
  }
  const { cacheKey, openFiles, queryClient, throwOnError = false } = args;
  const keys = openFiles.flatMap(({ hostId, path: filePath }) => [
    peers!.buildQueryKey(
      "read-file-metadata",
      {
        contentSampleByteLimit: peers!.contentSampleByteLimit,
        contentSampleMaxFileBytes: peers!.contentSampleMaxFileBytes,
        hostId,
        path: filePath,
      },
      cacheKey,
    ),
    peers!.buildQueryKey("read-file", { hostId, path: filePath }, cacheKey),
    peers!.buildQueryKey("read-file", { path: filePath, hostId }, cacheKey),
    peers!.buildQueryKey(
      "read-file-binary",
      { path: filePath, hostId },
      cacheKey,
    ),
    peers!.buildQueryKey(
      "read-file-binary",
      { hostId, path: filePath },
      cacheKey,
    ),
    peers!.buildQueryKey(
      "compile-latex-artifact",
      { path: filePath, hostId },
      cacheKey,
    ),
    peers!.buildQueryKey(
      "compile-latex-artifact",
      { hostId, path: filePath },
      cacheKey,
    ),
  ]);
  await Promise.all(
    keys.map((queryKey) =>
      queryClient.refetchQueries(
        { exact: true, queryKey, type: "all" },
        { throwOnError },
      ),
    ),
  );
}
