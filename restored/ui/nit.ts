// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mzt`) / export `nit`.

export type NitPeers = {
  MRt: (...args: unknown[]) => unknown;
  Rv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fzt: (...args: unknown[]) => unknown;
};

let peers: NitPeers | null = null;

/** Wire nit peers once companions land. */
export function setNitPeers(next: NitPeers): void {
  peers = next;
}

/**
 * Bundle export `nit` / internal `mzt`.
 */
export function nit() {
  if (peers == null) {
    throw new Error("nit peers are not configured");
  }

  return peers.e(() => {
    (peers.MRt(),
      (peers.fzt.prototype = {
        areaStart: peers.Rv,
        areaEnd: peers.Rv,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (e, t) {
          ((e = +peers.e),
            (t = +t),
            this._point
              ? this._context.lineTo(peers.e, t)
              : ((this._point = 1), this._context.moveTo(peers.e, t)));
        },
      }));
  });
}
