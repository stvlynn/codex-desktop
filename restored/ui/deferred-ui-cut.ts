// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g7e`) / export `cut`.

export type BindDeferredUiCutPeers = {
  t7e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCutPeers | null = null;

/** Wire bindDeferredUiCut peers once companions land. */
export function setBindDeferredUiCutPeers(next: BindDeferredUiCutPeers): void {
  peers = next;
}

/**
 * Bundle export `cut` / internal `g7e`.
 */
export function bindDeferredUiCut() {
  if (peers == null) {
    throw new Error("bindDeferredUiCut peers are not configured");
  }

  return peers.t7e;
}
