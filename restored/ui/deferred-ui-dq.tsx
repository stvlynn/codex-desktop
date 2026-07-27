// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tPr`) / export `dQ`.

export type BindBindDeferredUiDQPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  rj: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiDQPeers | null = null;

/** Wire bindBindDeferredUiDQ peers once companions land. */
export function setBindBindDeferredUiDQPeers(next: BindBindDeferredUiDQPeers): void {
  peers = next;
}

/**
 * Bundle export `dQ` / internal `tPr`.
 */
export function bindBindDeferredUiDQ() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiDQ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => e.flatMap(e => {
    let n = t(peers.rj, e);
    return n == null ? [] : [n];
  }));
}
