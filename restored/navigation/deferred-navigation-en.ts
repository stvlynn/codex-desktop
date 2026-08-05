// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BNa`) / export `EN`.

export type BindDeferredNavigationENPeers = {
  Eh: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  zNa: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNavigationENPeers | null = null;

/** Wire bindDeferredNavigationEN peers once companions land. */
export function setBindDeferredNavigationENPeers(
  next: BindDeferredNavigationENPeers,
): void {
  peers = next;
}

/**
 * Bundle export `EN` / internal `BNa`.
 */
export function bindDeferredNavigationEN() {
  if (peers == null) {
    throw new Error("bindDeferredNavigationEN peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => {
    if (!e(peers.Eh, `637432221`)) return `unavailable`;
    let { data: t, isError: n } = e(peers.zNa);
    return t?.enabled === !0
      ? `available`
      : t?.enabled === !1 || n
        ? `unavailable`
        : `loading`;
  });
}
