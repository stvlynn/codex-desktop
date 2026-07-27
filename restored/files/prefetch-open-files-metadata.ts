// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PWi`) / export `oH`.

export type PrefetchOpenFilesMetadataPeers = {
  $f: (...args: unknown[]) => unknown;
  Oqr: (...args: unknown[]) => unknown;
  exe: (...args: unknown[]) => unknown;
};
let peers: PrefetchOpenFilesMetadataPeers | null = null;

/** Wire prefetchOpenFilesMetadata peers once companions land. */
export function setPrefetchOpenFilesMetadataPeers(
  next: PrefetchOpenFilesMetadataPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oH` / internal `PWi`.
 */
export async function prefetchOpenFilesMetadata({
  cacheKey,
  openFiles,
  queryClient,
  throwOnError = false,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("prefetchOpenFilesMetadata peers are not configured");
  }
  await Promise.all(
    openFiles
      .flatMap(({ hostId, path }) => {
        return [
          peers.$f(
            "read-file-metadata",
            {
              contentSampleByteLimit: peers.exe,
              contentSampleMaxFileBytes: peers.Oqr,
              hostId,
              path,
            },
            cacheKey,
          ),
          peers.$f(
            "read-file",
            {
              hostId,
              path,
            },
            cacheKey,
          ),
          peers.$f(
            "read-file",
            {
              path,
              hostId,
            },
            cacheKey,
          ),
          peers.$f(
            "read-file-binary",
            {
              path,
              hostId,
            },
            cacheKey,
          ),
          peers.$f(
            "read-file-binary",
            {
              hostId,
              path,
            },
            cacheKey,
          ),
          peers.$f(
            "compile-latex-artifact",
            {
              path,
              hostId,
            },
            cacheKey,
          ),
          peers.$f(
            "compile-latex-artifact",
            {
              hostId,
              path,
            },
            cacheKey,
          ),
        ];
      })
      .map((item) => {
        return queryClient.refetchQueries(
          {
            exact: true,
            queryKey: item,
            type: "all",
          },
          {
            throwOnError,
          },
        );
      }),
  );
}
