// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CDs`) / export `zv`.

export type SvgCurrentColorFillPeers = {
  SDs: (...args: unknown[]) => unknown;
  _Ds: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  bDs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cDs: (...args: unknown[]) => unknown;
  dDs: (...args: unknown[]) => unknown;
  dQ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fDs: (...args: unknown[]) => unknown;
  gDs: (...args: unknown[]) => unknown;
  hDs: (...args: unknown[]) => unknown;
  iIe: (...args: unknown[]) => unknown;
  lDs: (...args: unknown[]) => unknown;
  mDs: (...args: unknown[]) => unknown;
  oDs: (...args: unknown[]) => unknown;
  pDs: (...args: unknown[]) => unknown;
  sDs: (...args: unknown[]) => unknown;
  uDs: (...args: unknown[]) => unknown;
  vDs: (...args: unknown[]) => unknown;
  vd: (...args: unknown[]) => unknown;
  xDs: (...args: unknown[]) => unknown;
  yDs: (...args: unknown[]) => unknown;
};

let peers: SvgCurrentColorFillPeers | null = null;

/** Wire svgCurrentColorFill peers once companions land. */
export function setSvgCurrentColorFillPeers(next: SvgCurrentColorFillPeers): void {
  peers = next;
}

/**
 * Bundle export `zv` / internal `CDs`.
 */
export function svgCurrentColorFill() {
  if (peers == null) {
    throw new Error("svgCurrentColorFill peers are not configured");
  }

  return peers.e(() => {
    oDs = peers.c(), peers.af(), sDs = 80, cDs = 1220, lDs = 160, uDs = 360, dDs = 40, fDs = 520, pDs = 0.68, mDs = 580, hDs = 0.58, gDs = `currentColor`, _Ds = `#5865F2`, vDs = 1300, yDs = 1961, bDs = peers.vd(0.25, 0.1, 0.25, 1), dQ = peers.vd(0.4, 0, 0.2, 1), xDs = peers.iIe([0, 0.16, 0.42, 0.7, 1], [0, 0.14, peers.hDs, 0.3, 0], {
      ease: peers.dQ
    }), SDs = peers.iIe([0, 0.42, 0.7, 1], [0.93, 0.985, 1, 1], {
      ease: peers.dQ
    });
  });
}
