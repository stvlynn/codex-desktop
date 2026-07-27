// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yQa`) / export `zj`.

export type BindExpandedTopTrayPeers = {
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  _Qa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pQa: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vQa: (...args: unknown[]) => unknown;
};

let peers: BindExpandedTopTrayPeers | null = null;

/** Wire bindExpandedTopTray peers once companions land. */
export function setBindExpandedTopTrayPeers(next: BindExpandedTopTrayPeers): void {
  peers = next;
}

/**
 * Bundle export `zj` / internal `yQa`.
 */
export function bindExpandedTopTray() {
  if (peers == null) {
    throw new Error("bindExpandedTopTray peers are not configured");
  }

  return peers.e(() => {
    _Qa = peers.c(), peers.Ho(), vQa = peers.r(peers.o(), 1), peers.pQa(), peers.KM();
  });
}
