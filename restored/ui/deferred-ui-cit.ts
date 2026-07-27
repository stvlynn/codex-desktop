// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IRt`) / export `Cit`.

export type BindDeferredUiCitPeers = {
  NRt: (...args: unknown[]) => unknown;
  PRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCitPeers | null = null;

/** Wire bindDeferredUiCit peers once companions land. */
export function setBindDeferredUiCitPeers(next: BindDeferredUiCitPeers): void {
  peers = next;
}

/**
 * Bundle export `Cit` / internal `IRt`.
 */
export function bindDeferredUiCit() {
  if (peers == null) {
    throw new Error("bindDeferredUiCit peers are not configured");
  }

  return peers.e(() => {
    peers.PRt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 3:
            peers.NRt(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
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
            this._point = 2;
            break;
          case 2:
            ((this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6,
              ));
          default:
            peers.NRt(this, peers.e, t);
            break;
        }
        ((this._x0 = this._x1),
          (this._x1 = peers.e),
          (this._y0 = this._y1),
          (this._y1 = t));
      },
    };
  });
}
