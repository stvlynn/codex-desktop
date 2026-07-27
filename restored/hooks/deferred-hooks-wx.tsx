// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eqr`) / export `wX`.

export type BindBindDeferredHooksWXPeers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bqr: (...args: unknown[]) => unknown;
  eqr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredHooksWXPeers | null = null;

/** Wire bindBindDeferredHooksWX peers once companions land. */
export function setBindBindDeferredHooksWXPeers(next: BindBindDeferredHooksWXPeers): void {
  peers = next;
}

/**
 * Bundle export `wX` / internal `Eqr`.
 */
export function bindBindDeferredHooksWX() {
  if (peers == null) {
    throw new Error("bindBindDeferredHooksWX peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => peers.eqr(e(peers.bqr)));
}
