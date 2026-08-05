// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rnr`) / export `a2`.

export type BindBindDeferredUiA2Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ZE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiA2Peers | null = null;

/** Wire bindBindDeferredUiA2 peers once companions land. */
export function setBindBindDeferredUiA2Peers(
  next: BindBindDeferredUiA2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `a2` / internal `rnr`.
 */
export function bindBindDeferredUiA2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiA2 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) =>
    t(t(peers.ZE, e).appServerVersion$),
  );
}
