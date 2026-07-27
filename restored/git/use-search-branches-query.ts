// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `YQr`) / export `lY`.

export type UseSearchBranchesQueryPeers = {
  oneMinute: unknown;
  searchBranches: (
    query: string,
    hostConfig: unknown,
    pageSize: number,
    pageParam: unknown,
  ) => Promise<unknown>;
  selectPages: unknown;
  getNextPageParam: unknown;
  useInfiniteQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseSearchBranchesQueryPeers | null = null;

/** Wire useSearchBranchesQuery peers once companions land. */
export function setUseSearchBranchesQueryPeers(
  next: UseSearchBranchesQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lY` / internal `YQr`.
 * Infinite query for searching git branches.
 */
export function useSearchBranchesQuery(
  query: string | null | undefined,
  hostConfig: unknown,
  options: { enabled?: boolean } = {},
): unknown {
  if (peers == null) {
    throw new Error("UseSearchBranchesQuery peers are not configured");
  }
  const enabled = options.enabled === undefined ? true : options.enabled;
  return peers.useInfiniteQuery({
    queryKey: ["search-branches", query, hostConfig],
    enabled: !!query && enabled,
    initialPageParam: null,
    staleTime: peers.oneMinute,
    queryFn: ({ pageParam }: { pageParam: unknown }) =>
      peers!.searchBranches(query ?? "", hostConfig, 20, pageParam),
    select: peers.selectPages,
    getNextPageParam: peers.getNextPageParam,
  });
}
