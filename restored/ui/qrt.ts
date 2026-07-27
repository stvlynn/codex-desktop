// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nzt`) / export `qrt`.

export type QrtPeers = {
  e: (...args: unknown[]) => unknown;
  kzt: (...args: unknown[]) => unknown;
};

let peers: QrtPeers | null = null;

/** Wire qrt peers once companions land. */
export function setQrtPeers(next: QrtPeers): void {
  peers = next;
}

/**
 * Bundle export `qrt` / internal `Nzt`.
 */
export function qrt() {
  if (peers == null) {
    throw new Error("qrt peers are not configured");
  }

  return peers.e(() => {
    peers.kzt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x = this._y = NaN), (this._point = 0));
      },
      lineEnd: function () {
        (0 < this._t &&
          this._t < 1 &&
          this._point === 2 &&
          this._context.lineTo(this._x, this._y),
          (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line)));
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
            this._point = 2;
          default:
            if (this._t <= 0)
              (this._context.lineTo(this._x, t),
                this._context.lineTo(peers.e, t));
            else {
              var n = this._x * (1 - this._t) + peers.e * this._t;
              (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
            }
            break;
        }
        ((this._x = peers.e), (this._y = t));
      },
    };
  });
}
