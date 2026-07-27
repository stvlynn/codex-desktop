// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QRt`) / export `pit`.

export type BindDeferredUiHelperPitPeers = {
  KRt: (...args: unknown[]) => unknown;
  MRt: (...args: unknown[]) => unknown;
  Rv: (...args: unknown[]) => unknown;
  XRt: (...args: unknown[]) => unknown;
  YRt: (...args: unknown[]) => unknown;
  ZRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperPitPeers | null = null;

/** Wire bindDeferredUiHelperPit peers once companions land. */
export function setBindDeferredUiHelperPitPeers(next: BindDeferredUiHelperPitPeers): void {
  peers = next;
}

/**
 * Bundle export `pit` / internal `QRt`.
 */
export function bindDeferredUiHelperPit() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperPit peers are not configured");
  }

  return peers.e(() => {
    peers.MRt(), peers.YRt(), peers.XRt.prototype = {
      areaStart: peers.Rv,
      areaEnd: peers.Rv,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
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
        switch (e = +peers.e, t = +t, this._point) {
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
            peers.KRt(this, peers.e, t);
            break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = peers.e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    }, ZRt = function e(t) {
      function n(e) {
        return new peers.XRt(peers.e, t);
      }
      return peers.n.tension = function (t) {
        return peers.e(+t);
      }, peers.n;
    }(0);
  });
}
