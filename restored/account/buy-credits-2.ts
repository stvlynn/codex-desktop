// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `arc`) / export `$p`.

export type BuyCredits2Peers = {
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  PZ: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gEs: (...args: unknown[]) => unknown;
  irc: (...args: unknown[]) => unknown;
  nrc: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  rrc: (...args: unknown[]) => unknown;
  trc: (...args: unknown[]) => unknown;
};

let peers: BuyCredits2Peers | null = null;

/** Wire buyCredits2 peers once companions land. */
export function setBuyCredits2Peers(next: BuyCredits2Peers): void {
  peers = next;
}

/**
 * Bundle export `$p` / internal `arc`.
 */
export function buyCredits2() {
  if (peers == null) {
    throw new Error("buyCredits2 peers are not configured");
  }
  return peers.e(() => {
    (peers.Ho(),
      peers.gEs(),
      peers.ed(),
      peers.Fh(),
      peers.PZ(),
      peers.qx(),
      (trc = {
        personal: `3605558075`,
        workspace_owner: `1385051397`,
        workspace_member: `2673725514`,
      }),
      (nrc = {
        enabled: !1,
        remainingThresholdPercent: 20,
        ctaVariant: `default`,
      }),
      (rrc = peers.Ta(peers.Q, () => new Set())),
      (irc = peers.Ta(peers.Q, () => new Set())));
  });
}
