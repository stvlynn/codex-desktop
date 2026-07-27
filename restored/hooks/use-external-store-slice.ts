// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `hi`) / export `svt`.

export type UseExternalStoreSlicePeers = {
  getStoreBucket: (source: unknown) => {
    listeners: Set<() => void>;
    entries: unknown;
    version: unknown;
  };
  collectEntries: (source: unknown, bucket: unknown) => Iterable<unknown>;
  compareEntries: (a: unknown, b: unknown) => number;
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
    getServerSnapshot: () => unknown,
  ) => unknown;
};

let peers: UseExternalStoreSlicePeers | null = null;

/** Wire external-store slice peers once companions land. */
export function setUseExternalStoreSlicePeers(
  next: UseExternalStoreSlicePeers,
): void {
  peers = next;
}

/**
 * Bundle export `svt` / internal `hi`.
 * Subscribe to an external store bucket and return sorted entries.
 */
export function useExternalStoreSlice(source: unknown): unknown[] {
  if (peers == null) {
    throw new Error("UseExternalStoreSlice peers are not configured");
  }
  const bucket = peers.getStoreBucket(source);
  const entries = peers.collectEntries(source, bucket);
  peers.useSyncExternalStore(
    (onStoreChange) => {
      bucket.listeners.add(onStoreChange);
      return () => {
        bucket.listeners.delete(onStoreChange);
        if (bucket.listeners.size === 0) {
          queueMicrotask(() => {
            if (bucket.listeners.size === 0) bucket.entries = null;
          });
        }
      };
    },
    () => bucket.version,
    () => bucket.version,
  );
  return [...entries].sort(peers.compareEntries);
}
