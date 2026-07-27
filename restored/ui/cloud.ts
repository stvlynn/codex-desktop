// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xjs`) / export `gv`.

export type CloudPeers = {
  bjs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  yjs: (...args: unknown[]) => unknown;
};

let peers: CloudPeers | null = null;

/** Wire cloud peers once companions land. */
export function setCloudPeers(next: CloudPeers): void {
  peers = next;
}

/**
 * Bundle export `gv` / internal `xjs`.
 */
export function cloud() {
  if (peers == null) {
    throw new Error("cloud peers are not configured");
  }

  return peers.e(() => {
    yjs = peers.r(peers.o(), 1), bjs = (0, peers.yjs.createContext)(null);
  });
}
