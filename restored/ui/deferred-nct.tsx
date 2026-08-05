// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kit`) / export `Nct`.

export type BindDeferredNctPeers = {
  Bet: (...args: unknown[]) => unknown;
  Cit: (...args: unknown[]) => unknown;
  Dit: (...args: unknown[]) => unknown;
  Eit: (...args: unknown[]) => unknown;
  Gh: (...args: unknown[]) => unknown;
  Oit: (...args: unknown[]) => unknown;
  Sit: (...args: unknown[]) => unknown;
  Tit: (...args: unknown[]) => unknown;
  _it: (...args: unknown[]) => unknown;
  bit: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cit: (...args: unknown[]) => unknown;
  dit: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fit: (...args: unknown[]) => unknown;
  git: (...args: unknown[]) => unknown;
  hit: (...args: unknown[]) => unknown;
  lit: (...args: unknown[]) => unknown;
  mit: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pit: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sit: (...args: unknown[]) => unknown;
  uit: (...args: unknown[]) => unknown;
  vit: (...args: unknown[]) => unknown;
  wit: (...args: unknown[]) => unknown;
  xit: (...args: unknown[]) => unknown;
  yit: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNctPeers | null = null;

/** Wire bindDeferredNct peers once companions land. */
export function setBindDeferredNctPeers(next: BindDeferredNctPeers): void {
  peers = next;
}

/**
 * Bundle export `Nct` / internal `kit`.
 */
export function bindDeferredNct() {
  if (peers == null) {
    throw new Error("bindDeferredNct peers are not configured");
  }

  return peers.e(() => {
    ((sit = peers.c()),
      (Gh = peers.r(peers.o(), 1)),
      peers.Bet(),
      (cit = 0.8),
      (lit = 0.16),
      (uit = 0.1),
      (dit = 0.006),
      (fit = 0.32),
      (pit = 32),
      (mit = 0.36),
      (hit = 4),
      (git = 0.5),
      (_it = 0.48),
      (vit = 0.28),
      (yit = 0.085),
      (bit = 0.05),
      (xit = 0.1),
      (Sit = 0.6),
      (Cit = 3),
      (wit = 2),
      (Tit = 0.25),
      (Eit = 0.95),
      (Dit = 0.08),
      (Oit = 200));
  });
}
