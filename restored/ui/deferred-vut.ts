// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T2e`) / export `vut`.

export type DeferredVutPeers = {
  C2e: (...args: unknown[]) => unknown;
  H0e: (...args: unknown[]) => unknown;
  J0e: (...args: unknown[]) => unknown;
  S2e: (...args: unknown[]) => unknown;
  Y0e: (...args: unknown[]) => unknown;
  _2e: (...args: unknown[]) => unknown;
  b2e: (...args: unknown[]) => unknown;
  c0e: (...args: unknown[]) => unknown;
  c2e: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f0e: (...args: unknown[]) => unknown;
  f2e: (...args: unknown[]) => unknown;
  g0e: (...args: unknown[]) => unknown;
  g2e: (...args: unknown[]) => unknown;
  h0e: (...args: unknown[]) => unknown;
  h2e: (...args: unknown[]) => unknown;
  i2e: (...args: unknown[]) => unknown;
  im: (...args: unknown[]) => unknown;
  l0e: (...args: unknown[]) => unknown;
  m0e: (...args: unknown[]) => unknown;
  m2e: (...args: unknown[]) => unknown;
  n2e: (...args: unknown[]) => unknown;
  om: (...args: unknown[]) => unknown;
  p0e: (...args: unknown[]) => unknown;
  p2e: (...args: unknown[]) => unknown;
  r2e: (...args: unknown[]) => unknown;
  s0e: (...args: unknown[]) => unknown;
  s2e: (...args: unknown[]) => unknown;
  sm: (...args: unknown[]) => unknown;
  t0e: (...args: unknown[]) => unknown;
  u0e: (...args: unknown[]) => unknown;
  v2e: (...args: unknown[]) => unknown;
  w2e: (...args: unknown[]) => unknown;
  x2e: (...args: unknown[]) => unknown;
  y2e: (...args: unknown[]) => unknown;
  z0e: (...args: unknown[]) => unknown;
};

let peers: DeferredVutPeers | null = null;

/** Wire deferredVut peers once companions land. */
export function setDeferredVutPeers(next: DeferredVutPeers): void {
  peers = next;
}

/**
 * Bundle export `vut` / internal `T2e`.
 */
export function deferredVut() {
  if (peers == null) {
    throw new Error("deferredVut peers are not configured");
  }

  return peers.e(() => {
    (peers.g0e(),
      peers.t0e(),
      peers.z0e(),
      (f2e = peers.im(0)),
      (p2e = 25),
      (m2e = new Set([`absolute`, `fixed`])),
      (h2e = async function (e) {
        let t = this.getOffsetParent || peers.s2e,
          n = this.getDimensions,
          r = await n(peers.e.floating);
        return {
          reference: peers.i2e(
            peers.e.reference,
            await t(peers.e.floating),
            peers.e.strategy,
          ),
          floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height,
          },
        };
      }),
      (g2e = {
        convertOffsetParentRelativeRectToViewportRelativeRect: peers.J0e,
        getDocumentElement: peers.om,
        getClippingRect: peers.n2e,
        getOffsetParent: peers.s2e,
        getElementRects: peers.h2e,
        getClientRects: peers.Y0e,
        getDimensions: peers.r2e,
        getScale: peers.H0e,
        isElement: peers.sm,
        isRTL: peers.c2e,
      }),
      (_2e = peers.f0e),
      (v2e = peers.p0e),
      (y2e = peers.l0e),
      (b2e = peers.h0e),
      (x2e = peers.u0e),
      (S2e = peers.c0e),
      (C2e = peers.m0e),
      (w2e = (e, t, n) => {
        let r = new Map(),
          i = {
            platform: peers.g2e,
            ...n,
          },
          a = {
            ...i.platform,
            _c: r,
          };
        return peers.s0e(peers.e, t, {
          ...i,
          platform: a,
        });
      }));
  });
}
