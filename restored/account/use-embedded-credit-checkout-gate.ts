// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `jTs`) / export `ly`.

export type UseEmbeddedCreditCheckoutGatePeers = {
  useCheckoutOpener: (
    accountKind: string,
    gateName: string,
  ) => (opts: { getUrl: () => unknown; state?: unknown }) => unknown;
  buildCheckoutUrl: (
    quantity: unknown,
    opts: { autoTopUpEnabled: unknown; source: string },
  ) => unknown;
};

let peers: UseEmbeddedCreditCheckoutGatePeers | null = null;

/** Wire useEmbeddedCreditCheckoutGate peers once companions land. */
export function setUseEmbeddedCreditCheckoutGatePeers(
  next: UseEmbeddedCreditCheckoutGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ly` / internal `jTs`.
 * Build embedded credit-checkout opener for personal accounts.
 */
export function useEmbeddedCreditCheckoutGate(): (args: {
  autoTopUpEnabled: unknown;
  postCreditPurchaseAction?: unknown;
  quantity: unknown;
}) => unknown {
  if (peers == null) {
    throw new Error("UseEmbeddedCreditCheckoutGate peers are not configured");
  }
  const openCheckout = peers.useCheckoutOpener(
    "personal",
    "use_embedded_credit_checkout",
  );
  return (args) => {
    const { autoTopUpEnabled, postCreditPurchaseAction, quantity } = args;
    return openCheckout({
      getUrl: () =>
        peers!.buildCheckoutUrl(quantity, {
          autoTopUpEnabled,
          source: "codex-embedded-checkout",
        }),
      state:
        postCreditPurchaseAction == null
          ? undefined
          : { postCreditPurchaseAction },
    });
  };
}
