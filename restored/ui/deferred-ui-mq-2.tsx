// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nj`) / export `mQ`.

export type BindBindDeferredUiMQPeers = {
  GNr: (...args: unknown[]) => unknown;
  KNr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  WNr: (...args: unknown[]) => unknown;
  dNr: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  pNr: (...args: unknown[]) => unknown;
  zA: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiMQPeers | null = null;

/** Wire bindBindDeferredUiMQ peers once companions land. */
export function setBindBindDeferredUiMQPeers(next: BindBindDeferredUiMQPeers): void {
  peers = next;
}

/**
 * Bundle export `mQ` / internal `nj`.
 */
export function bindBindDeferredUiMQ() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiMQ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = peers.zA(e);
    switch (n?.kind) {
      case `local`:
        {
          let e = peers.pNr(t, n.threadId);
          if (e != null) return t(peers.KNr, e.clientThreadId);
          let r = peers.dNr(t, n.threadId);
          return r == null ? null : t(t(peers.WNr, r));
        }
      case `remote`:
        return t(peers.GNr, n.taskId);
      case void 0:
        return null;
    }
  });
}
