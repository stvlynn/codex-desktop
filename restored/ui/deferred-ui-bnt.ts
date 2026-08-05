// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uy`) / export `bnt`.

export type BindDeferredUiBntPeers = {
  a: (...args: unknown[]) => unknown;
  capPixels: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  limitCanvas: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  pixelRatio: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  scaled: (...args: unknown[]) => unknown;
  symmetric: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiBntPeers | null = null;

/** Wire bindDeferredUiBnt peers once companions land. */
export function setBindDeferredUiBntPeers(next: BindDeferredUiBntPeers): void {
  peers = next;
}

/**
 * Bundle export `bnt` / internal `Uy`.
 */
export function bindDeferredUiBnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiBnt peers are not configured");
  }

  return class e {
    constructor() {
      let { pixelRatio: t } = peers.e;
      ((this.sx = t), (this.sy = t));
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t, n, r, i, a = -1) {
      let o = 1 / 0,
        s = 1 / 0,
        c = 1 / 0;
      ((r = peers.e.capPixels(peers.r, peers.a)),
        peers.r > 0 && (o = Math.sqrt(peers.r / (t * peers.n))),
        peers.i !== -1 && ((s = peers.i / t), (c = peers.i / peers.n)));
      let l = Math.min(o, s, c);
      return this.sx > l || this.sy > l
        ? ((this.sx = l), (this.sy = l), !0)
        : !1;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(e, t) {
      if (t >= 0) {
        let n = Math.ceil(
          window.screen.availWidth *
            window.screen.availHeight *
            this.pixelRatio ** 2 *
            (1 + t / 100),
        );
        return peers.e > 0 ? Math.min(peers.e, peers.n) : peers.n;
      }
      return peers.e;
    }
  };
}
