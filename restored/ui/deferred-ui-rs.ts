// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qMl`) / export `Rs`.

export type BindDeferredUiRsPeers = {
  D8: (...args: unknown[]) => unknown;
  LMl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  RMl: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRsPeers | null = null;

/** Wire bindDeferredUiRs peers once companions land. */
export function setBindDeferredUiRsPeers(next: BindDeferredUiRsPeers): void {
  peers = next;
}

/**
 * Bundle export `Rs` / internal `qMl`.
 */
export function bindDeferredUiRs() {
  if (peers == null) {
    throw new Error("bindDeferredUiRs peers are not configured");
  }

  return peers.Ma(peers.j2, ({ get: e }) => {
    let t = new Map(),
      n = e(peers.LMl);
    if (n == null) return t;
    let r = e(peers.RMl),
      i = e(peers.D8);
    for (let [e, a] of i.pluginNames) {
      let o = i.pluginIds.get(e),
        s = n.find((e) =>
          r ? o != null && e.plugin.remotePluginId === o : e.plugin.name === a,
        );
      s != null && t.set(e, s);
    }
    return t;
  });
}
