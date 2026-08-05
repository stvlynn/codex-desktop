// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ijt`) / export `Jat`.

export type DeferredJatPeers = {
  FAt: (...args: unknown[]) => unknown;
  Njt: (...args: unknown[]) => unknown;
  Pjt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: DeferredJatPeers | null = null;

/** Wire deferredJat peers once companions land. */
export function setDeferredJatPeers(next: DeferredJatPeers): void {
  peers = next;
}

/**
 * Bundle export `Jat` / internal `Ijt`.
 */
export function deferredJat() {
  if (peers == null) {
    throw new Error("deferredJat peers are not configured");
  }

  return (function e(t) {
    var n = peers.Njt(t);
    function r(e, t) {
      var r = n((e = peers.FAt(e)).r, (t = peers.FAt(t)).r),
        i = n(e.g, t.g),
        a = n(e.b, t.b),
        o = peers.Pjt(e.opacity, t.opacity);
      return function (t) {
        return (
          (e.r = peers.r(t)),
          (e.g = i(t)),
          (e.b = a(t)),
          (e.opacity = o(t)),
          e + ``
        );
      };
    }
    return ((peers.r.gamma = e), peers.r);
  })(1);
}
