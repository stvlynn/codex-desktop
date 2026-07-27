// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `zgs`) / export `sx`.

export type UseWorkspaceAdminRequestsQueryPeers = {
  useAccountId: (opts: { enabled: boolean }) => {
    accountId: string | null | undefined;
    isLoading: boolean;
  };
  queryKeyPrefix: unknown[];
  oneMinuteStaleTime: unknown;
  fetchAdminRequests: (accountId: string) => Promise<unknown>;
  useQuery: (options: unknown) => unknown;
};

let peers: UseWorkspaceAdminRequestsQueryPeers | null = null;

/** Wire useWorkspaceAdminRequestsQuery peers once companions land. */
export function setUseWorkspaceAdminRequestsQueryPeers(next: UseWorkspaceAdminRequestsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `sx` / internal `zgs`.
 * Query workspace admin requests for the active account.
 */
export function useWorkspaceAdminRequestsQuery(args: {
  enabled: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseWorkspaceAdminRequestsQuery peers are not configured");
  }
  const { enabled } = args;
  const { accountId, isLoading } = peers.useAccountId({ enabled });
  const queryKey = [...peers.queryKeyPrefix, accountId];
  const queryEnabled = enabled && !isLoading && accountId != null;
  return peers.useQuery({
    queryKey,
    enabled: queryEnabled,
    staleTime: peers.oneMinuteStaleTime,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: async () =>
      accountId == null ? null : peers!.fetchAdminRequests(accountId),
  });
}
