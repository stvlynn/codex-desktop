// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lOs`) / export `Nv`.

export type ReferralInviteEligibilityPeers = {
  $u: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cOs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  iOs: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oOs: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sOs: (...args: unknown[]) => unknown;
  tOs: (...args: unknown[]) => unknown;
};

let peers: ReferralInviteEligibilityPeers | null = null;

/** Wire ReferralInviteEligibility peers once companions land. */
export function setReferralInviteEligibilityPeers(next: ReferralInviteEligibilityPeers): void {
  peers = next;
}

/**
 * Bundle export `Nv` / internal `lOs`.
 */
export function ReferralInviteEligibility() {
  if (peers == null) {
    throw new Error("ReferralInviteEligibility peers are not configured");
  }
  return peers.e(() => {
    oOs = peers.c(), peers.Hb(), peers.Ho(), sOs = peers.r(peers.o(), 1), peers.$u(), peers.aN(), peers.Kb(), peers.ed(), peers.tOs(), peers.iOs(), cOs = peers.J();
  });
}
