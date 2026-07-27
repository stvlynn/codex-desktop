// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `uCo`) / export `Gk`.

export type ForkConversationFromLatestPeers = {
  hostIdAtom: unknown;
  runtimeWorkspaceRootsAtom: unknown;
  toastAtom: unknown;
  intlAtom: unknown;
  forkThreadErrorMessage: unknown;
  getHostId: (store: any, conversationId: string) => unknown;
  getCollaborationMode: (store: any, conversationId: string) => unknown;
  getForkTitle: (
    store: any,
    conversationId: string,
    hostId: unknown,
  ) => unknown;
  buildWorkspaceRoots: (args: {
    cwd: string;
    runtimeWorkspaceRoots: unknown;
  }) => unknown;
  invoke: (channel: string, payload: unknown) => Promise<unknown>;
  linkSourceTarget: (
    store: any,
    args: { sourceConversationId: string; targetConversationId: unknown },
  ) => void;
  logError: (message: string, context: unknown) => void;
};

let peers: ForkConversationFromLatestPeers | null = null;

/** Wire fork conversation peers once companions land. */
export function setForkConversationFromLatestPeers(
  next: ForkConversationFromLatestPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gk` / internal `uCo`.
 * Fork a local conversation from its latest turn.
 */
export async function forkConversationFromLatest(
  store: { get: (atom: unknown, ...args: unknown[]) => any },
  args: {
    sourceConversationId?: string | null;
    sourceWorkspaceRoot?: string | null;
  },
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ForkConversationFromLatest peers are not configured");
  }
  const { sourceConversationId, sourceWorkspaceRoot } = args;
  if (sourceConversationId == null) return null;
  try {
    const hostId = peers.getHostId(store, sourceConversationId);
    const collaborationMode = peers.getCollaborationMode(
      store,
      sourceConversationId,
    );
    const title = peers.getForkTitle(store, sourceConversationId, hostId);
    const forkedId = await peers.invoke("fork-conversation-from-latest", {
      hostId,
      conversationId: sourceConversationId,
      cwd: sourceWorkspaceRoot ?? undefined,
      workspaceRoots:
        sourceWorkspaceRoot == null
          ? undefined
          : peers.buildWorkspaceRoots({
              cwd: sourceWorkspaceRoot,
              runtimeWorkspaceRoots: store.get(
                peers.runtimeWorkspaceRootsAtom,
                sourceConversationId,
              ),
            }),
      collaborationMode,
    });
    if (title != null) {
      await peers.invoke("set-thread-title", {
        hostId,
        conversationId: forkedId,
        title,
      });
    }
    peers.linkSourceTarget(store, {
      sourceConversationId,
      targetConversationId: forkedId,
    });
    return forkedId;
  } catch (error) {
    peers.logError("Error forking local task", {
      safe: {},
      sensitive: { error },
    });
    store
      .get(peers.toastAtom)
      .danger(
        store.get(peers.intlAtom).formatMessage(peers.forkThreadErrorMessage),
      );
    return null;
  }
}
