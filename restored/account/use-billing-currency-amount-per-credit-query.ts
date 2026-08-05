// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Bgs`) / export `$b`.

export type UseBillingCurrencyAmountPerCreditQueryPeers = {
  useQuery: (options: Record<string, unknown>) => unknown;
  queryKey: (billingCurrency: unknown) => unknown[];
  fetchAmountPerCredit: (billingCurrency: unknown) => Promise<unknown>;
  oneMinute: number;
};

let peers: UseBillingCurrencyAmountPerCreditQueryPeers | null = null;

/** Wire useBillingCurrencyAmountPerCreditQuery peers once companions land. */
export function setUseBillingCurrencyAmountPerCreditQueryPeers(
  next: UseBillingCurrencyAmountPerCreditQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$b` / internal `Bgs`.
 * Query amount-per-credit for a billing currency.
 */
export function useBillingCurrencyAmountPerCreditQuery(args: {
  billingCurrency: unknown;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error(
      "UseBillingCurrencyAmountPerCreditQuery peers are not configured",
    );
  }
  const enabled = args.enabled ?? true;
  return peers.useQuery({
    queryKey: peers.queryKey(args.billingCurrency),
    enabled: enabled && args.billingCurrency != null,
    staleTime: peers.oneMinute,
    queryFn: () => peers!.fetchAmountPerCredit(args.billingCurrency),
  });
}
