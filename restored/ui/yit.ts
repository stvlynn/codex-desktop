// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HRt`) / export `yit`.

export type YitPeers = {
  BRt: (...args: unknown[]) => unknown;
  IRt: (...args: unknown[]) => unknown;
  NRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: YitPeers | null = null;

/** Wire yit peers once companions land. */
export function setYitPeers(next: YitPeers): void {
  peers = next;
}

/**
 * Bundle export `yit` / internal `HRt`.
 */
export function yit() {
  if (peers == null) {
    throw new Error("yit peers are not configured");
  }

  return peers.e(() => {
    (peers.IRt(),
      (peers.BRt.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (this._line !== 0 && this._point === 3)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e = +peers.e), (t = +t), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var n = (this._x0 + 4 * this._x1 + peers.e) / 6,
                r = (this._y0 + 4 * this._y1 + t) / 6;
              this._line
                ? this._context.lineTo(n, r)
                : this._context.moveTo(n, r);
              break;
            case 3:
              this._point = 4;
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
