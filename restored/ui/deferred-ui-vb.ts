// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N$i`) / export `vB`.

export type BindDeferredUiVBPeers = {
  Ta: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiVBPeers | null = null;

/** Wire bindDeferredUiVB peers once companions land. */
export function setBindDeferredUiVBPeers(next: BindDeferredUiVBPeers): void {
  peers = next;
}

/**
 * Bundle export `vB` / internal `N$i`.
 */
export function bindDeferredUiVB() {
  if (peers == null) {
    throw new Error("bindDeferredUiVB peers are not configured");
  }

  return peers.Ta(peers.hT, () => new Set());
}
