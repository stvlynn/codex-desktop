// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `l3s`) / export `uh`.

export type DeferredUhPeers = {
  $u: (...args: unknown[]) => unknown;
  ARr: (...args: unknown[]) => unknown;
  CT: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  G$: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JHr: (...args: unknown[]) => unknown;
  K$: (...args: unknown[]) => unknown;
  Kj: (...args: unknown[]) => unknown;
  Op: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  Z4s: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c3s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  ju: (...args: unknown[]) => unknown;
  kFo: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  n3s: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  nbs: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  s3s: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  uR: (...args: unknown[]) => unknown;
  zm: (...args: unknown[]) => unknown;
};

let peers: DeferredUhPeers | null = null;

/** Wire deferredUh peers once companions land. */
export function setDeferredUhPeers(next: DeferredUhPeers): void {
  peers = next;
}

/**
 * Bundle export `uh` / internal `l3s`.
 */
export function deferredUh() {
  if (peers == null) {
    throw new Error("deferredUh peers are not configured");
  }

  return peers.e(() => {
    s3s = peers.c(), peers.sd(), peers.af(), peers.Ho(), G$ = peers.r(peers.o(), 1), c3s = peers.r(peers.ju(), 1), peers.$u(), peers.zm(), peers.kFo(), peers.ARr(), peers.JHr(), peers.UD(), peers.nO(), peers.Kj(), peers.Op(), peers.ld(), peers.Z4s(), peers.gT(), peers.Fh(), peers.nbs(), peers.uR(), peers.CT(), peers.n3s(), K$ = peers.J();
  });
}
