// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qNr`) / export `gQ`.

export type BindBindDeferredUiGQPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  nj: (...args: unknown[]) => unknown;
  xnr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiGQPeers | null = null;

/** Wire bindBindDeferredUiGQ peers once companions land. */
export function setBindBindDeferredUiGQPeers(next: BindBindDeferredUiGQPeers): void {
  peers = next;
}

/**
 * Bundle export `gQ` / internal `qNr`.
 */
export function bindBindDeferredUiGQ() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiGQ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = t(peers.nj, e);
    switch (n?.kind) {
      case `local`:
        return n.conversation == null ? n.pendingWorktree.createdAt : t(peers.xnr, n.conversation.id) ?? n.conversation.updatedAt;
      case `remote`:
        return (n.task.updated_at ?? n.task.created_at ?? 0) * 1e3;
      case void 0:
        return 0;
    }
  });
}
