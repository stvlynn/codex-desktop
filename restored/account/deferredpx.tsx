// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PZ`) / export `px`.

export type DeferredpxPeers = {
  NZ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
};

let peers: DeferredpxPeers | null = null;

/** Wire Deferredpx peers once companions land. */
export function setDeferredpxPeers(next: DeferredpxPeers): void {
  peers = next;
}

/**
 * Bundle export `px` / internal `PZ`.
 */
export function Deferredpx() {
  if (peers == null) {
    throw new Error("Deferredpx peers are not configured");
  }
  return peers.e(() => {
    peers.NZ(), peers.qx();
  });
}
