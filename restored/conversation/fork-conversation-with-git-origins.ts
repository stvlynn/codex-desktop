// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `dCo`) / export `Kk`.

export type ForkConversationWithGitOriginsPeers = {
  hostIdAtom: unknown;
  toastAtom: unknown;
  intlAtom: unknown;
  forkThreadNoGitOriginMessage: unknown;
  invokeGitOrigins: (args: {
    params: { dirs: string[]; hostId: unknown };
    source: "fork_conversation_actions";
  }) => Promise<{ origins: Array<{ dir?: string; root?: unknown }> }>;
  forkConversation: (
    store: any,
    args: {
      localEnvironmentSelectionsByWorkspace: unknown;
      sourceConversationId: unknown;
      sourceWorkspaceRoot: unknown;
    },
  ) => Promise<unknown>;
};

let peers: ForkConversationWithGitOriginsPeers | null = null;

/** Wire fork-with-git-origins peers once companions land. */
export function setForkConversationWithGitOriginsPeers(
  next: ForkConversationWithGitOriginsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Kk` / internal `dCo`.
 * Fork a conversation only when the workspace has a git origin.
 */
export async function forkConversationWithGitOrigins(
  store: { get: (atom: unknown, ...args: unknown[]) => any },
  args: {
    localEnvironmentSelectionsByWorkspace: unknown;
    sourceConversationId?: unknown;
    sourceWorkspaceRoot?: string | null;
  },
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ForkConversationWithGitOrigins peers are not configured");
  }
  const {
    localEnvironmentSelectionsByWorkspace,
    sourceConversationId,
    sourceWorkspaceRoot,
  } = args;
  if (sourceConversationId == null || sourceWorkspaceRoot == null) return null;
  const hostId = store.get(peers.hostIdAtom, sourceConversationId);
  const origins = await peers.invokeGitOrigins({
    params: { dirs: [sourceWorkspaceRoot], hostId },
    source: "fork_conversation_actions",
  });
  const root =
    origins.origins.find((entry) => entry.dir === sourceWorkspaceRoot)?.root ??
    origins.origins[0]?.root ??
    null;
  if (root == null) {
    store
      .get(peers.toastAtom)
      .danger(
        store
          .get(peers.intlAtom)
          .formatMessage(peers.forkThreadNoGitOriginMessage),
      );
    return null;
  }
  return peers.forkConversation(store, {
    localEnvironmentSelectionsByWorkspace,
    sourceConversationId,
    sourceWorkspaceRoot,
  });
}
