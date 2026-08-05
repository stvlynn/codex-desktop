// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Fgs`) / export `ax`.

export type UseAccountScopedEnabledQueryPeers = {
  useResolvedAccountId: (args: { enabled: boolean }) => {
    accountId: unknown;
    isLoading: boolean;
  };
  useQuery: (options: Record<string, unknown>) => unknown;
  accountQueryKey: (accountId: unknown) => unknown[];
  oneMinute: number;
};

let peers: UseAccountScopedEnabledQueryPeers | null = null;

/** Wire useAccountScopedEnabledQuery peers once companions land. */
export function setUseAccountScopedEnabledQueryPeers(
  next: UseAccountScopedEnabledQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ax` / internal `Fgs`.
 * Run an account-scoped query only when account id is available.
 */
export function useAccountScopedEnabledQuery(args: {
  enabled: boolean;
  queryFn: (accountId: unknown) => Promise<unknown> | unknown;
}): unknown {
  if (peers == null) {
    throw new Error("UseAccountScopedEnabledQuery peers are not configured");
  }
  const { enabled } = args;
  const { accountId, isLoading } = peers.useResolvedAccountId({ enabled });
  const ready = enabled && !isLoading && accountId != null;
  return peers.useQuery({
    queryKey: peers.accountQueryKey(accountId),
    enabled: ready,
    staleTime: peers.oneMinute,
    queryFn: () => args.queryFn(accountId),
  });
}
