// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Os`) / export `kv`.

export type ReferralInviteTracking2Peers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fOs: (...args: unknown[]) => unknown;
  gOs: (...args: unknown[]) => unknown;
  hOs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: ReferralInviteTracking2Peers | null = null;

/** Wire ReferralInviteTracking2 peers once companions land. */
export function setReferralInviteTracking2Peers(
  next: ReferralInviteTracking2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `kv` / internal `_Os`.
 */
export function ReferralInviteTracking2() {
  if (peers == null) {
    throw new Error("ReferralInviteTracking2 peers are not configured");
  }
  return peers.e(() => {
    (peers.Qt(),
      peers.Ho(),
      peers.ed(),
      peers.Uf(),
      peers.Wh(),
      (hOs = peers.ka(peers.Q, (e) => peers.fOs(peers.e, !1))),
      (gOs = peers.ka(peers.Q, (e) => peers.fOs(peers.e, !0))));
  });
}
