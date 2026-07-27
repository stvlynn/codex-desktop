// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `pJs`) / export `Rg`.

export type EnqueueWorktreeDirectionTaskPeers = {
  useSetAtom: (
    atom: unknown,
  ) => (updater: (prev: OpsState) => OpsState) => void;
  operationsAtom: unknown;
  newId: () => string;
  buildSteps: (stepIds: unknown[]) => unknown;
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
 * Return enqueue helpers that queue to-worktree / to-local / to-host-worktree ops.
 */
export type OpsState = {
  activeOperationId: unknown;
  operations: unknown[];
};

export type DirectionRequest = {
  sourceConversationId: unknown;
  sourceBranch: unknown;
  localBranch?: unknown;
  worktreeBranch?: unknown;
  stepIds: unknown[];
  request: unknown;
  composerViewState: unknown;
};

export function enqueueWorktreeDirectionTask(): {
  enqueueToWorktree: (req: DirectionRequest) => void;
  enqueueToLocal: (req: DirectionRequest) => void;
  enqueueToHostWorktree: (req: DirectionRequest) => void;
} {
  if (peers == null) {
    throw new Error("EnqueueWorktreeDirectionTask peers are not configured");
  }
  const setOps = peers.useSetAtom(peers.operationsAtom);
  const enqueue = (
    direction: "to-worktree" | "to-local" | "to-host-worktree",
    req: DirectionRequest,
  ) => {
    const op = {
      id: peers!.newId(),
      direction,
      status: "queued",
      sourceConversationId: req.sourceConversationId,
      targetConversationId: null,
      sourceBranch: req.sourceBranch,
      localBranch: direction === "to-host-worktree" ? null : req.localBranch,
      worktreeBranch: direction === "to-worktree" ? req.worktreeBranch : null,
      stepIds: req.stepIds,
      steps: peers!.buildSteps(req.stepIds),
      request: req.request,
      errorMessage: null,
      warningMessage: null,
      execOutput: null,
      hasUnseenTerminalState: false,
      composerViewState: req.composerViewState,
    };
    setOps((prev) => ({
      activeOperationId: null,
      operations: [...prev.operations, op],
    }));
  };
  return {
    enqueueToWorktree: (req) => enqueue("to-worktree", req),
    enqueueToLocal: (req) => enqueue("to-local", req),
    enqueueToHostWorktree: (req) => enqueue("to-host-worktree", req),
  };
}
