// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `hQa`) / export `Bj`.

export type MemoizedValueBridgePeers = {
  subscribe: (value: unknown, onStoreChange: () => void) => () => void;
  getSnapshot: (value: unknown) => unknown;
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
  ) => unknown;
};

let peers: MemoizedValueBridgePeers | null = null;

/** Wire memoized value-bridge peers once companions land. */
export function setMemoizedValueBridgePeers(
  next: MemoizedValueBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Bj` / internal `hQa`.
 * Subscribe to an external memoized value via useSyncExternalStore.
 */
export function MemoizedValueBridge(value: unknown): unknown {
  if (peers == null) {
    throw new Error("MemoizedValueBridge peers are not configured");
  }
  const subscribe = (onStoreChange: () => void) =>
    peers!.subscribe(value, onStoreChange);
  const getSnapshot = () => peers!.getSnapshot(value);
  return peers.useSyncExternalStore(subscribe, getSnapshot);
}
