// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sqt`) / export `Mnt`.

export type BindDeferredUiMnt2Peers = {
  AbortController: (...args: unknown[]) => unknown;
  MIN_TOUCH_DISTANCE_TO_PINCH: (...args: unknown[]) => unknown;
  Uy: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  abort: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  d: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  l: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  p: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  u: (...args: unknown[]) => unknown;
  yy: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiMnt2Peers | null = null;

/** Wire bindDeferredUiMnt2 peers once companions land. */
export function setBindDeferredUiMnt2Peers(next: BindDeferredUiMnt2Peers): void {
  peers = next;
}

/**
 * Bundle export `Mnt` / internal `Sqt`.
 */
export function bindDeferredUiMnt2() {
  if (peers == null) {
    throw new Error("bindDeferredUiMnt2 peers are not configured");
  }

  return class e {
    #e;
    #t = !1;
    #n = null;
    #r;
    #i;
    #a;
    #o;
    #s = null;
    #c;
    #l = null;
    #u;
    #d = null;
    constructor({
      container: e,
      isPinchingDisabled: t = null,
      isPinchingStopped: n = null,
      onPinchStart: r = null,
      onPinching: i = null,
      onPinchEnd: a = null,
      signal: o,
    }) {
      ((this.#e = peers.e),
        (this.#n = peers.n),
        (this.#r = peers.t),
        (this.#i = peers.r),
        (this.#a = peers.i),
        (this.#o = peers.a),
        (this.#u = new peers.AbortController()),
        (this.#c = AbortSignal.any([peers.o, this.#u.signal])),
        peers.e.addEventListener(`touchstart`, this.#f.bind(this), {
          passive: !1,
          signal: this.#c,
        }));
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / peers.Uy.pixelRatio;
    }
    #f(e) {
      if (this.#r?.()) return;
      if (peers.e.touches.length === 1) {
        if (this.#s) return;
        let e = (this.#s = new peers.AbortController()),
          t = AbortSignal.any([this.#c, peers.e.signal]),
          n = this.#e,
          r = {
            capture: !0,
            signal: peers.t,
            passive: !1,
          },
          i = (e) => {
            peers.e.pointerType === `touch` &&
              (this.#s?.abort(), (this.#s = null));
          };
        (peers.n.addEventListener(
          `pointerdown`,
          (e) => {
            peers.e.pointerType === `touch` &&
              (peers.yy(peers.e), peers.i(peers.e));
          },
          peers.r,
        ),
          peers.n.addEventListener(`pointerup`, peers.i, peers.r),
          peers.n.addEventListener(`pointercancel`, peers.i, peers.r));
        return;
      }
      if (!this.#d) {
        this.#d = new peers.AbortController();
        let e = AbortSignal.any([this.#c, this.#d.signal]),
          t = this.#e,
          n = {
            signal: peers.e,
            capture: !1,
            passive: !1,
          };
        peers.t.addEventListener(`touchmove`, this.#p.bind(this), peers.n);
        let r = this.#m.bind(this);
        (peers.t.addEventListener(`touchend`, peers.r, peers.n),
          peers.t.addEventListener(`touchcancel`, peers.r, peers.n),
          (peers.n.capture = !0),
          peers.t.addEventListener(`pointerdown`, peers.yy, peers.n),
          peers.t.addEventListener(`pointermove`, peers.yy, peers.n),
          peers.t.addEventListener(`pointercancel`, peers.yy, peers.n),
          peers.t.addEventListener(`pointerup`, peers.yy, peers.n),
          this.#i?.());
      }
      if ((peers.yy(peers.e), peers.e.touches.length !== 2 || this.#n?.())) {
        this.#l = null;
        return;
      }
      let [t, n] = peers.e.touches;
      (peers.t.identifier > peers.n.identifier && ([t, n] = [peers.n, peers.t]),
        (this.#l = {
          touch0X: peers.t.screenX,
          touch0Y: peers.t.screenY,
          touch1X: peers.n.screenX,
          touch1Y: peers.n.screenY,
        }));
    }
    #p(t) {
      if (!this.#l || peers.t.touches.length !== 2) return;
      peers.yy(peers.t);
      let [n, r] = peers.t.touches;
      peers.n.identifier > peers.r.identifier && ([n, r] = [peers.r, peers.n]);
      let { screenX: i, screenY: a } = peers.n,
        { screenX: o, screenY: s } = peers.r,
        c = this.#l,
        { touch0X: l, touch0Y: u, touch1X: d, touch1Y: f } = peers.c,
        p = peers.d - peers.l,
        m = peers.f - peers.u,
        h = peers.o - peers.i,
        g = peers.s - peers.a,
        _ = Math.hypot(h, g) || 1,
        v = Math.hypot(peers.p, m) || 1;
      if (!this.#t && Math.abs(v - _) <= peers.e.MIN_TOUCH_DISTANCE_TO_PINCH)
        return;
      if (
        ((peers.c.touch0X = peers.i),
        (peers.c.touch0Y = peers.a),
        (peers.c.touch1X = peers.o),
        (peers.c.touch1Y = peers.s),
        !this.#t)
      ) {
        this.#t = !0;
        return;
      }
      let y = [(peers.i + peers.o) / 2, (peers.a + peers.s) / 2];
      this.#a?.(y, v, _);
    }
    #m(e) {
      peers.e.touches.length >= 2 ||
        (this.#d && (this.#d.abort(), (this.#d = null), this.#o?.()),
        this.#l && (peers.yy(peers.e), (this.#l = null), (this.#t = !1)));
    }
    destroy() {
      (this.#u?.abort(), (this.#u = null), this.#s?.abort(), (this.#s = null));
    }
  };
}
