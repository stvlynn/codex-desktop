// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SBt`) / export `Frt`.

export type BindPopoverPrimitivesPeers = {
  rBt: (...args: unknown[]) => unknown;
};

let peers: BindPopoverPrimitivesPeers | null = null;

/** Wire bindPopoverPrimitives peers once companions land. */
export function setBindPopoverPrimitivesPeers(next: BindPopoverPrimitivesPeers): void {
  peers = next;
}

/**
 * Bundle export `Frt` / internal `SBt`.
 */
export function bindPopoverPrimitives() {
  if (peers == null) {
    throw new Error("bindPopoverPrimitives peers are not configured");
  }

  return peers.rBt;
}
