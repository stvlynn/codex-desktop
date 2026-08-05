// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A9l`) / export `vr`.

export type UseExternalStoreSnapshotPeers = {
  P9l: (...args: unknown[]) => unknown;
  j9l: (...args: unknown[]) => unknown;
  z9l: (...args: unknown[]) => unknown;
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
 */
export function useExternalStoreSnapshot() {
  if (peers == null) {
    throw new Error("useExternalStoreSnapshot peers are not configured");
  }

  return (0, peers.z9l.useSyncExternalStore)(peers.P9l, peers.j9l);
}
