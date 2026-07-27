// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `djl`) / export `ec`.

export type BindDeferredUiEcPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  tjl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiEcPeers | null = null;

/** Wire bindDeferredUiEc peers once companions land. */
export function setBindDeferredUiEcPeers(next: BindDeferredUiEcPeers): void {
  peers = next;
}

/**
 * Bundle export `ec` / internal `djl`.
 */
export function bindDeferredUiEc() {
  if (peers == null) {
    throw new Error("bindDeferredUiEc peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => e == null ? null : peers.tjl(t(peers.bD, e)));
}
