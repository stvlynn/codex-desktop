// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tzt`) / export `dit`.

export type DeferredUiditPeers = {
  $Rt: (...args: unknown[]) => unknown;
  KRt: (...args: unknown[]) => unknown;
  YRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ezt: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: DeferredUiditPeers | null = null;

/** Wire deferredUidit peers once companions land. */
export function setDeferredUiditPeers(next: DeferredUiditPeers): void {
  peers = next;
}

/**
 * Bundle export `dit` / internal `tzt`.
 */
export function deferredUidit() {
  if (peers == null) {
    throw new Error("deferredUidit peers are not configured");
  }

  return peers.e(() => {
    (peers.YRt(),
      (peers.$Rt.prototype = {
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
              ((this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2));
              break;
            case 3:
              this._point = 4;
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
      (ezt = (function e(t) {
        function n(e) {
          return new peers.$Rt(peers.e, t);
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
