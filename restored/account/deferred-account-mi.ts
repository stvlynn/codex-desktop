// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V$l`) / export `Mi`.

export type DeferredAccountMiPeers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountMiPeers | null = null;

/** Wire deferredAccountMi peers once companions land. */
export function setDeferredAccountMiPeers(next: DeferredAccountMiPeers): void {
  peers = next;
}

/**
 * Bundle export `Mi` / internal `V$l`.
 */
export function deferredAccountMi() {
  if (peers == null) {
    throw new Error("deferredAccountMi peers are not configured");
  }
  return peers.kp(`gift-credits-profile-coachmark-pending`, !1);
}
