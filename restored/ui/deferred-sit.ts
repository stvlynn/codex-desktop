// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `czt`) / export `sit`.

export type DeferredSitPeers = {
  MRt: (...args: unknown[]) => unknown;
  QRt: (...args: unknown[]) => unknown;
  Rv: (...args: unknown[]) => unknown;
  XRt: (...args: unknown[]) => unknown;
  azt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nzt: (...args: unknown[]) => unknown;
  ozt: (...args: unknown[]) => unknown;
  szt: (...args: unknown[]) => unknown;
};

let peers: DeferredSitPeers | null = null;

/** Wire deferredSit peers once companions land. */
export function setDeferredSitPeers(next: DeferredSitPeers): void {
  peers = next;
}

/**
 * Bundle export `sit` / internal `czt`.
 */
export function deferredSit() {
  if (peers == null) {
    throw new Error("deferredSit peers are not configured");
  }

  return peers.e(() => {
    peers.QRt(), peers.MRt(), peers.azt(), peers.ozt.prototype = {
      areaStart: peers.Rv,
      areaEnd: peers.Rv,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
            break;
        }
      },
      point: function (e, t) {
        if (e = +peers.e, t = +t, this._point) {
          var n = this._x2 - peers.e,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = (peers.n * peers.n + r * r) ** +this._alpha);
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = peers.e, this._y3 = t;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = peers.e, this._y4 = t);
            break;
          case 2:
            this._point = 3, this._x5 = peers.e, this._y5 = t;
            break;
          default:
            peers.nzt(this, peers.e, t);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = peers.e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    }, szt = function e(t) {
      function n(e) {
        return t ? new peers.ozt(peers.e, t) : new peers.XRt(peers.e, 0);
      }
      return peers.n.alpha = function (t) {
        return peers.e(+t);
      }, peers.n;
    }(0.5);
  });
}
