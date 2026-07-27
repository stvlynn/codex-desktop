// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hi`) / export `svt`.

export type UseExternalStoreSlicePeers = {
  Ci: (...args: unknown[]) => unknown;
  gi: (...args: unknown[]) => unknown;
  queueMicrotask: (...args: unknown[]) => unknown;
  xi: (...args: unknown[]) => unknown;
  yi: (...args: unknown[]) => unknown;
};

let peers: UseExternalStoreSlicePeers | null = null;

/** Wire useExternalStoreSlice peers once companions land. */
export function setUseExternalStoreSlicePeers(next: UseExternalStoreSlicePeers): void {
  peers = next;
}

/**
 * Bundle export `svt` / internal `hi`.
 */
export function useExternalStoreSlice(e: unknown) {
  if (peers == null) {
    throw new Error("useExternalStoreSlice peers are not configured");
  }

  let t = peers.yi(e),
    n = peers.xi(e, t);
  return (
    (0, peers.Ci.useSyncExternalStore)(
      (e) => (
        t.listeners.add(e),
        () => {
          (t.listeners.delete(e),
            t.listeners.size === 0 &&
              peers.queueMicrotask(() => {
                t.listeners.size === 0 && (t.entries = null);
              }));
        }
      ),
      () => t.version,
      () => t.version,
    ),
    [...n].sort(peers.gi)
  );
}
