// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Vgs`) / export `ix`.

export type UseResolvedBillingCurrencyQueryPeers = {
  useStatsigClient: () => {
    client: {
      getContext: () => { user?: { country?: string } };
    };
    isLoading: boolean;
  };
  defaultCurrency: string;
  queryKeyPrefix: unknown[];
  useQuery: (options: Record<string, unknown>) => unknown;
  fetchCurrencyConfig: (code: string) => Promise<{
    currency_config?: {
      symbol_code?: string | null;
      business_currency_override?: string | null;
    } | null;
  }>;
};

let peers: UseResolvedBillingCurrencyQueryPeers | null = null;

/** Wire useResolvedBillingCurrencyQuery peers once companions land. */
export function setUseResolvedBillingCurrencyQueryPeers(next: UseResolvedBillingCurrencyQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `ix` / internal `Vgs`.
 * Resolve billing currency from args or Statsig user country.
 */
export function useResolvedBillingCurrencyQuery(args: {
  billingCurrency?: string | null;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseResolvedBillingCurrencyQuery peers are not configured");
  }
  const enabled = args.enabled ?? true;
  const { client, isLoading } = peers.useStatsigClient();
  const resolving =
    args.billingCurrency === undefined ||
    (args.billingCurrency == null && isLoading);
  const country = client.getContext().user?.country?.trim().toUpperCase();
  const currencyCode = args.billingCurrency ?? country ?? peers.defaultCurrency;
  return peers.useQuery({
    queryKey: [...peers.queryKeyPrefix, currencyCode],
    enabled: enabled && !resolving,
    queryFn: async () => {
      const primary = (await peers!.fetchCurrencyConfig(currencyCode))
        .currency_config;
      if (primary?.symbol_code == null) return null;
      const business =
        primary.business_currency_override != null &&
        primary.business_currency_override !== primary.symbol_code
          ? (
              await peers!.fetchCurrencyConfig(
                primary.business_currency_override,
              )
            ).currency_config
          : primary;
      return {
        currencyCode: primary.symbol_code,
        businessCurrencyCode: business?.symbol_code ?? primary.symbol_code,
      };
    },
  });
}
