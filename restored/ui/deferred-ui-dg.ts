// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bP`) / export `dG`.

export type BindDeferredUiDGPeers = {
  GM: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiDGPeers | null = null;

/** Wire bindDeferredUiDG peers once companions land. */
export function setBindDeferredUiDGPeers(next: BindDeferredUiDGPeers): void {
  peers = next;
}

/**
 * Bundle export `dG` / internal `bP`.
 */
export function bindDeferredUiDG() {
  if (peers == null) {
    throw new Error("bindDeferredUiDG peers are not configured");
  }

  return peers.Ta(peers.GM, null);
}
