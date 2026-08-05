// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UMl`) / export `qs`.

export type BindDeferredUiQsPeers = {
  D8: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiQsPeers | null = null;

/** Wire bindDeferredUiQs peers once companions land. */
export function setBindDeferredUiQsPeers(next: BindDeferredUiQsPeers): void {
  peers = next;
}

/**
 * Bundle export `qs` / internal `UMl`.
 */
export function bindDeferredUiQs() {
  if (peers == null) {
    throw new Error("bindDeferredUiQs peers are not configured");
  }

  return peers.Ma(peers.j2, ({ get: e }) =>
    Array.from(new Set(e(peers.D8).pluginNames.values())),
  );
}
