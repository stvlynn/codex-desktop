// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H9o`) / export `zw`.

export type BindDeferredUiZwPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiZwPeers | null = null;

/** Wire bindDeferredUiZw peers once companions land. */
export function setBindDeferredUiZwPeers(next: BindDeferredUiZwPeers): void {
  peers = next;
}

/**
 * Bundle export `zw` / internal `H9o`.
 */
export function bindDeferredUiZw() {
  if (peers == null) {
    throw new Error("bindDeferredUiZw peers are not configured");
  }

  return peers.Ta(peers.Q, `idle`);
}
