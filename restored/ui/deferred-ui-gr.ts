// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `n8i`) / export `GR`.

export type BindDeferredUiGRPeers = {
  t8i: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGRPeers | null = null;

/** Wire bindDeferredUiGR peers once companions land. */
export function setBindDeferredUiGRPeers(next: BindDeferredUiGRPeers): void {
  peers = next;
}

/**
 * Bundle export `GR` / internal `n8i`.
 */
export function bindDeferredUiGR() {
  if (peers == null) {
    throw new Error("bindDeferredUiGR peers are not configured");
  }

  return peers.t8i;
}
