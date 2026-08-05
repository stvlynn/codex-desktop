// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nQr`) / export `_Y`.

export type BindBindDeferredUiY2Peers = {
  i: (...args: unknown[]) => unknown;
  tQr: (...args: unknown[]) => unknown;
  yo: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiY2Peers | null = null;

/** Wire bindBindDeferredUiY2 peers once companions land. */
export function setBindBindDeferredUiY2Peers(
  next: BindBindDeferredUiY2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `_Y` / internal `nQr`.
 */
export function bindBindDeferredUiY2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiY2 peers are not configured");
  }

  return peers.i((e, t) => {
    var n = peers.tQr(),
      r = peers.yo();
    function i(e, t, i, a) {
      return e == null
        ? []
        : (r(t) || (t = t == null ? [] : [t]),
          (i = a ? void 0 : peers.i),
          r(peers.i) || (i = peers.i == null ? [] : [peers.i]),
          n(e, t, peers.i));
    }
    t.exports = peers.i;
  });
}
