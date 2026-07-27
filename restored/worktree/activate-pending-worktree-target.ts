// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cxo`) / export `EA`.

export type ActivatePendingWorktreeTargetPeers = {
  Bxo: (...args: unknown[]) => unknown;
  bT: (...args: unknown[]) => unknown;
  jxo: (...args: unknown[]) => unknown;
  zxo: (...args: unknown[]) => unknown;
};
let peers: ActivatePendingWorktreeTargetPeers | null = null;

/** Wire activatePendingWorktreeTarget peers once companions land. */
export function setActivatePendingWorktreeTargetPeers(
  next: ActivatePendingWorktreeTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `EA` / internal `Cxo`.
 */
export function activatePendingWorktreeTarget(
  e: unknown,
  {
    pendingWorktreeId,
    targetConversationId,
    targetWorkspaceRoot,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("activatePendingWorktreeTarget peers are not configured");
  }
  let i = e.get(peers.Bxo, pendingWorktreeId);
  return i == null
    ? false
    : (e.set(
        peers.zxo,
        targetConversationId,
        peers.jxo(
          i.state,
          peers.bT(e, targetConversationId),
          i.sourceWorkspaceRoot,
          targetWorkspaceRoot,
        ),
      ),
      e.set(peers.Bxo, pendingWorktreeId, null),
      true);
}
