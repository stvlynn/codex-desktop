// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y2i`) / export `Yz`.

export type BindPresentationPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  J2i: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  bz: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  q2i: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  t$e: (...args: unknown[]) => unknown;
};

let peers: BindPresentationPeers | null = null;

/** Wire bindPresentation peers once companions land. */
export function setBindPresentationPeers(next: BindPresentationPeers): void {
  peers = next;
}

/**
 * Bundle export `Yz` / internal `Y2i`.
 */
export function bindPresentation() {
  if (peers == null) {
    throw new Error("bindPresentation peers are not configured");
  }

  return peers.e(() => {
    ((q2i = peers.c()),
      peers.sd(),
      (J2i = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.qR(),
      peers.ld(),
      peers.Pp(),
      peers.t$e(),
      peers.$m(),
      (bz = peers.J()));
  });
}
