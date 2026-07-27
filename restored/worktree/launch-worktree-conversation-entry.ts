// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TEu`) / export `i`.

export type LaunchWorktreeConversationEntryPeers = {
  AEu: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  EEu: (...args: unknown[]) => unknown;
  Gbt: (...args: unknown[]) => unknown;
  OEu: (...args: unknown[]) => unknown;
  PSe: (...args: unknown[]) => unknown;
  S2r: (...args: unknown[]) => unknown;
  kEu: (...args: unknown[]) => unknown;
};

let peers: LaunchWorktreeConversationEntryPeers | null = null;

/** Wire launchWorktreeConversationEntry peers once companions land. */
export function setLaunchWorktreeConversationEntryPeers(next: LaunchWorktreeConversationEntryPeers): void {
  peers = next;
}

/**
 * Bundle export `i` / internal `TEu`.
 */
export async function launchWorktreeConversationEntry({
  entry: e,
  threadGoalObjective: t,
  workspaceRoot: n
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("launchWorktreeConversationEntry peers are not configured");
  }
  let r = peers.AEu(e);
  if (e.launchMode === `fork-conversation`) {
    let t = [n, ...peers.PSe(e.sourceWorkspaceRoots)],
      i;
    return i = e.targetTurnId == null ? await peers.Bf(`fork-conversation-from-latest`, {
      hostId: e.hostId,
      conversationId: e.sourceConversationId,
      cwd: n,
      workspaceRoots: t,
      collaborationMode: e.sourceCollaborationMode,
      threadSource: e.threadSource
    }) : await peers.Bf(`fork-conversation-from-turn`, {
      conversationId: e.sourceConversationId,
      targetTurnId: e.targetTurnId,
      cwd: n,
      workspaceRoots: t,
      collaborationMode: e.sourceCollaborationMode,
      threadSource: e.threadSource
    }), r != null && (await peers.Bf(`add-worktree-init-synthetic-turn`, {
      conversationId: i,
      worktreeInit: r
    })), i;
  }
  if (e.launchMode !== `start-conversation`) throw Error(`Unsupported launch mode: ${e.launchMode}`);
  let i = peers.OEu(e),
    a = t == null ? e.startConversationParamsInput : {
      ...e.startConversationParamsInput,
      fileAttachments: peers.EEu(e),
      input: peers.kEu(e.startConversationParamsInput.input, peers.Gbt(t))
    },
    o = a.projectAssignment;
  return peers.Bf(`start-conversation`, {
    hostId: e.threadStartHostId ?? e.hostId,
    ...peers.S2r({
      ...a,
      workspaceRoots: [n, ...peers.PSe(a.workspaceRoots)],
      cwd: n,
      projectAssignment: o == null ? o : {
        ...o,
        cwd: n
      }
    }),
    initialTitle: i || void 0,
    skipAutoTitleGeneration: i.length > 0,
    worktreeInit: r ?? void 0
  });
}
