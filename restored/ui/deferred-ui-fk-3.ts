// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZN`) / export `fK`.

export type BindDeferredUiFKPeers = {
  i: (...args: unknown[]) => unknown;
  nvt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFKPeers | null = null;

/** Wire bindDeferredUiFK peers once companions land. */
export function setBindDeferredUiFKPeers(next: BindDeferredUiFKPeers): void {
  peers = next;
}

/**
 * Bundle export `fK` / internal `ZN`.
 */
export function bindDeferredUiFK() {
  if (peers == null) {
    throw new Error("bindDeferredUiFK peers are not configured");
  }

  return peers.i((e, t) => {
    var n = peers.nvt();
    function r(e) {
      return e && e.length ? n(e) : [];
    }
    t.exports = peers.r;
  });
}
