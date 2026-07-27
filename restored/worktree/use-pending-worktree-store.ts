// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `EKi`) / export `DV`.

export type UsePendingWorktreeStorePeers = {
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
  ) => unknown;
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => unknown;
};

let peers: UsePendingWorktreeStorePeers | null = null;

/** Wire usePendingWorktreeStore peers once companions land. */
export function setUsePendingWorktreeStorePeers(
  next: UsePendingWorktreeStorePeers,
): void {
  peers = next;
}

/**
 * Bundle export `DV` / internal `EKi`.
 * Subscribe to the pending-worktree external store snapshot.
 */
export function usePendingWorktreeStore(): unknown {
  if (peers == null) {
    throw new Error("UsePendingWorktreeStore peers are not configured");
  }
  return peers.useSyncExternalStore(peers.subscribe, peers.getSnapshot);
}
