// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `nms`) / export `Fx`.

export type TryActivateConversationFromPendingWorktreePeers = {
  hasPending: (store: unknown) => boolean;
  activate: (
    store: unknown,
    conversationId: unknown,
    hostId: unknown,
    opts: { source: unknown },
  ) => void;
  resolveConversationId: (pending: unknown) => unknown;
  quickChatSource: unknown;
};

let peers: TryActivateConversationFromPendingWorktreePeers | null = null;

/** Wire tryActivateConversationFromPendingWorktree peers once companions land. */
export function setTryActivateConversationFromPendingWorktreePeers(
  next: TryActivateConversationFromPendingWorktreePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fx` / internal `nms`.
 * When enabled and a pending worktree exists, activate its conversation.
 */
export function tryActivateConversationFromPendingWorktree(
  store: unknown,
  pending: unknown,
  hostId: unknown,
  opts: { enabled: boolean },
): boolean {
  if (peers == null) {
    throw new Error(
      "TryActivateConversationFromPendingWorktree peers are not configured",
    );
  }
  if (!opts.enabled || !peers.hasPending(store)) return false;
  peers.activate(store, peers.resolveConversationId(pending), hostId, {
    source: peers.quickChatSource,
  });
  return true;
}
