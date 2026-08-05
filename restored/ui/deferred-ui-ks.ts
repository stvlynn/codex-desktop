// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WMl`) / export `Ks`.

export type BindDeferredUiKsPeers = {
  D8: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiKsPeers | null = null;

/** Wire bindDeferredUiKs peers once companions land. */
export function setBindDeferredUiKsPeers(next: BindDeferredUiKsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ks` / internal `WMl`.
 */
export function bindDeferredUiKs() {
  if (peers == null) {
    throw new Error("bindDeferredUiKs peers are not configured");
  }

  return peers.Ma(peers.j2, ({ get: e }) =>
    Array.from(new Set(e(peers.D8).pluginIds.values())),
  );
}
