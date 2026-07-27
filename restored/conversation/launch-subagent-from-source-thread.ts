// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LRc`) / export `Hd`.

export type LaunchSubagentFromSourceThreadPeers = {
  Bf: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  DK: (...args: unknown[]) => unknown;
  EE: (...args: unknown[]) => unknown;
  KKi: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  RRc: (...args: unknown[]) => unknown;
  Sxo: (...args: unknown[]) => unknown;
  aSo: (...args: unknown[]) => unknown;
  dSo: (...args: unknown[]) => unknown;
  ez: (...args: unknown[]) => unknown;
  gCo: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  sD: (...args: unknown[]) => unknown;
  uD: (...args: unknown[]) => unknown;
  vK: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
  xxo: (...args: unknown[]) => unknown;
  zRc: (...args: unknown[]) => unknown;
};
let peers: LaunchSubagentFromSourceThreadPeers | null = null;

/** Wire launchSubagentFromSourceThread peers once companions land. */
export function setLaunchSubagentFromSourceThreadPeers(
  next: LaunchSubagentFromSourceThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hd` / internal `LRc`.
 */
export async function launchSubagentFromSourceThread({
  environment = {
    type: "same-directory",
  },
  scope,
  sourceThreadId,
  targetThreadId,
  threadSource = "subagent",
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("launchSubagentFromSourceThread peers are not configured");
  }
  let a = peers.kl(targetThreadId ?? sourceThreadId),
    o = scope.get(peers.wD, a),
    s = scope.get(peers.oD, a),
    c = peers.dSo({
      cwd: s,
      runtimeWorkspaceRoots: scope.get(peers.sD, a),
    }),
    l = scope.get(peers.uD, a);
  switch (environment.type) {
    case "same-directory": {
      let n = await peers.Bf("fork-conversation-from-latest", {
        hostId: o,
        conversationId: a,
        cwd: s ?? undefined,
        workspaceRoots: s == null ? undefined : c,
        collaborationMode: l,
        threadSource,
      });
      return (
        peers.xxo(scope, {
          sourceConversationId: a,
          targetConversationId: n,
        }),
        {
          environment,
          sourceThreadId: a,
          threadId: n,
          continuation: peers.RRc,
        }
      );
    }
    case "worktree": {
      if (s == null)
        throw Error(
          "Cannot fork into a worktree because the source thread has no current directory.",
        );
      let e = await peers.aSo({
          hostConfig: scope.get(peers.DE, o),
          hostId: o,
          operationSource: "fork_conversation_actions",
          selectionsByWorkspace: peers.gCo.get(peers.vK),
          workspaceRoot: s,
        }),
        n = scope.get(peers.LE),
        { clientThreadId, pendingWorktreeId } = peers.KKi({
          hostId: o,
          label: n.formatMessage(peers.DK.forkPendingWorktreeTitle),
          sourceWorkspaceRoot: s,
          sourceWorkspaceRoots: c,
          startingState: {
            type: "working-tree",
          },
          localEnvironmentConfigPath: e,
          launchMode: "fork-conversation",
          projectAssignment: peers.ez({
            type: "assignment",
            assignment: scope.get(peers.EE)?.[a],
            executionHostId: o,
          }),
          prompt: n.formatMessage(peers.DK.forkPendingWorktreePrompt),
          startConversationParamsInput: null,
          sourceConversationId: a,
          sourceCollaborationMode: l,
          targetTurnId: null,
          threadSource,
        });
      return (
        peers.Sxo(scope, {
          pendingWorktreeId,
          sourceConversationId: a,
          sourceWorkspaceRoot: s,
        }),
        {
          environment: {
            type: "worktree",
          },
          clientThreadId,
          sourceThreadId: a,
          threadId: null,
          continuation: peers.zRc,
        }
      );
    }
  }
}
