// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Th`) / export `ult`.

export type BindDeferredUiUltPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiUltPeers | null = null;

/** Wire bindDeferredUiUlt peers once companions land. */
export function setBindDeferredUiUltPeers(next: BindDeferredUiUltPeers): void {
  peers = next;
}

/**
 * Bundle export `ult` / internal `Th`.
 */
export function bindDeferredUiUlt() {
  if (peers == null) {
    throw new Error("bindDeferredUiUlt peers are not configured");
  }

  return peers.Ta(peers.Q, null);
}
