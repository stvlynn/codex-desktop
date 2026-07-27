// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EKi`) / export `DV`.

export type UsePendingWorktreeStorePeers = {
  AKi: (...args: unknown[]) => unknown;
  MKi: (...args: unknown[]) => unknown;
  kKi: (...args: unknown[]) => unknown;
};

let peers: UsePendingWorktreeStorePeers | null = null;

/** Wire usePendingWorktreeStore peers once companions land. */
export function setUsePendingWorktreeStorePeers(next: UsePendingWorktreeStorePeers): void {
  peers = next;
}

/**
 * Bundle export `DV` / internal `EKi`.
 */
export function usePendingWorktreeStore() {
  if (peers == null) {
    throw new Error("usePendingWorktreeStore peers are not configured");
  }

  return (0, peers.MKi.useSyncExternalStore)(peers.kKi, peers.AKi);
}
