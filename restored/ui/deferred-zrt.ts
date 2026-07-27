// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ozt`) / export `Zrt`.

export type DeferredZrtPeers = {
  Ezt: (...args: unknown[]) => unknown;
  Tzt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredZrtPeers | null = null;

/** Wire deferredZrt peers once companions land. */
export function setDeferredZrtPeers(next: DeferredZrtPeers): void {
  peers = next;
}

/**
 * Bundle export `Zrt` / internal `Ozt`.
 */
export function deferredZrt() {
  if (peers == null) {
    throw new Error("deferredZrt peers are not configured");
  }

  return peers.e(() => {
    peers.Tzt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x = []), (this._y = []));
      },
      lineEnd: function () {
        var e = this._x,
          t = this._y,
          n = peers.e.length;
        if (n)
          if (
            (this._line
              ? this._context.lineTo(peers.e[0], t[0])
              : this._context.moveTo(peers.e[0], t[0]),
            n === 2)
          )
            this._context.lineTo(peers.e[1], t[1]);
          else
            for (
              var r = peers.Ezt(peers.e), i = peers.Ezt(t), a = 0, o = 1;
              o < n;
              ++a, ++o
            )
              this._context.bezierCurveTo(
                r[0][a],
                i[0][a],
                r[1][a],
                i[1][a],
                peers.e[o],
                t[o],
              );
        ((this._line || (this._line !== 0 && n === 1)) &&
          this._context.closePath(),
          (this._line = 1 - this._line),
          (this._x = this._y = null));
      },
      point: function (e, t) {
        (this._x.push(+peers.e), this._y.push(+t));
      },
    };
  });
}
