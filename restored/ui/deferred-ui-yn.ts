// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uiu`) / export `Yn`.

export type DeferredUiYnPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredUiYnPeers | null = null;

/** Wire deferredUiYn peers once companions land. */
export function setDeferredUiYnPeers(next: DeferredUiYnPeers): void {
  peers = next;
}

/**
 * Bundle export `Yn` / internal `uiu`.
 */
export function deferredUiYn() {
  if (peers == null) {
    throw new Error("deferredUiYn peers are not configured");
  }

  return peers.Ta(peers.Q, null);
}
