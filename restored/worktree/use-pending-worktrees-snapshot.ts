// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `zKi`) / export `wV`.

export type UsePendingWorktreesSnapshotPeers = {
  useLocalStorage: (key: string) => [unknown];
  emptySnapshot: unknown;
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
 * Read pending_worktrees snapshot from local storage hook.
 */
export function usePendingWorktreesSnapshot(): unknown {
  if (peers == null) {
    throw new Error("UsePendingWorktreesSnapshot peers are not configured");
  }
  const [value] = peers.useLocalStorage("pending_worktrees");
  return value ?? peers.emptySnapshot;
}
