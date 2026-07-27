// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Ags`) / export `tx`.

export type UseChatgptCreditsBillingQueryPeers = {
  useAuth: () => {
    accountId?: unknown;
    authMethod?: unknown;
    userId?: unknown;
  };
  queryKeyWithPayment: unknown[];
  queryKeyWithoutPayment: unknown[];
  fetchBilling: (includePaymentMethod: boolean) => Promise<unknown>;
  selectBilling: (data: unknown, includePaymentMethod: boolean) => unknown;
  useQuery: (opts: Record<string, unknown>) => unknown;
  oneMinute: number;
};

let peers: UseChatgptCreditsBillingQueryPeers | null = null;

/** Wire useChatgptCreditsBillingQuery peers once companions land. */
export function setUseChatgptCreditsBillingQueryPeers(
  next: UseChatgptCreditsBillingQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tx` / internal `Ags`.
 * Query ChatGPT credits billing for the signed-in account.
 */
export function useChatgptCreditsBillingQuery(args: {
  enabled: boolean;
  includePaymentMethod?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseChatgptCreditsBillingQuery peers are not configured");
  }
  const includePaymentMethod = args.includePaymentMethod ?? false;
  const { accountId, authMethod, userId } = peers.useAuth();
  const baseKey = includePaymentMethod
    ? peers.queryKeyWithPayment
    : peers.queryKeyWithoutPayment;
  const queryKey = [...baseKey, authMethod, userId, accountId];
  const queryFn = () => peers!.fetchBilling(includePaymentMethod);
  const enabled =
    args.enabled &&
    authMethod === "chatgpt" &&
    userId != null &&
    accountId != null;
  const select = (data: unknown) =>
    peers!.selectBilling(data, includePaymentMethod);
  return peers.useQuery({
    queryKey,
    queryFn,
    enabled,
    staleTime: peers.oneMinute,
    refetchOnWindowFocus: false,
    select,
  });
}
