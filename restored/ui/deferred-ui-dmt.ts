// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pwe`) / export `dmt`.

export type BindDeferredUiDmtPeers = {
  fwe: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  su: (...args: unknown[]) => unknown;
  swe: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiDmtPeers | null = null;

/** Wire bindDeferredUiDmt peers once companions land. */
export function setBindDeferredUiDmtPeers(next: BindDeferredUiDmtPeers): void {
  peers = next;
}

/**
 * Bundle export `dmt` / internal `pwe`.
 */
export function bindDeferredUiDmt() {
  if (peers == null) {
    throw new Error("bindDeferredUiDmt peers are not configured");
  }

  return peers.i((e, t) => {
    var n = peers.swe(),
      r = peers.su(),
      i = peers.fwe(),
      a = Math.max,
      o = Math.min;
    function s(e, t, s) {
      var c = e == null ? 0 : e.length;
      if (!c) return -1;
      var l = c - 1;
      return (
        peers.s !== void 0 &&
          ((l = peers.i(peers.s)),
          (l = peers.s < 0 ? a(c + l, 0) : o(l, c - 1))),
        n(e, r(t, 3), l, !0)
      );
    }
    t.exports = peers.s;
  });
}
