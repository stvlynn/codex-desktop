// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hM`) / export `iZ`.

export type FeaturesRemoteConnections2Peers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  mM: (...args: unknown[]) => unknown;
  oGr: (...args: unknown[]) => unknown;
};

let peers: FeaturesRemoteConnections2Peers | null = null;

/** Wire featuresRemoteConnections2 peers once companions land. */
export function setFeaturesRemoteConnections2Peers(next: FeaturesRemoteConnections2Peers): void {
  peers = next;
}

/**
 * Bundle export `iZ` / internal `hM`.
 */
export function featuresRemoteConnections2() {
  if (peers == null) {
    throw new Error("featuresRemoteConnections2 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), mM = peers.Ta(peers.Q, peers.oGr());
  });
}
