// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V$l`) / export `Mi`.

export type DeferredAccountMi2Peers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountMi2Peers | null = null;

/** Wire deferredAccountMi2 peers once companions land. */
export function setDeferredAccountMi2Peers(
  next: DeferredAccountMi2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Mi` / internal `V$l`.
 */
export function deferredAccountMi2() {
  if (peers == null) {
    throw new Error("deferredAccountMi2 peers are not configured");
  }
  return peers.kp(`gift-credits-profile-coachmark-pending`, !1);
}
