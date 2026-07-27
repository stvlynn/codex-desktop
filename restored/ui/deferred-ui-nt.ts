// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P9`) / export `nt`.

export type BindDeferredUiNtPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiNtPeers | null = null;

/** Wire bindDeferredUiNt peers once companions land. */
export function setBindDeferredUiNtPeers(next: BindDeferredUiNtPeers): void {
  peers = next;
}

/**
 * Bundle export `nt` / internal `P9`.
 */
export function bindDeferredUiNt() {
  if (peers == null) {
    throw new Error("bindDeferredUiNt peers are not configured");
  }

  return peers.Ta(peers.Q, () => new Map());
}
