// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iD`) / export `h2`.

export type BindBindDeferredUiH2Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  brr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiH2Peers | null = null;

/** Wire bindBindDeferredUiH2 peers once companions land. */
export function setBindBindDeferredUiH2Peers(next: BindBindDeferredUiH2Peers): void {
  peers = next;
}

/**
 * Bundle export `h2` / internal `iD`.
 */
export function bindBindDeferredUiH2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiH2 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => t(t(peers.brr, e)) != null);
}
