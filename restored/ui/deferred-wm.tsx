// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `K6s`) / export `Wm`.

export type BindDeferredWmPeers = {
  $D: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  G6s: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KI: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  W6s: (...args: unknown[]) => unknown;
  WI: (...args: unknown[]) => unknown;
  YI: (...args: unknown[]) => unknown;
  _E: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  o1: (...args: unknown[]) => unknown;
  p6n: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWmPeers | null = null;

/** Wire bindDeferredWm peers once companions land. */
export function setBindDeferredWmPeers(next: BindDeferredWmPeers): void {
  peers = next;
}

/**
 * Bundle export `Wm` / internal `K6s`.
 */
export function bindDeferredWm() {
  if (peers == null) {
    throw new Error("bindDeferredWm peers are not configured");
  }

  return peers.e(() => {
    W6s = peers.c(), peers.Ho(), peers.Au(), o1 = peers.r(peers.o(), 1), peers.DD(), peers.Vf(), peers.$D(), peers.p6n(), peers.gT(), peers.jI(), peers._E(), peers.KI(), peers.YI(), peers.WI(), G6s = peers.Ta(peers.hT, !1);
  });
}
