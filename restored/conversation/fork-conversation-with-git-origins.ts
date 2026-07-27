// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dCo`) / export `Kk`.

export type ForkConversationWithGitOriginsPeers = {
  DE: (...args: unknown[]) => unknown;
  DK: (...args: unknown[]) => unknown;
  EE: (...args: unknown[]) => unknown;
  KKi: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Sxo: (...args: unknown[]) => unknown;
  aSo: (...args: unknown[]) => unknown;
  dSo: (...args: unknown[]) => unknown;
  ez: (...args: unknown[]) => unknown;
  fCo: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  root: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  sD: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
  wSo: (...args: unknown[]) => unknown;
};
let peers: ForkConversationWithGitOriginsPeers | null = null;

/** Wire forkConversationWithGitOrigins peers once companions land. */
export function setForkConversationWithGitOriginsPeers(
  next: ForkConversationWithGitOriginsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Kk` / internal `dCo`.
 */
export async function forkConversationWithGitOrigins(
  e: unknown,
  {
    localEnvironmentSelectionsByWorkspace,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("forkConversationWithGitOrigins peers are not configured");
  }
  if (sourceConversationId == null || sourceWorkspaceRoot == null) return null;
  let i = e.get(peers.wD, sourceConversationId),
    a = await peers.rp("git-origins", {
      params: {
        dirs: [sourceWorkspaceRoot],
        hostId: i,
      },
      source: "fork_conversation_actions",
    });
  if (
    (a.origins.find((item) => {
      return item.dir === sourceWorkspaceRoot;
    })?.root ??
      a.origins[0]?.root ??
      null) == null
  )
    return (
      e
        .get(peers.rh)
        .danger(
          e.get(peers.LE).formatMessage(peers.DK.forkThreadRequiresGitRepo),
        ),
      null
    );
  let o = i ?? "local",
    s = await peers.aSo({
      hostConfig: e.get(peers.DE, o),
      hostId: o,
      operationSource: "fork_conversation_actions",
      selectionsByWorkspace: localEnvironmentSelectionsByWorkspace,
      workspaceRoot: sourceWorkspaceRoot,
    }),
    c = e.get(peers.LE),
    l = peers.fCo(e, sourceConversationId),
    u = peers.wSo(e, sourceConversationId, i),
    { clientThreadId, pendingWorktreeId } = peers.KKi({
      hostId: i,
      label: u ?? c.formatMessage(peers.DK.forkPendingWorktreeTitle),
      ...(u == null
        ? {}
        : {
            initialThreadTitle: u,
          }),
      sourceWorkspaceRoot,
      sourceWorkspaceRoots: peers.dSo({
        cwd: sourceWorkspaceRoot,
        runtimeWorkspaceRoots: e.get(peers.sD, sourceConversationId),
      }),
      startingState: {
        type: "working-tree",
      },
      localEnvironmentConfigPath: s,
      launchMode: "fork-conversation",
      projectAssignment: peers.ez({
        type: "assignment",
        assignment: e.get(peers.EE)?.[sourceConversationId],
        executionHostId: i,
      }),
      prompt: c.formatMessage(peers.DK.forkPendingWorktreePrompt),
      startConversationParamsInput: null,
      sourceConversationId,
      sourceCollaborationMode: l,
      targetTurnId: null,
    });
  return (
    peers.Sxo(e, {
      pendingWorktreeId,
      sourceConversationId,
      sourceWorkspaceRoot,
    }),
    {
      clientThreadId,
    }
  );
}
