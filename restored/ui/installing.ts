// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vxr`) / export `e0`.

export type InstallingPeers = {
  $7t: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Bxr: (...args: unknown[]) => unknown;
  Pxr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zxr: (...args: unknown[]) => unknown;
};

let peers: InstallingPeers | null = null;

/** Wire installing peers once companions land. */
export function setInstallingPeers(next: InstallingPeers): void {
  peers = next;
}

/**
 * Bundle export `e0` / internal `Vxr`.
 */
export function installing() {
  if (peers == null) {
    throw new Error("installing peers are not configured");
  }

  return peers.e(() => {
    peers.Pxr(), peers.Au(), peers.$7t(), zxr = !1, Bxr = `prod`;
  });
}
