// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pJs`) / export `Rg`.

export type EnqueueWorktreeDirectionTaskPeers = {
  _Js: (...args: unknown[]) => unknown;
  fx: (...args: unknown[]) => unknown;
  gJs: (...args: unknown[]) => unknown;
  hJs: (...args: unknown[]) => unknown;
  mJs: (...args: unknown[]) => unknown;
  rr: (...args: unknown[]) => unknown;
  uy: (...args: unknown[]) => unknown;
};
let peers: EnqueueWorktreeDirectionTaskPeers | null = null;

/** Wire enqueueWorktreeDirectionTask peers once companions land. */
export function setEnqueueWorktreeDirectionTaskPeers(
  next: EnqueueWorktreeDirectionTaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rg` / internal `pJs`.
 */
export function enqueueWorktreeDirectionTask() {
  if (peers == null) {
    throw new Error("enqueueWorktreeDirectionTask peers are not configured");
  }
  let [, t] = peers.rr(peers._Js),
    n = (e) => {
      let n = {
        id: peers.uy(),
        direction: "to-worktree",
        status: "queued",
        sourceConversationId: e.sourceConversationId,
        targetConversationId: null,
        sourceBranch: e.sourceBranch,
        localBranch: e.localBranch,
        worktreeBranch: e.worktreeBranch,
        stepIds: e.stepIds,
        steps: peers.hJs(e.stepIds),
        request: e.request,
        errorMessage: null,
        warningMessage: null,
        execOutput: null,
        hasUnseenTerminalState: false,
        composerViewState: e.composerViewState,
      };
      t((e) => {
        return {
          activeOperationId: null,
          operations: [...e.operations, n],
        };
      });
    };
  let r = n,
    i = (e) => {
      let n = {
        id: peers.uy(),
        direction: "to-local",
        status: "queued",
        sourceConversationId: e.sourceConversationId,
        targetConversationId: null,
        sourceBranch: e.sourceBranch,
        localBranch: e.localBranch,
        worktreeBranch: null,
        stepIds: e.stepIds,
        steps: peers.hJs(e.stepIds),
        request: e.request,
        errorMessage: null,
        warningMessage: null,
        execOutput: null,
        hasUnseenTerminalState: false,
        composerViewState: e.composerViewState,
      };
      t((e) => {
        return {
          activeOperationId: null,
          operations: [...e.operations, n],
        };
      });
    };
  let a = i,
    o = (e) => {
      let n = {
        id: peers.uy(),
        direction: "to-host-worktree",
        status: "queued",
        sourceConversationId: e.sourceConversationId,
        targetConversationId: null,
        sourceBranch: e.sourceBranch,
        localBranch: null,
        worktreeBranch: null,
        stepIds: e.stepIds,
        steps: peers.hJs(e.stepIds),
        request: e.request,
        errorMessage: null,
        warningMessage: null,
        execOutput: null,
        hasUnseenTerminalState: false,
        composerViewState: e.composerViewState,
      };
      t((e) => {
        return {
          activeOperationId: null,
          operations: [...e.operations, n],
        };
      });
    };
  let s = o,
    c = (e, n) => {
      t((t) => {
        return {
          ...t,
          operations: t.operations.map((item) => {
            return item.id === e ? peers.fx(item, n) : item;
          }),
        };
      });
    };
  let l = c,
    u = (e) => {
      t((t) => {
        return {
          activeOperationId:
            t.activeOperationId === e ? null : t.activeOperationId,
          operations: t.operations.filter((item) => {
            return item.id !== e;
          }),
        };
      });
    };
  let d = u,
    f = (e) => {
      t((t) => {
        return {
          activeOperationId: e,
          operations: t.operations.map((item) => {
            return item.id === e
              ? {
                  ...item,
                  hasUnseenTerminalState: false,
                }
              : item;
          }),
        };
      });
    };
  let p = f,
    m = () => {
      t(peers.mJs);
    };
  let h = m;
  return {
    addToWorktreeOperation: r,
    addToLocalOperation: a,
    addToHostWorktreeOperation: s,
    updateOperation: l,
    removeOperation: d,
    openOperation: p,
    closeActiveOperation: h,
  };
}
