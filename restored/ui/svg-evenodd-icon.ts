// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `L3s`) / export `ih`.

export type SvgEvenoddIconPeers = {
  Au: (...args: unknown[]) => unknown;
  D3s: (...args: unknown[]) => unknown;
  F3s: (...args: unknown[]) => unknown;
  Gm: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I3s: (...args: unknown[]) => unknown;
  II: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  N3s: (...args: unknown[]) => unknown;
  PFi: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hZ: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  kM: (...args: unknown[]) => unknown;
  pj: (...args: unknown[]) => unknown;
};

let peers: SvgEvenoddIconPeers | null = null;

/** Wire svgEvenoddIcon peers once companions land. */
export function setSvgEvenoddIconPeers(next: SvgEvenoddIconPeers): void {
  peers = next;
}

/**
 * Bundle export `ih` / internal `L3s`.
 */
export function svgEvenoddIcon() {
  if (peers == null) {
    throw new Error("svgEvenoddIcon peers are not configured");
  }

  return peers.e(() => {
    F3s = peers.c(), peers.Ho(), peers.Au(), peers.hZ(), peers.D3s(), peers.pj(), peers.PFi(), peers.kM(), peers.Yf(), peers.II(), peers.gT(), peers.jI(), peers.Gm(), peers.N3s(), I3s = peers.J();
  });
}
