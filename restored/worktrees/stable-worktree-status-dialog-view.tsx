// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `hR`) / export `CV`.
// Pending-worktree action controller (misnamed shell; body is the action bag).

export type PendingWorktreeLike = {
  id: string;
  hostId?: string;
  attempt?: number;
  phase?: string;
  launchMode?: string;
  worktreeOutputText?: string;
  setupOutputText?: string;
  errorMessage?: string | null;
  worktreeWorkspaceRoot?: string | null;
  worktreeGitRoot?: string | null;
  needsAttention?: boolean;
  threadGoalDraft?: unknown;
  [key: string]: unknown;
};

export type StableWorktreeStatusDialogPeers = {
  getAppScope: () => unknown;
  usePendingWorktrees: () => [
    PendingWorktreeLike[] | undefined,
    (
      updater: (
        prev: PendingWorktreeLike[] | undefined,
      ) => PendingWorktreeLike[] | undefined,
    ) => void,
  ];
  usePendingWorktreeConversationControls: () => {
    removePendingWorktreeConversationStart: (id: string) => void;
    retryPendingWorktreeConversationStart: (id: string) => void;
  };
  createPendingId: (hostId: string) => string;
  createViaElectron: (id: string, input: unknown) => string;
  buildQueuedEntry: (input: unknown) => PendingWorktreeLike;
  normalizeCreateInput: (id: string, input: unknown) => unknown;
  clearPendingLocal: (id: string) => void;
  renamePending: (scope: unknown, id: string, name: unknown) => void;
  setPinned: (scope: unknown, id: string, pinned: boolean) => void;
  patchPendingFlags: (
    scope: unknown,
    id: string,
    flags: Array<Record<string, unknown>>,
  ) => void;
  hostIdFromPendingId: (id: string) => string;
  applyThreadGoalDraft: (args: {
    draft: unknown;
    fallbackHostId?: string;
  }) => void;
  dispatchPendingMessage: (
    type: string,
    payload: { hostId: string; id: string },
  ) => void;
};

let peers: StableWorktreeStatusDialogPeers | null = null;

/** Wire pending-worktree store/hooks once companions land. */
export function setStableWorktreeStatusDialogPeers(
  next: StableWorktreeStatusDialogPeers,
): void {
  peers = next;
}

/** @deprecated Prefer setStableWorktreeStatusDialogPeers */
export function bindStableWorktreeStatusDialog(
  next: (...args: never[]) => unknown,
): void {
  void next;
}

export type StableWorktreeStatusActions = {
  createPendingWorktree: (input: {
    hostId: string;
    [key: string]: unknown;
  }) => string;
  renamePendingWorktree: (id: string, name: unknown) => void;
  setPendingWorktreePinned: (id: string, pinned: boolean) => void;
  setPendingWorktreePinnedBeforeThreadId: (id: string, before: unknown) => void;
  clearPendingWorktreeAttention: (id: string) => void;
  retryPendingWorktree: (id: string) => void;
  continuePendingWorktree: (id: string) => void;
  cancelPendingWorktree: (id: string) => void;
  dismissPendingWorktree: (id: string) => void;
};

/**
 * Bundle export `CV` / internal `hR`.
 * Returns pending-worktree status action handlers (dialog controller bag).
 */
