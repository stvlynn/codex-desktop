// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gOs`) / export `Av`.

export type ReferralInviteTrackingPeers = {
  Q: (...args: unknown[]) => unknown;
  fOs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: ReferralInviteTrackingPeers | null = null;

/** Wire ReferralInviteTracking peers once companions land. */
export function setReferralInviteTrackingPeers(next: ReferralInviteTrackingPeers): void {
  peers = next;
}

/**
 * Bundle export `Av` / internal `gOs`.
 */
export function ReferralInviteTracking() {
  if (peers == null) {
    throw new Error("ReferralInviteTracking peers are not configured");
  }
  return peers.ka(peers.Q, e => peers.fOs(e, !0));
}
