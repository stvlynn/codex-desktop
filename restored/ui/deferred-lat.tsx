// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xMt`) / export `Lat`.

export type BindDeferredLatPeers = {
  $jt: (...args: unknown[]) => unknown;
  Bjt: (...args: unknown[]) => unknown;
  Djt: (...args: unknown[]) => unknown;
  Ejt: (...args: unknown[]) => unknown;
  Fjt: (...args: unknown[]) => unknown;
  Gjt: (...args: unknown[]) => unknown;
  Hjt: (...args: unknown[]) => unknown;
  Ljt: (...args: unknown[]) => unknown;
  Tjt: (...args: unknown[]) => unknown;
  Wjt: (...args: unknown[]) => unknown;
  bMt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hMt: (...args: unknown[]) => unknown;
  qjt: (...args: unknown[]) => unknown;
  rMt: (...args: unknown[]) => unknown;
  tMt: (...args: unknown[]) => unknown;
  vMt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredLatPeers | null = null;

/** Wire bindDeferredLat peers once companions land. */
export function setBindDeferredLatPeers(next: BindDeferredLatPeers): void {
  peers = next;
}

/**
 * Bundle export `Lat` / internal `xMt`.
 */
export function bindDeferredLat() {
  if (peers == null) {
    throw new Error("bindDeferredLat peers are not configured");
  }

  return peers.e(() => {
    peers.tMt(), peers.Hjt(), peers.Ejt(), peers.Djt(), peers.Wjt(), peers.Fjt(), peers.Gjt(), peers.Bjt(), peers.qjt(), peers.rMt(), peers.$jt(), peers.hMt(), peers.Ljt(), peers.Tjt(), peers.vMt(), peers.bMt();
  });
}
