// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Lgs`) / export `lx`.

export type UseResolvedAccountIdPeers = {
  useCurrentAccountId: (args: { enabled: boolean }) => {
    accountId: unknown;
    isLoading: boolean;
  };
  useQuery: (options: Record<string, unknown>) => unknown;
  settingsQueryKeyPrefix: unknown[];
  fetchAccountSettings: (accountId: string) => Promise<unknown>;
  oneMinute: number;
};

let peers: UseResolvedAccountIdPeers | null = null;

/** Wire useResolvedAccountId peers once companions land. */
export function setUseResolvedAccountIdPeers(
  next: UseResolvedAccountIdPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lx` / internal `Lgs`.
 * Resolve an explicit or fetched account id with settings prefetch.
 */
export function useResolvedAccountId(args: {
  accountId?: unknown;
  enabled?: boolean;
}): { accountId: unknown; isLoading: boolean } {
  if (peers == null) {
    throw new Error("UseResolvedAccountId peers are not configured");
  }
  const enabled = args.enabled ?? true;
  const shouldFetchCurrent = enabled && args.accountId == null;
  const current = peers.useCurrentAccountId({ enabled: shouldFetchCurrent });
  const accountId = args.accountId ?? current.accountId;
  const resolving = args.accountId == null && current.isLoading;
  const queryEnabled = enabled && !resolving && accountId != null;
  peers.useQuery({
    queryKey: [...peers.settingsQueryKeyPrefix, accountId],
    enabled: queryEnabled,
    staleTime: peers.oneMinute,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: () =>
      accountId == null ? null : peers!.fetchAccountSettings(String(accountId)),
  });
  return { accountId, isLoading: resolving };
}
