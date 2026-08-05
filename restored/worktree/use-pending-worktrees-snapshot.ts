// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zKi`) / export `wV`.

export type UsePendingWorktreesSnapshotPeers = {
  B_: (...args: unknown[]) => unknown;
  QKi: (...args: unknown[]) => unknown;
};

let peers: UsePendingWorktreesSnapshotPeers | null = null;

/** Wire usePendingWorktreesSnapshot peers once companions land. */
export function setUsePendingWorktreesSnapshotPeers(
  next: UsePendingWorktreesSnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `wV` / internal `zKi`.
 */
export function usePendingWorktreesSnapshot() {
  if (peers == null) {
    throw new Error("usePendingWorktreesSnapshot peers are not configured");
  }

  let [e] = peers.B_(`pending_worktrees`);
  return e ?? peers.QKi;
}
