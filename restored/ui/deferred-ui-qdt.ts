// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yXe`) / export `Qdt`.

export type BindDeferredUiQdtPeers = {
  LYe: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiQdtPeers | null = null;

/** Wire bindDeferredUiQdt peers once companions land. */
export function setBindDeferredUiQdtPeers(next: BindDeferredUiQdtPeers): void {
  peers = next;
}

/**
 * Bundle export `Qdt` / internal `yXe`.
 */
export function bindDeferredUiQdt() {
  if (peers == null) {
    throw new Error("bindDeferredUiQdt peers are not configured");
  }

  return peers.LYe;
}
