// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dzt`) / export `ait`.

export type BindAitPeers = {
  $Rt: (...args: unknown[]) => unknown;
  azt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lzt: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nzt: (...args: unknown[]) => unknown;
  tzt: (...args: unknown[]) => unknown;
  uzt: (...args: unknown[]) => unknown;
};

let peers: BindAitPeers | null = null;

/** Wire bindAit peers once companions land. */
export function setBindAitPeers(next: BindAitPeers): void {
  peers = next;
}

/**
 * Bundle export `ait` / internal `dzt`.
 */
export function bindAit() {
  if (peers == null) {
    throw new Error("bindAit peers are not configured");
  }

  return peers.e(() => {
    peers.tzt(), peers.azt(), peers.lzt.prototype = {
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
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function (e, t) {
        if (e = +peers.e, t = +t, this._point) {
          var n = this._x2 - peers.e,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = (peers.n * peers.n + r * r) ** +this._alpha);
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            peers.nzt(this, peers.e, t);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = peers.e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    }, uzt = function e(t) {
      function n(e) {
        return t ? new peers.lzt(peers.e, t) : new peers.$Rt(peers.e, 0);
      }
      return peers.n.alpha = function (t) {
        return peers.e(+t);
      }, peers.n;
    }(0.5);
  });
}
