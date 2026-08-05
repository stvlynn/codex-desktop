// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rj`) / export `fQ`.

export type BindBindDeferredUiFQPeers = {
  GNr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  VNr: (...args: unknown[]) => unknown;
  branch: (...args: unknown[]) => unknown;
  cD: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  dNr: (...args: unknown[]) => unknown;
  gitInfo: (...args: unknown[]) => unknown;
  hasLiveConversation: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  pNr: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
  summary: (...args: unknown[]) => unknown;
  title: (...args: unknown[]) => unknown;
  workspaceKind: (...args: unknown[]) => unknown;
  xD: (...args: unknown[]) => unknown;
  zA: (...args: unknown[]) => unknown;
  znr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiFQPeers | null = null;

/** Wire bindBindDeferredUiFQ peers once companions land. */
export function setBindBindDeferredUiFQPeers(
  next: BindBindDeferredUiFQPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fQ` / internal `rj`.
 */
export function bindBindDeferredUiFQ() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiFQ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = peers.zA(e);
    switch (n?.kind) {
      case `local`: {
        let e = peers.pNr(t, n.threadId);
        if (e != null)
          return {
            kind: `local`,
            key: n.key,
            conversationId: null,
            cwd: e.sourceWorkspaceRoot,
            gitBranch: null,
            hostId: e.hostId,
            pendingWorktree: e,
            source: null,
            workspaceKind: null,
          };
        let r = peers.dNr(t, n.threadId);
        if (r == null) return null;
        let i = t(peers.VNr, r);
        if (i?.hasLiveConversation === !1) {
          let e = i.summary;
          return {
            kind: `local`,
            key: n.key,
            conversationId: r,
            cwd: e.cwd,
            gitBranch: e.gitInfo?.branch ?? null,
            hostId: e.hostId,
            source: e.source,
            summary: e,
            workspaceKind: e.workspaceKind,
          };
        }
        let a = i?.summary ?? null;
        return {
          kind: `local`,
          key: n.key,
          catalogTitle: a?.title,
          conversationId: r,
          cwd: t(peers.oD, r) ?? a?.cwd ?? null,
          gitBranch: t(peers.cD, r) ?? a?.gitInfo?.branch ?? null,
          hostId: t(peers.rD, r) ?? a?.hostId ?? null,
          source: t(peers.znr, r) ?? a?.source ?? null,
          workspaceKind: t(peers.xD, r) ?? a?.workspaceKind ?? null,
        };
      }
      case `remote`:
        return t(peers.GNr, n.taskId);
      case void 0:
        return null;
    }
  });
}
