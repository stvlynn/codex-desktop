// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nQr`) / export `_Y`.

export type BindResetPeers = {
  i: (...args: unknown[]) => unknown;
  tQr: (...args: unknown[]) => unknown;
  yo: (...args: unknown[]) => unknown;
};

let peers: BindResetPeers | null = null;

/** Wire bindReset peers once companions land. */
export function setBindResetPeers(next: BindResetPeers): void {
  peers = next;
}

/**
 * Bundle export `_Y` / internal `nQr`.
 */
export function bindReset() {
  if (peers == null) {
    throw new Error("bindReset peers are not configured");
  }

  return peers.i((e, t) => {
    var n = peers.tQr(),
      r = peers.yo();
    function i(e, t, i, a) {
      return e == null ? [] : (r(t) || (t = t == null ? [] : [t]), i = a ? void 0 : peers.i, r(peers.i) || (i = peers.i == null ? [] : [peers.i]), n(e, t, peers.i));
    }
    t.exports = peers.i;
  });
}
