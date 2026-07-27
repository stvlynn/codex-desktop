// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i_a`) / export `WI`.

export type UsePendingWorktreeConversationStartPeers = {
  Y: (...args: unknown[]) => unknown;
  _V: (...args: unknown[]) => unknown;
};

let peers: UsePendingWorktreeConversationStartPeers | null = null;

/** Wire usePendingWorktreeConversationStart peers once companions land. */
export function setUsePendingWorktreeConversationStartPeers(next: UsePendingWorktreeConversationStartPeers): void {
  peers = next;
}

/**
 * Bundle export `WI` / internal `i_a`.
 */
export function usePendingWorktreeConversationStart() {
  if (peers == null) {
    throw new Error("usePendingWorktreeConversationStart peers are not configured");
  }

  return peers.Y(peers._V);
}
