// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wX`) / export `IC`.

export type BindDeferredUiICPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiICPeers | null = null;

/** Wire bindDeferredUiIC peers once companions land. */
export function setBindDeferredUiICPeers(next: BindDeferredUiICPeers): void {
  peers = next;
}

/**
 * Bundle export `IC` / internal `wX`.
 */
export function bindDeferredUiIC() {
  if (peers == null) {
    throw new Error("bindDeferredUiIC peers are not configured");
  }

  return peers.Ta(peers.Q, !1);
}
