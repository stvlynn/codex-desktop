// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `M$l`) / export `zi`.

export type BindOpenInBrowser2Peers = {
  $u: (...args: unknown[]) => unknown;
  A$l: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  E3: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IZ: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  MJo: (...args: unknown[]) => unknown;
  NZ: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  PA: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  YB: (...args: unknown[]) => unknown;
  _$l: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hE: (...args: unknown[]) => unknown;
  j$l: (...args: unknown[]) => unknown;
  k$l: (...args: unknown[]) => unknown;
  kB: (...args: unknown[]) => unknown;
  l7: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  u7: (...args: unknown[]) => unknown;
};

let peers: BindOpenInBrowser2Peers | null = null;

/** Wire bindOpenInBrowser2 peers once companions land. */
export function setBindOpenInBrowser2Peers(next: BindOpenInBrowser2Peers): void {
  peers = next;
}

/**
 * Bundle export `zi` / internal `M$l`.
 */
export function bindOpenInBrowser2() {
  if (peers == null) {
    throw new Error("bindOpenInBrowser2 peers are not configured");
  }

  return peers.e(() => {
    l7 = peers.c(), peers.sd(), peers.af(), peers.Ho(), k$l = peers.r(peers.o(), 1), peers.$u(), peers.Nw(), peers.DD(), peers.aN(), peers.Pp(), peers.qR(), peers.YB(), peers.E3(), peers.hE(), peers.IZ(), peers.NZ(), peers.PA(), peers.Fh(), peers.MJo(), peers.kB(), peers._$l(), u7 = peers.J(), A$l = [0.22, 1, 0.36, 1], j$l = 3;
  });
}
