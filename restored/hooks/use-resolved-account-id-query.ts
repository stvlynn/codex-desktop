// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `Igs`) / export `cx`.

export type UseResolvedAccountIdQueryPeers = {
  useCurrentAccountId: (opts: { enabled: boolean }) => {
    accountId: string | null | undefined;
    isLoading: boolean;
  };
  useQuery: (opts: Record<string, unknown>) => unknown;
  queryKeyPrefix: unknown[];
  queryFn: (accountId: string) => Promise<unknown>;
};

let peers: UseResolvedAccountIdQueryPeers | null = null;

/** Wire useResolvedAccountIdQuery peers once companions land. */
export function setUseResolvedAccountIdQueryPeers(
  next: UseResolvedAccountIdQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cx` / internal `Igs`.
 * Resolve account id from args or current-account query.
 */
export function useResolvedAccountIdQuery(args: {
  accountId?: string | null;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseResolvedAccountIdQuery peers are not configured");
  }
  const enabled = args.enabled ?? true;
  const needsLookup = enabled && args.accountId == null;
  const { accountId: resolved, isLoading } = peers.useCurrentAccountId({
    enabled: needsLookup,
  });
  const accountId = args.accountId ?? resolved;
  const waiting = args.accountId == null && isLoading;
  const queryEnabled = enabled && !waiting && accountId != null;
  return peers.useQuery({
    queryKey: [...peers.queryKeyPrefix, accountId],
    enabled: queryEnabled,
    queryFn: () => peers!.queryFn(String(accountId)),
  });
}
