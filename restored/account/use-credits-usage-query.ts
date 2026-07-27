// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `Mgs`) / export `Jb`.

export type UseCreditsUsageQueryArgs = {
  accountId: string;
  authMethod: unknown;
  enabled?: boolean;
  userId: string;
};

export type UseCreditsUsageQueryPeers = {
  useQuery: (options: {
    queryKey: unknown[];
    queryFn: (ctx: { signal: AbortSignal }) => unknown;
    enabled?: boolean;
    staleTime: number;
    refetchOnWindowFocus: boolean;
  }) => unknown;
  queryKeyBase: unknown[];
  fetchCreditsUsage: (signal: AbortSignal) => unknown;
  oneMinuteMs: number;
};

let peers: UseCreditsUsageQueryPeers | null = null;

/** Wire credits-usage query peers once companions land. */
export function setUseCreditsUsageQueryPeers(next: UseCreditsUsageQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Jb` / internal `Mgs`.
 * Query credits usage for an account/user/auth method.
 */
export function useCreditsUsageQuery(args: UseCreditsUsageQueryArgs): unknown {
  if (peers == null) {
    throw new Error("UseCreditsUsageQuery peers are not configured");
  }
  const { accountId, authMethod, enabled, userId } = args;
  return peers.useQuery({
    queryKey: [...peers.queryKeyBase, authMethod, userId, accountId],
    queryFn: ({ signal }) => peers!.fetchCreditsUsage(signal),
    enabled,
    staleTime: peers.oneMinuteMs,
    refetchOnWindowFocus: false,
  });
}
