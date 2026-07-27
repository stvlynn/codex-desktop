// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `qja`) / export `LN`.

export type UseInfiniteListQueryPeers = {
  useInfiniteQuery: (opts: Record<string, unknown>) => unknown;
  allLimit: number;
  ownedLimit: number;
  getNextPageParam: (lastPage: unknown) => unknown;
  buildQueryKey: (projectId: unknown, limit: number) => unknown;
  oneMinute: number;
};

let peers: UseInfiniteListQueryPeers | null = null;

/** Wire useInfiniteListQuery peers once companions land. */
export function setUseInfiniteListQueryPeers(
  next: UseInfiniteListQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LN` / internal `qja`.
 * Infinite query for project conversation lists.
 */
export function useInfiniteListQuery(
  client: {
    listProjectConversations: (
      args: Record<string, unknown>,
    ) => Promise<unknown>;
  },
  projectId: unknown,
  enabled?: boolean,
  scope?: "all" | string,
): unknown {
  if (peers == null) {
    throw new Error("UseInfiniteListQuery peers are not configured");
  }
  const enabledFlag = enabled ?? true;
  const scopeFlag = scope ?? "all";
  const limit = scopeFlag === "all" ? peers.allLimit : peers.ownedLimit;
  return peers.useInfiniteQuery({
    enabled: enabledFlag,
    getNextPageParam: peers.getNextPageParam,
    initialPageParam: null,
    queryFn: ({ pageParam }: { pageParam: unknown }) =>
      client.listProjectConversations({
        cursor: pageParam,
        limit,
        ownedOnly: false,
        projectId,
      }),
    queryKey: peers.buildQueryKey(projectId, limit),
    staleTime: peers.oneMinute,
  });
}
