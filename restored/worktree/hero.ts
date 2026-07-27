// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R6s`) / export `Km`.

export type BindHeroPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  BXi: (...args: unknown[]) => unknown;
  C6s: (...args: unknown[]) => unknown;
  CA: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Kj: (...args: unknown[]) => unknown;
  L6s: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  P6s: (...args: unknown[]) => unknown;
  TA: (...args: unknown[]) => unknown;
  UX: (...args: unknown[]) => unknown;
  Vos: (...args: unknown[]) => unknown;
  Vus: (...args: unknown[]) => unknown;
  Xus: (...args: unknown[]) => unknown;
  _6o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fZ: (...args: unknown[]) => unknown;
  hA: (...args: unknown[]) => unknown;
  i1: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  lj: (...args: unknown[]) => unknown;
  mGr: (...args: unknown[]) => unknown;
  mb: (...args: unknown[]) => unknown;
  mh: (...args: unknown[]) => unknown;
  n1: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rz: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  tY: (...args: unknown[]) => unknown;
  zZ: (...args: unknown[]) => unknown;
};

let peers: BindHeroPeers | null = null;

/** Wire bindHero peers once companions land. */
export function setBindHeroPeers(next: BindHeroPeers): void {
  peers = next;
}

/**
 * Bundle export `Km` / internal `R6s`.
 */
export function bindHero() {
  if (peers == null) {
    throw new Error("bindHero peers are not configured");
  }

  return peers.e(() => {
    peers.Hb(), peers.sd(), peers.Ho(), L6s = peers.r(peers.o(), 1), peers.$u(), peers.BXi(), peers.tY(), peers.qR(), peers.$m(), peers.C6s(), peers.Kj(), peers.zZ(), peers.ld(), peers.n1(), peers.mb(), peers.mh(), peers.hA(), peers.Kb(), peers.fZ(), peers.UX(), peers.TA(), peers.lj(), peers.mGr(), peers.CA(), peers.ed(), peers.OE(), peers.P6s(), peers.rz(), peers._6o(), peers.Fh(), peers.Vus(), peers.Vos(), peers.Xus(), i1 = peers.J();
  });
}
