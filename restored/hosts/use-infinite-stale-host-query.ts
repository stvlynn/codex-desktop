// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Njr`) / export `zQ`.

export type UseInfiniteStaleHostQueryPeers = {
  Ft: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Pjr: (...args: unknown[]) => unknown;
  Rjr: (...args: unknown[]) => unknown;
};

let peers: UseInfiniteStaleHostQueryPeers | null = null;

/** Wire useInfiniteStaleHostQuery peers once companions land. */
export function setUseInfiniteStaleHostQueryPeers(
  next: UseInfiniteStaleHostQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zQ` / internal `Njr`.
 */
export function useInfiniteStaleHostQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useInfiniteStaleHostQuery peers are not configured");
  }

  return peers.Ft({
    queryKey: peers.Rjr,
    queryFn: () => peers.Pjr(e),
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    retry: !1,
    staleTime: peers.Hf.INFINITE,
  });
}
