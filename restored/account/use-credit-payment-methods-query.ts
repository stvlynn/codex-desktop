// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `jgs`) / export `rx`.

export type UseCreditPaymentMethodsQueryPeers = {
  useAccount: () => { data?: { id: string } | null; isLoading: boolean };
  queryKeyPrefix: unknown[];
  oneMinuteStaleTime: unknown;
  safeGet: (
    path: string,
    init: { parameters: { query: { account_id: string } } },
  ) => unknown;
  useQuery: (options: unknown) => unknown;
};

let peers: UseCreditPaymentMethodsQueryPeers | null = null;

/** Wire useCreditPaymentMethodsQuery peers once companions land. */
export function setUseCreditPaymentMethodsQueryPeers(next: UseCreditPaymentMethodsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `rx` / internal `jgs`.
 * Query saved credit payment methods for the active account.
 */
export function useCreditPaymentMethodsQuery(args: {
  enabled: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseCreditPaymentMethodsQuery peers are not configured");
  }
  const { enabled } = args;
  const { data, isLoading } = peers.useAccount();
  const accountId = data?.id ?? null;
  const queryKey = [...peers.queryKeyPrefix, accountId];
  const queryEnabled = enabled && !isLoading && data != null;
  return peers.useQuery({
    queryKey,
    enabled: queryEnabled,
    staleTime: peers.oneMinuteStaleTime,
    refetchOnWindowFocus: false,
    queryFn: () =>
      data == null
        ? null
        : peers!.safeGet("/payments/payment_methods", {
            parameters: { query: { account_id: data.id } },
          }),
  });
}
