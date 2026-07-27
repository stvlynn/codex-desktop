// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uD`) / export `O2`.

export type BindBindDeferredUiO22Peers = {
  JE: (...args: unknown[]) => unknown;
  YE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiO22Peers | null = null;

/** Wire bindBindDeferredUiO22 peers once companions land. */
export function setBindBindDeferredUiO22Peers(next: BindBindDeferredUiO22Peers): void {
  peers = next;
}

/**
 * Bundle export `O2` / internal `uD`.
 */
export function bindBindDeferredUiO22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiO22 peers are not configured");
  }

  return peers.JE(({ latestCollaborationMode: e }) => e, peers.YE.default);
}
