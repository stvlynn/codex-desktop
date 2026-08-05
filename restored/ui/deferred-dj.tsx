// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Epo`) / export `Dj`.

export type BindDeferredDjPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BG: (...args: unknown[]) => unknown;
  Cpo: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Gm: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Lqr: (...args: unknown[]) => unknown;
  M1a: (...args: unknown[]) => unknown;
  Spo: (...args: unknown[]) => unknown;
  Tpo: (...args: unknown[]) => unknown;
  VG: (...args: unknown[]) => unknown;
  bpo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c0a: (...args: unknown[]) => unknown;
  cpo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f0a: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  ipo: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  opo: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vWi: (...args: unknown[]) => unknown;
  wpo: (...args: unknown[]) => unknown;
  xpo: (...args: unknown[]) => unknown;
  yKa: (...args: unknown[]) => unknown;
  ypo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredDjPeers | null = null;

/** Wire bindDeferredDj peers once companions land. */
export function setBindDeferredDjPeers(next: BindDeferredDjPeers): void {
  peers = next;
}

/**
 * Bundle export `Dj` / internal `Epo`.
 */
export function bindDeferredDj() {
  if (peers == null) {
    throw new Error("bindDeferredDj peers are not configured");
  }

  return peers.e(() => {
    ((ypo = peers.c()),
      peers.Ho(),
      peers.Au(),
      (BG = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.c0a(),
      peers.M1a(),
      peers.ipo(),
      peers.f0a(),
      peers.opo(),
      peers.cpo(),
      peers.vWi(),
      peers.Lqr(),
      peers.yKa(),
      peers.gT(),
      peers.jf(),
      peers.Gm(),
      (VG = peers.J()),
      (bpo = `/`),
      (xpo = []),
      (Spo = 100),
      (Cpo = {
        expandedPaths: peers.xpo,
        scrollTop: 0,
        searchQuery: ``,
        selectedPath: null,
      }),
      (wpo = peers.Da(peers.hT, (e) => peers.Cpo)),
      (Tpo = peers.Da(peers.hT, (e) => null)));
  });
}
