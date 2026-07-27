// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CX`) / export `LC`.

export type BindDeferredUiLCPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiLCPeers | null = null;

/** Wire bindDeferredUiLC peers once companions land. */
export function setBindDeferredUiLCPeers(next: BindDeferredUiLCPeers): void {
  peers = next;
}

/**
 * Bundle export `LC` / internal `CX`.
 */
export function bindDeferredUiLC() {
  if (peers == null) {
    throw new Error("bindDeferredUiLC peers are not configured");
  }

  return peers.Ta(peers.Q, !1);
}
