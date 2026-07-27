// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xg`) / export `Mst`.

export type LocalImagePeers = {
  Jg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ivt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: LocalImagePeers | null = null;

/** Wire localImage peers once companions land. */
export function setLocalImagePeers(next: LocalImagePeers): void {
  peers = next;
}

/**
 * Bundle export `Mst` / internal `Xg`.
 */
export function localImage() {
  if (peers == null) {
    throw new Error("localImage peers are not configured");
  }

  return peers.e(() => {
    ivt = peers.r(peers.Jg(), 1);
  });
}
