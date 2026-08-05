// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gAt`) / export `eot`.

export type BindDeferredUtilseotPeers = {
  dAt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fAt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUtilseotPeers | null = null;

/** Wire bindDeferredUtilseot peers once companions land. */
export function setBindDeferredUtilseotPeers(
  next: BindDeferredUtilseotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eot` / internal `gAt`.
 */
export function bindDeferredUtilseot() {
  if (peers == null) {
    throw new Error("bindDeferredUtilseot peers are not configured");
  }

  return peers.e(() => {
    (peers.dAt(),
      peers.fAt({
        thousands: `,`,
        grouping: [3],
        currency: [`$`, ``],
      }));
  });
}
