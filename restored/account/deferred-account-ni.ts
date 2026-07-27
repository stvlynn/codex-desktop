// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B$l`) / export `Ni`.

export type DeferredAccountNiPeers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountNiPeers | null = null;

/** Wire deferredAccountNi peers once companions land. */
export function setDeferredAccountNiPeers(next: DeferredAccountNiPeers): void {
  peers = next;
}

/**
 * Bundle export `Ni` / internal `B$l`.
 */
export function deferredAccountNi() {
  if (peers == null) {
    throw new Error("deferredAccountNi peers are not configured");
  }
  return peers.kp(`has-seen-gift-credits-home-banner`, !1);
}
