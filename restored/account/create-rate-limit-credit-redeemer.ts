// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `nOs`) / export `Pv`.

export type CreateRateLimitCreditRedeemerPeers = {
  redeemCredits: (input: {
    availableCredits: unknown;
    reason: unknown;
  }) => Promise<unknown>;
};

let peers: CreateRateLimitCreditRedeemerPeers | null = null;

/** Wire createRateLimitCreditRedeemer peers once companions land. */
export function setCreateRateLimitCreditRedeemerPeers(
  next: CreateRateLimitCreditRedeemerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pv` / internal `nOs`.
 * Create a single-flight credit redeemer for rate-limit recovery.
 */
export function createRateLimitCreditRedeemer(): {
  redeem: (input: {
    availableCredits: unknown;
    reason?: unknown;
  }) => Promise<unknown>;
} {
  if (peers == null) {
    throw new Error("CreateRateLimitCreditRedeemer peers are not configured");
  }
  let inFlight = false;
  let pending: Promise<unknown> | undefined;
  return {
    async redeem({ availableCredits, reason }) {
      if (inFlight && pending != null) return pending;
      inFlight = true;
      pending = peers!
        .redeemCredits({ availableCredits, reason })
        .finally(() => {
          inFlight = false;
          pending = undefined;
        });
      return pending;
    },
  };
}
