// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `A9l`) / export `vr`.

export type UseExternalStoreSnapshotPeers = {
  useSyncExternalStore: (
    subscribe: () => () => void,
    getSnapshot: () => unknown,
  ) => unknown;
  subscribe: () => () => void;
  getSnapshot: () => unknown;
};

let peers: UseExternalStoreSnapshotPeers | null = null;

/** Wire useExternalStoreSnapshot peers once companions land. */
export function setUseExternalStoreSnapshotPeers(
  next: UseExternalStoreSnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vr` / internal `A9l`.
 * Subscribe to an external store snapshot via useSyncExternalStore.
 */
export function useExternalStoreSnapshot(): unknown {
  if (peers == null) {
    throw new Error("UseExternalStoreSnapshot peers are not configured");
  }
  return peers.useSyncExternalStore(peers.subscribe, peers.getSnapshot);
}
