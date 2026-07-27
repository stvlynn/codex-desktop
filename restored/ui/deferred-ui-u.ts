// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nbu`) / export `U`.

export type BindDeferredUiUPeers = {
  Ma: (...args: unknown[]) => unknown;
  Mbu: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiUPeers | null = null;

/** Wire bindDeferredUiU peers once companions land. */
export function setBindDeferredUiUPeers(next: BindDeferredUiUPeers): void {
  peers = next;
}

/**
 * Bundle export `U` / internal `Nbu`.
 */
export function bindDeferredUiU() {
  if (peers == null) {
    throw new Error("bindDeferredUiU peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Mbu).active);
}
