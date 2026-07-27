// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u7i`) / export `wR`.

export type BindBindDeferredUiWRPeers = {
  J: (...args: unknown[]) => unknown;
  Jz: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c7i: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gP: (...args: unknown[]) => unknown;
  l7i: (...args: unknown[]) => unknown;
  m5i: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  s7i: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiWRPeers | null = null;

/** Wire bindBindDeferredUiWR peers once companions land. */
export function setBindBindDeferredUiWRPeers(next: BindBindDeferredUiWRPeers): void {
  peers = next;
}

/**
 * Bundle export `wR` / internal `u7i`.
 */
export function bindBindDeferredUiWR() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiWR peers are not configured");
  }

  return peers.e(() => {
    s7i = peers.c(), peers.sd(), c7i = peers.r(peers.o(), 1), peers.gP(), peers.m5i(), peers.Jz(), l7i = peers.J();
  });
}
