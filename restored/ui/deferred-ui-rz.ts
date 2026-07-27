// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mM`) / export `rZ`.

export type BindDeferredUiRZPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  oGr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRZPeers | null = null;

/** Wire bindDeferredUiRZ peers once companions land. */
export function setBindDeferredUiRZPeers(next: BindDeferredUiRZPeers): void {
  peers = next;
}

/**
 * Bundle export `rZ` / internal `mM`.
 */
export function bindDeferredUiRZ() {
  if (peers == null) {
    throw new Error("bindDeferredUiRZ peers are not configured");
  }

  return peers.Ta(peers.Q, peers.oGr());
}
