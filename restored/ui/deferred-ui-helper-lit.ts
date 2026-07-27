// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `azt`) / export `lit`.

export type BindDeferredUiHelperLitPeers = {
  Pv: (...args: unknown[]) => unknown;
  YRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  izt: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nzt: (...args: unknown[]) => unknown;
  qRt: (...args: unknown[]) => unknown;
  rzt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperLitPeers | null = null;

/** Wire bindDeferredUiHelperLit peers once companions land. */
export function setBindDeferredUiHelperLitPeers(next: BindDeferredUiHelperLitPeers): void {
  peers = next;
}

/**
 * Bundle export `lit` / internal `azt`.
 */
export function bindDeferredUiHelperLit() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperLit peers are not configured");
  }

  return peers.e(() => {
    peers.Pv(), peers.YRt(), peers.rzt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
            break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function (e, t) {
        if (e = +peers.e, t = +t, this._point) {
          var n = this._x2 - peers.e,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = (peers.n * peers.n + r * r) ** +this._alpha);
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(peers.e, t) : this._context.moveTo(peers.e, t);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            peers.nzt(this, peers.e, t);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = peers.e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    }, izt = function e(t) {
      function n(e) {
        return t ? new peers.rzt(peers.e, t) : new peers.qRt(peers.e, 0);
      }
      return peers.n.alpha = function (t) {
        return peers.e(+t);
      }, peers.n;
    }(0.5);
  });
}
