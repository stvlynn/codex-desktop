// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `Njr`) / export `zQ`.

export type UseInfiniteStaleHostQueryPeers = {
  queryKey: unknown;
  queryFn: (hostId: unknown) => Promise<unknown>;
  staleTimeInfinite: unknown;
  useQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseInfiniteStaleHostQueryPeers | null = null;

/** Wire infinite-stale host query peers once companions land. */
export function setUseInfiniteStaleHostQueryPeers(
  next: UseInfiniteStaleHostQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zQ` / internal `Njr`.
 * Host query with infinite staleTime and always-refetch mount/focus.
 */
export function useInfiniteStaleHostQuery(hostId: unknown): unknown {
  if (peers == null) {
    throw new Error("UseInfiniteStaleHostQuery peers are not configured");
  }
  return peers.useQuery({
    queryKey: peers.queryKey,
    queryFn: () => peers!.queryFn(hostId),
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    retry: false,
    staleTime: peers.staleTimeInfinite,
  });
}
