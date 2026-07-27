// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `i_a`) / export `WI`.

export type UsePendingWorktreeConversationStartPeers = {
  useAtomValue: (atom: unknown) => unknown;
  pendingWorktreeConversationStartAtom: unknown;
};

let peers: UsePendingWorktreeConversationStartPeers | null = null;

/** Wire pending worktree conversation-start peers once companions land. */
export function setUsePendingWorktreeConversationStartPeers(
  next: UsePendingWorktreeConversationStartPeers,
): void {
  peers = next;
}

/**
 * Bundle export `WI` / internal `i_a`.
 * Read pending worktree conversation-start atom value.
 */
export function usePendingWorktreeConversationStart(): unknown {
  if (peers == null) {
    throw new Error(
      "UsePendingWorktreeConversationStart peers are not configured",
    );
  }
  return peers.useAtomValue(peers.pendingWorktreeConversationStartAtom);
}
