// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HMl`) / export `Js`.

export type BindDeferredUiJsPeers = {
  D8: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  VMl: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiJsPeers | null = null;

/** Wire bindDeferredUiJs peers once companions land. */
export function setBindDeferredUiJsPeers(next: BindDeferredUiJsPeers): void {
  peers = next;
}

/**
 * Bundle export `Js` / internal `HMl`.
 */
export function bindDeferredUiJs() {
  if (peers == null) {
    throw new Error("bindDeferredUiJs peers are not configured");
  }

  return peers.Ma(peers.j2, ({
    get: e
  }) => {
    let t = e(peers.D8).visibleTaskIds,
      n = e(peers.VMl);
    return t == null || n == null ? null : t.filter(e => !n.includes(e));
  });
}
