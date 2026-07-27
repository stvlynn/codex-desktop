// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oRt`) / export `Eit`.

export type BindDeferredUiEitPeers = {
  aRt: (...args: unknown[]) => unknown;
  areaEnd: (...args: unknown[]) => unknown;
  areaStart: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lineEnd: (...args: unknown[]) => unknown;
  lineStart: (...args: unknown[]) => unknown;
  point: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiEitPeers | null = null;

/** Wire bindDeferredUiEit peers once companions land. */
export function setBindDeferredUiEitPeers(next: BindDeferredUiEitPeers): void {
  peers = next;
}

/**
 * Bundle export `Eit` / internal `oRt`.
 */
export function bindDeferredUiEit() {
  if (peers == null) {
    throw new Error("bindDeferredUiEit peers are not configured");
  }

  return peers.e(() => {
    aRt = class {
      constructor(e, t) {
        this._context = peers.e, this._x = peers.t;
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }
      point(e, t) {
        switch (e = +peers.e, t = +peers.t, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(peers.e, peers.t) : this._context.moveTo(peers.e, peers.t);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + peers.e) / 2, this._y0, this._x0, peers.t, peers.e, peers.t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + peers.t) / 2, peers.e, this._y0, peers.e, peers.t);
            break;
        }
        this._x0 = peers.e, this._y0 = peers.t;
      }
    };
  });
}
