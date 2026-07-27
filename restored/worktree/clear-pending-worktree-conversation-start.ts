// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `wxo`) / export `CA`.

export type AtomStoreWithFamilySet = {
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

export type ClearPendingWorktreeConversationStartPeers = {
  pendingWorktreeConversationStartFamilyAtom: unknown;
};

let peers: ClearPendingWorktreeConversationStartPeers | null = null;

/** Wire clear-pending worktree peers once companions land. */
export function setClearPendingWorktreeConversationStartPeers(
  next: ClearPendingWorktreeConversationStartPeers,
): void {
  peers = next;
}

/**
 * Bundle export `CA` / internal `wxo`.
 * Clear a pending-worktree conversation-start family entry.
 */
export function clearPendingWorktreeConversationStart(
  store: AtomStoreWithFamilySet,
  key: unknown,
): void {
  if (peers == null) {
    throw new Error(
      "ClearPendingWorktreeConversationStart peers are not configured",
    );
  }
  store.set(peers.pendingWorktreeConversationStartFamilyAtom, key, null);
}
