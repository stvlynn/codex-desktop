// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zRt`) / export `xit`.

export type XitPeers = {
  IRt: (...args: unknown[]) => unknown;
  LRt: (...args: unknown[]) => unknown;
  MRt: (...args: unknown[]) => unknown;
  NRt: (...args: unknown[]) => unknown;
  Rv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: XitPeers | null = null;

/** Wire xit peers once companions land. */
export function setXitPeers(next: XitPeers): void {
  peers = next;
}

/**
 * Bundle export `xit` / internal `zRt`.
 */
export function xit() {
  if (peers == null) {
    throw new Error("xit peers are not configured");
  }

  return peers.e(() => {
    (peers.MRt(),
      peers.IRt(),
      (peers.LRt.prototype = {
        areaStart: peers.Rv,
        areaEnd: peers.Rv,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x2, this._y2),
                this._context.closePath());
              break;
            case 2:
              (this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3,
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3,
                ),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4));
              break;
          }
        },
        point: function (e, t) {
          switch (((e = +peers.e), (t = +t), this._point)) {
            case 0:
              ((this._point = 1), (this._x2 = peers.e), (this._y2 = t));
              break;
            case 1:
              ((this._point = 2), (this._x3 = peers.e), (this._y3 = t));
              break;
            case 2:
              ((this._point = 3),
                (this._x4 = peers.e),
                (this._y4 = t),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + peers.e) / 6,
                  (this._y0 + 4 * this._y1 + t) / 6,
                ));
              break;
            default:
              peers.NRt(this, peers.e, t);
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = peers.e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      }));
  });
}
