// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RAo`) / export `XO`.

export type BindDeferredNavigationXOPeers = {
  LAo: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNavigationXOPeers | null = null;

/** Wire bindDeferredNavigationXO peers once companions land. */
export function setBindDeferredNavigationXOPeers(
  next: BindDeferredNavigationXOPeers,
): void {
  peers = next;
}

/**
 * Bundle export `XO` / internal `RAo`.
 */
export function bindDeferredNavigationXO() {
  if (peers == null) {
    throw new Error("bindDeferredNavigationXO peers are not configured");
  }

  return peers.kp(peers.LAo, !1);
}
