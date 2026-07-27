// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ED`) / export `l2`.

export type BindBindDeferredUiL22Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TD: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  mrr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiL22Peers | null = null;

/** Wire bindBindDeferredUiL22 peers once companions land. */
export function setBindBindDeferredUiL22Peers(next: BindBindDeferredUiL22Peers): void {
  peers = next;
}

/**
 * Bundle export `l2` / internal `ED`.
 */
export function bindBindDeferredUiL22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiL22 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => e == null || t(peers.mrr, e) ? !1 : !t(peers.iD, e) || t(peers.hD, e) === `needs_resume` || t(peers.TD, e) == null);
}
