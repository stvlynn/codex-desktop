// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `TEu`) / export `i`.

export type LaunchWorktreeConversationEntryPeers = {
  buildWorktreeInit: (entry: LaunchEntry) => unknown;
  expandWorkspaceRoots: (roots: unknown) => unknown[];
  ipc: (method: string, payload: Record<string, unknown>) => Promise<unknown>;
  resolveInitialTitle: (entry: LaunchEntry) => string;
  withAttachments: (entry: LaunchEntry) => unknown;
  mergeGoalInput: (input: unknown, goal: unknown) => unknown;
  wrapGoal: (goal: unknown) => unknown;
  normalizeStartParams: (
    params: Record<string, unknown>,
  ) => Record<string, unknown>;
};

let peers: LaunchWorktreeConversationEntryPeers | null = null;

/** Wire launchWorktreeConversationEntry peers once companions land. */
export function setLaunchWorktreeConversationEntryPeers(
  next: LaunchWorktreeConversationEntryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `i` / internal `TEu`.
 * Fork or start a conversation for a pending worktree launch entry.
 */
export type LaunchEntry = {
  launchMode: string;
  hostId: unknown;
  threadStartHostId?: unknown;
  sourceConversationId: unknown;
  sourceWorkspaceRoots: unknown;
  sourceCollaborationMode: unknown;
  threadSource: unknown;
  targetTurnId?: unknown | null;
  startConversationParamsInput: {
    input: unknown;
    workspaceRoots: unknown;
    projectAssignment?: { cwd?: unknown } | null;
  };
};

export async function launchWorktreeConversationEntry(args: {
  entry: LaunchEntry;
  threadGoalObjective?: unknown;
  workspaceRoot: unknown;
}): Promise<unknown> {
  if (peers == null) {
    throw new Error("LaunchWorktreeConversationEntry peers are not configured");
  }
  const { entry, threadGoalObjective, workspaceRoot } = args;
  const worktreeInit = peers.buildWorktreeInit(entry);
  if (entry.launchMode === "fork-conversation") {
    const workspaceRoots = [
      workspaceRoot,
      ...peers.expandWorkspaceRoots(entry.sourceWorkspaceRoots),
    ];
    const conversationId =
      entry.targetTurnId == null
        ? await peers.ipc("fork-conversation-from-latest", {
            hostId: entry.hostId,
            conversationId: entry.sourceConversationId,
            cwd: workspaceRoot,
            workspaceRoots,
            collaborationMode: entry.sourceCollaborationMode,
            threadSource: entry.threadSource,
          })
        : await peers.ipc("fork-conversation-from-turn", {
            conversationId: entry.sourceConversationId,
            targetTurnId: entry.targetTurnId,
            cwd: workspaceRoot,
            workspaceRoots,
            collaborationMode: entry.sourceCollaborationMode,
            threadSource: entry.threadSource,
          });
    if (worktreeInit != null) {
      await peers.ipc("add-worktree-init-synthetic-turn", {
        conversationId,
        worktreeInit,
      });
    }
    return conversationId;
  }
  if (entry.launchMode !== "start-conversation") {
    throw new Error(`Unsupported launch mode: ${entry.launchMode}`);
  }
  const initialTitle = peers.resolveInitialTitle(entry);
  const params =
    threadGoalObjective == null
      ? entry.startConversationParamsInput
      : {
          ...entry.startConversationParamsInput,
          fileAttachments: peers.withAttachments(entry),
          input: peers.mergeGoalInput(
            entry.startConversationParamsInput.input,
            peers.wrapGoal(threadGoalObjective),
          ),
        };
  const projectAssignment = params.projectAssignment;
  return peers.ipc("start-conversation", {
    hostId: entry.threadStartHostId ?? entry.hostId,
    ...peers.normalizeStartParams({
      ...params,
      workspaceRoots: [
        workspaceRoot,
        ...peers.expandWorkspaceRoots(params.workspaceRoots),
      ],
      cwd: workspaceRoot,
      projectAssignment:
        projectAssignment == null
          ? projectAssignment
          : { ...projectAssignment, cwd: workspaceRoot },
    }),
    initialTitle: initialTitle || undefined,
    skipAutoTitleGeneration: initialTitle.length > 0,
    worktreeInit: worktreeInit ?? undefined,
  });
}
