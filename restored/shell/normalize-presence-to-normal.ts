// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pj`) / export `YZ`.

export type BindNormalizePresenceToNormalPeers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  dFr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fFr: (...args: unknown[]) => unknown;
  fj: (...args: unknown[]) => unknown;
  mFr: (...args: unknown[]) => unknown;
  pFr: (...args: unknown[]) => unknown;
};

let peers: BindNormalizePresenceToNormalPeers | null = null;

/** Wire bindNormalizePresenceToNormal peers once companions land. */
export function setBindNormalizePresenceToNormalPeers(next: BindNormalizePresenceToNormalPeers): void {
  peers = next;
}

/**
 * Bundle export `YZ` / internal `pj`.
 */
export function bindNormalizePresenceToNormal() {
  if (peers == null) {
    throw new Error("bindNormalizePresenceToNormal peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), dFr = [], fFr = {}, fj = peers.Ta(peers.Q, !1), pFr = peers.Ta(peers.Q, peers.dFr), mFr = peers.Ta(peers.Q, peers.fFr);
  });
}
