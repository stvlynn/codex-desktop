// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wD`) / export `U2`.

export type BindBindDeferredUiU232Peers = {
  CD: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  Vtr: (...args: unknown[]) => unknown;
  getHostId: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiU232Peers | null = null;

/** Wire bindBindDeferredUiU232 peers once companions land. */
export function setBindBindDeferredUiU232Peers(
  next: BindBindDeferredUiU232Peers,
): void {
  peers = next;
}

/**
 * Bundle export `U2` / internal `wD`.
 */
export function bindBindDeferredUiU232() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiU232 peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    (e, { get: t }) =>
      peers.Vtr(t, e) ?? t(peers.CD, e)?.getHostId() ?? t(peers.SD),
  );
}
