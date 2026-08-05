// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YRt`) / export `hit`.

export type HitPeers = {
  JRt: (...args: unknown[]) => unknown;
  KRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  qRt: (...args: unknown[]) => unknown;
};

let peers: HitPeers | null = null;

/** Wire hit peers once companions land. */
export function setHitPeers(next: HitPeers): void {
  peers = next;
}

/**
 * Bundle export `hit` / internal `YRt`.
 */
export function hit() {
  if (peers == null) {
    throw new Error("hit peers are not configured");
  }

  return peers.e(() => {
    ((peers.qRt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 =
          this._x1 =
          this._x2 =
          this._y0 =
          this._y1 =
          this._y2 =
            NaN),
          (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            peers.KRt(this, this._x1, this._y1);
            break;
        }
        ((this._line || (this._line !== 0 && this._point === 1)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (e, t) {
        switch (((e = +peers.e), (t = +t), this._point)) {
          case 0:
            ((this._point = 1),
              this._line
                ? this._context.lineTo(peers.e, t)
                : this._context.moveTo(peers.e, t));
            break;
          case 1:
            ((this._point = 2), (this._x1 = peers.e), (this._y1 = t));
            break;
          case 2:
            this._point = 3;
          default:
            peers.KRt(this, peers.e, t);
            break;
        }
        ((this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = peers.e),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t));
      },
    }),
      (JRt = (function e(t) {
        function n(e) {
          return new peers.qRt(peers.e, t);
        }
        return (
          (peers.n.tension = function (t) {
            return peers.e(+t);
          }),
          peers.n
        );
      })(0)));
  });
}
