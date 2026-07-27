// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eho`) / export `tj`.

export type BindDeferredtjPeers = {
  C2i: (...args: unknown[]) => unknown;
  Cho: (...args: unknown[]) => unknown;
  Tho: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  ZL: (...args: unknown[]) => unknown;
  bho: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  nL: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vho: (...args: unknown[]) => unknown;
};

let peers: BindDeferredtjPeers | null = null;

/** Wire bindDeferredtj peers once companions land. */
export function setBindDeferredtjPeers(next: BindDeferredtjPeers): void {
  peers = next;
}

/**
 * Bundle export `tj` / internal `Eho`.
 */
export function bindDeferredtj() {
  if (peers == null) {
    throw new Error("bindDeferredtj peers are not configured");
  }

  return peers.e(() => {
    Tho = peers.r(peers.o(), 1), peers.UD(), peers.ZL(), peers.C2i(), peers.vho(), peers.Cho(), peers.nL(), peers.bho(), peers.jf();
  });
}
