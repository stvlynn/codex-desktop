// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sGr`) / export `tZ`.

export type BindDeferredUiTZPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiTZPeers | null = null;

/** Wire bindDeferredUiTZ peers once companions land. */
export function setBindDeferredUiTZPeers(next: BindDeferredUiTZPeers): void {
  peers = next;
}

/**
 * Bundle export `tZ` / internal `sGr`.
 */
export function bindDeferredUiTZ() {
  if (peers == null) {
    throw new Error("bindDeferredUiTZ peers are not configured");
  }

  return peers.Ta(peers.Q, !1);
}
