// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XNr`) / export `hQ`.

export type BindBindDeferredUiHQPeers = {
  ANr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QA: (...args: unknown[]) => unknown;
  nj: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiHQPeers | null = null;

/** Wire bindBindDeferredUiHQ peers once companions land. */
export function setBindBindDeferredUiHQPeers(next: BindBindDeferredUiHQPeers): void {
  peers = next;
}

/**
 * Bundle export `hQ` / internal `XNr`.
 */
export function bindBindDeferredUiHQ() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiHQ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => e.length === 0 ? peers.ANr : e.flatMap(e => {
    let n = t(peers.nj, e);
    return n == null ? [] : [n];
  }), {
    isEqual: peers.QA
  });
}
