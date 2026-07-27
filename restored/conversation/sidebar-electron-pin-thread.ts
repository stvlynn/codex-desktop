// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Co`) / export `Co`.

export type BindSidebarElectronPinThreadPeers = {
  i: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: BindSidebarElectronPinThreadPeers | null = null;

/** Wire bindSidebarElectronPinThread peers once companions land. */
export function setBindSidebarElectronPinThreadPeers(next: BindSidebarElectronPinThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `Co` / internal `Co`.
 */
export function bindSidebarElectronPinThread() {
  if (peers == null) {
    throw new Error("bindSidebarElectronPinThread peers are not configured");
  }

  return peers.i((e, t) => {
    function n() {
      return !1;
    }
    t.exports = peers.n;
  });
}
