// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VMl`) / export `Is`.

export type BindDeferredUiIsPeers = {
  BMl: (...args: unknown[]) => unknown;
  D8: (...args: unknown[]) => unknown;
  LMl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
  qMl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIsPeers | null = null;

/** Wire bindDeferredUiIs peers once companions land. */
export function setBindDeferredUiIsPeers(next: BindDeferredUiIsPeers): void {
  peers = next;
}

/**
 * Bundle export `Is` / internal `VMl`.
 */
export function bindDeferredUiIs() {
  if (peers == null) {
    throw new Error("bindDeferredUiIs peers are not configured");
  }

  return peers.Ma(peers.j2, ({
    get: e
  }) => {
    let t = e(peers.D8);
    if (t.visibleTaskIds == null || e(peers.LMl) == null) return null;
    let n = e(peers.qMl),
      r = e(peers.BMl);
    return t.visibleTaskIds.filter(e => t.pluginNames.has(e) && !n.has(e) && !r.includes(e));
  });
}
