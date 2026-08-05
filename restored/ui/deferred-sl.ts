// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Snl`) / export `sl`.

export type DeferredSlPeers = {
  Dh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Qtl: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  YGi: (...args: unknown[]) => unknown;
  _nl: (...args: unknown[]) => unknown;
  bnl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  m7c: (...args: unknown[]) => unknown;
  nL: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  xnl: (...args: unknown[]) => unknown;
};

let peers: DeferredSlPeers | null = null;

/** Wire deferredSl peers once companions land. */
export function setDeferredSlPeers(next: DeferredSlPeers): void {
  peers = next;
}

/**
 * Bundle export `sl` / internal `Snl`.
 */
export function deferredSl() {
  if (peers == null) {
    throw new Error("deferredSl peers are not configured");
  }

  return peers.e(() => {
    ((bnl = peers.c()),
      peers.Ho(),
      (xnl = peers.r(peers.o(), 1)),
      peers.UD(),
      peers.nO(),
      peers.m7c(),
      peers._nl(),
      peers.Qtl(),
      peers.gT(),
      peers.Dh(),
      peers.nL(),
      peers.YGi());
  });
}
