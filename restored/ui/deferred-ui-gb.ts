// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P$i`) / export `gB`.

export type BindDeferredUiGBPeers = {
  Ma: (...args: unknown[]) => unknown;
  N$i: (...args: unknown[]) => unknown;
  dz: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  isFullScreen: (...args: unknown[]) => unknown;
  isInlineExpanded: (...args: unknown[]) => unknown;
  uz: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGBPeers | null = null;

/** Wire bindDeferredUiGB peers once companions land. */
export function setBindDeferredUiGBPeers(next: BindDeferredUiGBPeers): void {
  peers = next;
}

/**
 * Bundle export `gB` / internal `P$i`.
 */
export function bindDeferredUiGB() {
  if (peers == null) {
    throw new Error("bindDeferredUiGB peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    let t = e(peers.dz),
      n = e(peers.N$i);
    for (let r of e(peers.uz).values()) {
      if (!r.hostedInThreadScrollLayout) continue;
      let { mcpAppId: e } = r,
        i = t.get(e);
      if (i?.isInlineExpanded === !0 || i?.isFullScreen === !0 || n.has(e))
        return !0;
    }
    return !1;
  });
}
