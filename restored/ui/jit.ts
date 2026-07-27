// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GLt`) / export `jit`.

export type JitPeers = {
  ULt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: JitPeers | null = null;

/** Wire jit peers once companions land. */
export function setJitPeers(next: JitPeers): void {
  peers = next;
}

/**
 * Bundle export `jit` / internal `GLt`.
 */
export function jit() {
  if (peers == null) {
    throw new Error("jit peers are not configured");
  }

  return peers.e(() => {
    peers.ULt.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
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
          default:
            this._context.lineTo(peers.e, t);
            break;
        }
      },
    };
  });
}
