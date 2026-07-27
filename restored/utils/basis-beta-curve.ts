// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GRt`) / export `_it`.

export type BindBasisBetaCurvePeers = {
  IRt: (...args: unknown[]) => unknown;
  PRt: (...args: unknown[]) => unknown;
  URt: (...args: unknown[]) => unknown;
  WRt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: BindBasisBetaCurvePeers | null = null;

/** Wire bindBasisBetaCurve peers once companions land. */
export function setBindBasisBetaCurvePeers(next: BindBasisBetaCurvePeers): void {
  peers = next;
}

/**
 * Bundle export `_it` / internal `GRt`.
 */
export function bindBasisBetaCurve() {
  if (peers == null) {
    throw new Error("bindBasisBetaCurve peers are not configured");
  }

  return peers.e(() => {
    peers.IRt(), peers.URt.prototype = {
      lineStart: function () {
        this._x = [], this._y = [], this._basis.lineStart();
      },
      lineEnd: function () {
        var e = this._x,
          t = this._y,
          n = peers.e.length - 1;
        if (peers.n > 0) for (var r = peers.e[0], i = t[0], a = peers.e[peers.n] - r, o = t[peers.n] - i, s = -1, c; ++s <= peers.n;) c = s / peers.n, this._basis.point(this._beta * peers.e[s] + (1 - this._beta) * (r + c * a), this._beta * t[s] + (1 - this._beta) * (i + c * o));
        this._x = this._y = null, this._basis.lineEnd();
      },
      point: function (e, t) {
        this._x.push(+peers.e), this._y.push(+t);
      }
    }, WRt = function e(t) {
      function n(e) {
        return t === 1 ? new peers.PRt(peers.e) : new peers.URt(peers.e, t);
      }
      return peers.n.beta = function (t) {
        return peers.e(+t);
      }, peers.n;
    }(0.85);
  });
}
