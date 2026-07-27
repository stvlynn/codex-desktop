// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hOe`) / export `ipt`.

export type BindDeferredUiIptPeers = {
  __REACT_DEVTOOLS_GLOBAL_HOOK__: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  mOe: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIptPeers | null = null;

/** Wire bindDeferredUiIpt peers once companions land. */
export function setBindDeferredUiIptPeers(next: BindDeferredUiIptPeers): void {
  peers = next;
}

/**
 * Bundle export `ipt` / internal `hOe`.
 */
export function bindDeferredUiIpt() {
  if (peers == null) {
    throw new Error("bindDeferredUiIpt peers are not configured");
  }

  return peers.i((e, t) => {
    function n() {
      if (!(typeof peers.__REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof peers.__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
        peers.__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(peers.n);
      } catch (e) {
        console.error(e);
      }
    }
    peers.n(), t.exports = peers.mOe();
  });
}
