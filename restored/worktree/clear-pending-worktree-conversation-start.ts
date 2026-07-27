// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wxo`) / export `CA`.

export type ClearPendingWorktreeConversationStartPeers = {
  Bxo: (...args: unknown[]) => unknown;
};

let peers: ClearPendingWorktreeConversationStartPeers | null = null;

/** Wire clearPendingWorktreeConversationStart peers once companions land. */
export function setClearPendingWorktreeConversationStartPeers(next: ClearPendingWorktreeConversationStartPeers): void {
  peers = next;
}

/**
 * Bundle export `CA` / internal `wxo`.
 */
export function clearPendingWorktreeConversationStart(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("clearPendingWorktreeConversationStart peers are not configured");
  }

  e.set(peers.Bxo, t, null);
}
