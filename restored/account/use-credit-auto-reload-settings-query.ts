// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `Pgs`) / export `Qb`.

export type UseCreditAutoReloadSettingsQueryPeers = {
  useAccount: () => { data?: { id: string } | null; isLoading: boolean };
  queryKeyPrefix: unknown[];
  currencyKey: unknown;
  infiniteStaleTime: unknown;
  queryFn: (...args: unknown[]) => unknown;
  useQuery: (options: unknown) => unknown;
};

let peers: UseCreditAutoReloadSettingsQueryPeers | null = null;

/** Wire useCreditAutoReloadSettingsQuery peers once companions land. */
export function setUseCreditAutoReloadSettingsQueryPeers(next: UseCreditAutoReloadSettingsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Qb` / internal `Pgs`.
 * Query billing currency for credit auto-reload settings.
 */
export function useCreditAutoReloadSettingsQuery(args: {
  enabled: boolean;
}): unknown {
  if (peers == null) {
    throw new Error(
      "UseCreditAutoReloadSettingsQuery peers are not configured",
    );
  }
  const { enabled } = args;
  const { data, isLoading } = peers.useAccount();
  const accountId = data?.id ?? null;
  const queryKey = [...peers.queryKeyPrefix, peers.currencyKey, accountId];
  const queryEnabled = enabled && !isLoading && data != null;
  return peers.useQuery({
    queryKey,
    enabled: queryEnabled,
    staleTime: peers.infiniteStaleTime,
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: peers.queryFn,
    select: (payload: {
      accounts?: Record<
        string,
        { entitlement?: { billing_currency?: unknown } }
      >;
    }) =>
      data
        ? (payload.accounts?.[data.id]?.entitlement?.billing_currency ?? null)
        : null,
  });
}
