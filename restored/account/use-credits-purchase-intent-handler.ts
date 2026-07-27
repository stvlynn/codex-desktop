// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `BTs`) / export `sy`.

export type UseCreditsPurchaseIntentHandlerPeers = {
  useScope: () => unknown;
  useStatsigClient: () => unknown;
  useAccountEmail: () => { email: unknown };
  tryOpenCustomCheckout: (args: { quantity: string }) => boolean;
  isTrustedEvent: (event: unknown) => boolean;
  openCheckout: (url: unknown, event: unknown) => void;
  buildCheckoutUrl: (args: {
    loginHint: unknown;
    statsigClient: unknown;
    url: unknown;
  }) => unknown;
  creditsCheckoutPath: (quantity: string) => unknown;
  readGate: (
    client: unknown,
    gate: unknown,
    options: { disableExposureLog: boolean },
  ) => { get: (key: unknown, fallback: boolean) => boolean };
  checkoutGate: unknown;
  savedPaymentGateKey: unknown;
  customCheckoutGateKey: unknown;
};

let peers: UseCreditsPurchaseIntentHandlerPeers | null = null;

/** Wire useCreditsPurchaseIntentHandler peers once companions land. */
export function setUseCreditsPurchaseIntentHandlerPeers(next: UseCreditsPurchaseIntentHandlerPeers): void {
  peers = next;
}

/**
 * Bundle export `sy` / internal `BTs`.
 * Handle credit purchase intents with checkout/feature-gate peers.
 */
export function useCreditsPurchaseIntentHandler(): (
  intent: {
    intent: string;
    event?: unknown;
    hasSavedPaymentMethod?: boolean;
    isCustomCheckoutEnabled?: boolean;
  },
  force?: boolean,
) => void {
  if (peers == null) {
    throw new Error("UseCreditsPurchaseIntentHandler peers are not configured");
  }
  const scope = peers.useScope();
  const statsigClient = peers.useStatsigClient();
  const { email } = peers.useAccountEmail();
  void scope;
  return (intent, force) => {
    if (intent.intent === "purchase" && force) {
      if (
        !(intent.event != null && peers!.isTrustedEvent(intent.event)) &&
        peers!.tryOpenCustomCheckout({ quantity: "1000" })
      ) {
        return;
      }
      peers!.openCheckout(
        peers!.buildCheckoutUrl({
          loginHint: email,
          statsigClient,
          url: peers!.creditsCheckoutPath("1000"),
        }),
        intent.event,
      );
      return;
    }
    if (
      intent.intent === "purchase" &&
      !(intent.event != null && peers!.isTrustedEvent(intent.event)) &&
      (peers!
        .readGate(statsigClient, peers!.checkoutGate, {
          disableExposureLog: true,
        })
        .get(peers!.savedPaymentGateKey, false) ||
        (intent.hasSavedPaymentMethod === false &&
          peers!
            .readGate(statsigClient, peers!.checkoutGate, {
              disableExposureLog: true,
            })
            .get(peers!.customCheckoutGateKey, false)))
    ) {
      if (
        intent.isCustomCheckoutEnabled &&
        peers!.tryOpenCustomCheckout({ quantity: "1000" })
      ) {
        return;
      }
      peers!.openCheckout(
        intent.isCustomCheckoutEnabled
          ? peers!.buildCheckoutUrl({
              loginHint: email,
              statsigClient,
              url: peers!.creditsCheckoutPath("1000"),
            })
          : peers!.creditsCheckoutPath("1000"),
        intent.event,
      );
    }
  };
}
