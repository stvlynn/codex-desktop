// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Fu`) / export `Zft`.

export type DeferredZftPeers = {
  Fu: (...args: unknown[]) => unknown;
};

let peers: DeferredZftPeers | null = null;

/** Wire deferredZft peers once companions land. */
export function setDeferredZftPeers(next: DeferredZftPeers): void {
  peers = next;
}

/**
 * Bundle export `Zft` / internal `Fu`.
 */
export const deferredZft = function () {
  if (peers == null) {
    throw new Error("deferredZft peers are not configured");
  }

  return (
    (Fu =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    peers.Fu.apply(this, arguments)
  );
};