export function useStableWorktreeStatusDialog(): StableWorktreeStatusActions {
  if (peers == null) {
    throw new Error("StableWorktreeStatusDialog peers are not configured");
  }
  const scope = peers.getAppScope();
  const [pending, setPending] = peers.usePendingWorktrees();
  const {
    removePendingWorktreeConversationStart,
    retryPendingWorktreeConversationStart,
  } = peers.usePendingWorktreeConversationControls();

  const createPendingWorktree = (input: {
    hostId: string;
    [key: string]: unknown;
  }): string => {
    const id = peers!.createPendingId(input.hostId);
    if (
      typeof window !== "undefined" &&
      (window as { electronBridge?: unknown }).electronBridge != null
    ) {
      return peers!.createViaElectron(id, input);
    }
    const entry = peers!.buildQueuedEntry(
      peers!.normalizeCreateInput(id, input),
    );
    if (entry.launchMode !== "create-stable-worktree") {
      peers!.clearPendingLocal(id);
    }
    setPending((prev) => [...(prev ?? []), entry]);
    return id;
  };

  const applyDraftIfNeeded = (id: string): void => {
    const entry = pending?.find((item) => item.id === id);
    if (
      entry?.launchMode === "start-conversation" &&
      entry.threadGoalDraft != null
    ) {
      peers!.applyThreadGoalDraft({
        draft: entry.threadGoalDraft,
        fallbackHostId: entry.hostId,
      });
    }
  };

  return {
    createPendingWorktree,
    renamePendingWorktree: (id, name) => peers!.renamePending(scope, id, name),
    setPendingWorktreePinned: (id, pinned) =>
      peers!.setPinned(scope, id, pinned),
    setPendingWorktreePinnedBeforeThreadId: (id, before) =>
      peers!.patchPendingFlags(scope, id, [
        { type: "pinnedBeforeThreadId", beforeThreadId: before },
      ]),
    clearPendingWorktreeAttention: (id) =>
      peers!.patchPendingFlags(scope, id, [
        { type: "needsAttention", needsAttention: false },
      ]),
    retryPendingWorktree: (id) => {
      retryPendingWorktreeConversationStart(id);
      if (
        typeof window !== "undefined" &&
        (window as { electronBridge?: unknown }).electronBridge == null
      ) {
        setPending((prev) =>
          (prev ?? []).map((item) =>
            item.id === id
              ? {
                  ...item,
                  attempt: (item.attempt ?? 0) + 1,
                  phase: "queued",
                  worktreeOutputText: "",
                  setupOutputText: "",
                  errorMessage: null,
                  worktreeWorkspaceRoot: null,
                  worktreeGitRoot: null,
                  needsAttention: false,
                }
              : item,
          ),
        );
        return;
      }
      peers!.dispatchPendingMessage("pending-worktree-retry", {
        hostId: peers!.hostIdFromPendingId(id),
        id,
      });
    },
    continuePendingWorktree: (id) => {
      peers!.clearPendingLocal(id);
      if (
        typeof window !== "undefined" &&
        (window as { electronBridge?: unknown }).electronBridge == null
      ) {
        setPending((prev) =>
          (prev ?? []).map((item) =>
            item.id === id &&
            item.phase === "failed" &&
            item.worktreeGitRoot != null &&
            item.worktreeWorkspaceRoot != null
              ? { ...item, phase: "worktree-ready", needsAttention: false }
              : item,
          ),
        );
        return;
      }
      peers!.dispatchPendingMessage("pending-worktree-continue", {
        hostId: peers!.hostIdFromPendingId(id),
        id,
      });
    },
    cancelPendingWorktree: (id) => {
      removePendingWorktreeConversationStart(id);
      applyDraftIfNeeded(id);
      if (
        typeof window !== "undefined" &&
        (window as { electronBridge?: unknown }).electronBridge == null
      ) {
        setPending((prev) => (prev ?? []).filter((item) => item.id !== id));
        return;
      }
      peers!.dispatchPendingMessage("pending-worktree-cancel", {
        hostId: peers!.hostIdFromPendingId(id),
        id,
      });
    },
    dismissPendingWorktree: (id) => {
      removePendingWorktreeConversationStart(id);
      applyDraftIfNeeded(id);
      if (
        typeof window !== "undefined" &&
        (window as { electronBridge?: unknown }).electronBridge == null
      ) {
        setPending((prev) => (prev ?? []).filter((item) => item.id !== id));
        return;
      }
      peers!.dispatchPendingMessage("pending-worktree-dismiss", {
        hostId: peers!.hostIdFromPendingId(id),
        id,
      });
    },
  };
}

/** Compat export — same controller bag as the historical dialog-view shell. */
export function StableWorktreeStatusDialog(): StableWorktreeStatusActions {
  return useStableWorktreeStatusDialog();
}
