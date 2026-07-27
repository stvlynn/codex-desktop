// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `Yza`) / export `qM`.

export type UseCodexImageSrcCachePeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  queryFn: (path: string, cacheKey: unknown[]) => Promise<unknown>;
};

let peers: UseCodexImageSrcCachePeers | null = null;

/** Wire useCodexImageSrcCache peers once companions land. */
export function setUseCodexImageSrcCachePeers(
  next: UseCodexImageSrcCachePeers,
): void {
  peers = next;
}

/**
 * Bundle export `qM` / internal `Yza`.
 * Query cached image src for a Codex file path.
 */
export function useCodexImageSrcCache(
  filePath: string | null | undefined,
  options?: { cacheKey?: unknown[]; enabled?: boolean },
): unknown {
  if (peers == null) {
    throw new Error("UseCodexImageSrcCache peers are not configured");
  }
  const enabled = !!filePath && (options?.enabled ?? true);
  const cacheKey = options?.cacheKey ?? ["codex"];
  const queryKey = ["file", "image-src", filePath, ...cacheKey];
  return peers.useQuery({
    queryKey,
    enabled,
    queryFn: () => peers!.queryFn(String(filePath), cacheKey),
  });
}
