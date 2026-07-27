// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cGr`) / export `nZ`.

export type FeaturesRemoteConnectionsPeers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  sGr: (...args: unknown[]) => unknown;
};

let peers: FeaturesRemoteConnectionsPeers | null = null;

/** Wire featuresRemoteConnections peers once companions land. */
export function setFeaturesRemoteConnectionsPeers(next: FeaturesRemoteConnectionsPeers): void {
  peers = next;
}

/**
 * Bundle export `nZ` / internal `cGr`.
 */
export function featuresRemoteConnections() {
  if (peers == null) {
    throw new Error("featuresRemoteConnections peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), sGr = peers.Ta(peers.Q, !1);
  });
}
