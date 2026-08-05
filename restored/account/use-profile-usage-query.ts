// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `UQl`) / export `Wi`.

export type UseProfileUsageQueryPeers = {
  useProfileVisibility: () => { isProfileVisible: boolean };
  useQueryClient: () => { get: (key: unknown, staleTime: unknown) => unknown };
  cachedUsageKey: unknown;
  sixHours: unknown;
  usageQueryKey: (args: { accountId: unknown; userId: unknown }) => unknown[];
  disabledKey: unknown[];
  useQuery: (options: Record<string, unknown>) => unknown;
  fetchProfileUsage: () => Promise<unknown>;
  warn: (event: string, payload: Record<string, unknown>) => void;
};

let peers: UseProfileUsageQueryPeers | null = null;

/** Wire useProfileUsageQuery peers once companions land. */
export function setUseProfileUsageQueryPeers(
  next: UseProfileUsageQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Wi` / internal `UQl`.
 * Query profile usage when profile visibility allows it.
 */
export function useProfileUsageQuery(args: {
  accountId: unknown;
  enabled: boolean;
  userId: unknown;
}): unknown {
  if (peers == null) {
    throw new Error("UseProfileUsageQuery peers are not configured");
  }
  const { isProfileVisible } = peers.useProfileVisibility();
  const client = peers.useQueryClient();
  const cached = client.get(peers.cachedUsageKey, peers.sixHours);
  const queryKey = isProfileVisible
    ? peers.usageQueryKey({ accountId: args.accountId, userId: args.userId })
    : peers.disabledKey;
  return peers.useQuery({
    queryKey,
    enabled: isProfileVisible && args.enabled,
    initialData: isProfileVisible ? undefined : cached,
    queryFn: async () => {
      const hasAccountId = args.accountId != null;
      const hasUserId = args.userId != null;
      if (!hasAccountId || !hasUserId) {
        peers!.warn("profile_usage_query_started_without_identity", {
          safe: { hasAccountId, hasUserId },
          sensitive: {},
        });
      }
      return peers!.fetchProfileUsage();
    },
  });
}

// --- missing-relative-export aliases ---
export { useProfileUsageQuery as UseProfileUsageQuery };
