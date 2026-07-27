// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gCo`) / export `Wk`.

export type BindDeferredUiWkPeers = {
  Ln: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWkPeers | null = null;

/** Wire bindDeferredUiWk peers once companions land. */
export function setBindDeferredUiWkPeers(next: BindDeferredUiWkPeers): void {
  peers = next;
}

/**
 * Bundle export `Wk` / internal `gCo`.
 */
export function bindDeferredUiWk() {
  if (peers == null) {
    throw new Error("bindDeferredUiWk peers are not configured");
  }

  return peers.Ln();
}
