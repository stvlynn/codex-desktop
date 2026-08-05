// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Iu`) / export `rpt`.

export type DeferredRptPeers = {
  Fu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  vOe: (...args: unknown[]) => unknown;
};

let peers: DeferredRptPeers | null = null;

/** Wire deferredRpt peers once companions land. */
export function setDeferredRptPeers(next: DeferredRptPeers): void {
  peers = next;
}

/**
 * Bundle export `rpt` / internal `Iu`.
 */
export function deferredRpt() {
  if (peers == null) {
    throw new Error("deferredRpt peers are not configured");
  }

  return peers.e(() => {
    ((vOe = function (e, t) {
      return (
        (vOe =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (e, t) {
              peers.e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (peers.e[n] = t[n]);
          }),
        peers.vOe(peers.e, t)
      );
    }),
      (Fu = function () {
        return (
          (Fu =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    (peers.e[i] = t[i]);
              return peers.e;
            }),
          peers.Fu.apply(this, arguments)
        );
      }));
  });
}
