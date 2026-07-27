// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wzt`) / export `$rt`.

export type BindDeferredUiRtPeers = {
  _zt: (...args: unknown[]) => unknown;
  bzt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gzt: (...args: unknown[]) => unknown;
  vzt: (...args: unknown[]) => unknown;
  xzt: (...args: unknown[]) => unknown;
  yzt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRtPeers | null = null;

/** Wire bindDeferredUiRt peers once companions land. */
export function setBindDeferredUiRtPeers(next: BindDeferredUiRtPeers): void {
  peers = next;
}

/**
 * Bundle export `$rt` / internal `wzt`.
 */
export function bindDeferredUiRt() {
  if (peers == null) {
    throw new Error("bindDeferredUiRt peers are not configured");
  }

  return peers.e(() => {
    ((peers.yzt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            peers.vzt(this, this._t0, peers._zt(this, this._t0));
            break;
        }
        ((this._line || (this._line !== 0 && this._point === 1)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (e, t) {
        var n = NaN;
        if (
          ((e = +peers.e), (t = +t), !(peers.e === this._x1 && t === this._y1))
        ) {
          switch (this._point) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(peers.e, t)
                  : this._context.moveTo(peers.e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                peers.vzt(
                  this,
                  peers._zt(this, (n = peers.gzt(this, peers.e, t))),
                  n,
                ));
              break;
            default:
              peers.vzt(this, this._t0, (n = peers.gzt(this, peers.e, t)));
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = peers.e),
            (this._y0 = this._y1),
            (this._y1 = t),
            (this._t0 = n));
        }
      },
    }),
      ((peers.bzt.prototype = Object.create(peers.yzt.prototype)).point =
        function (e, t) {
          peers.yzt.prototype.point.call(this, t, peers.e);
        }),
      (peers.xzt.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, peers.e);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, peers.e);
        },
        bezierCurveTo: function (e, t, n, r, i, a) {
          this._context.bezierCurveTo(t, peers.e, r, n, a, i);
        },
      }));
  });
}
