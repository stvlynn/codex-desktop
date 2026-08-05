// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sxo`) / export `setPendingWorktreeSourceState`.

export type PendingWorktreeSourceStatePeers = {
  Bxo: (...args: unknown[]) => unknown;
  Exo: (...args: unknown[]) => unknown;
};
let peers: PendingWorktreeSourceStatePeers | null = null;

/** Wire setPendingWorktreeSourceState peers once companions land. */
export function setPendingWorktreeSourceStatePeers(
  next: PendingWorktreeSourceStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `setPendingWorktreeSourceState` / internal `Sxo`.
 */
export function setPendingWorktreeSourceState(
  e: unknown,
  {
    pendingWorktreeId,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("setPendingWorktreeSourceState peers are not configured");
  }
  e.set(peers.Bxo, pendingWorktreeId, {
    sourceWorkspaceRoot,
    state: peers.Exo(e, sourceConversationId),
  });
}
