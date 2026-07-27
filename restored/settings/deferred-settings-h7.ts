// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yln`) / export `H7`.

export type BindDeferredSettingsH7Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Zx: (...args: unknown[]) => unknown;
};

let peers: BindDeferredSettingsH7Peers | null = null;

/** Wire bindDeferredSettingsH7 peers once companions land. */
export function setBindDeferredSettingsH7Peers(next: BindDeferredSettingsH7Peers): void {
  peers = next;
}

/**
 * Bundle export `H7` / internal `Yln`.
 */
export function bindDeferredSettingsH7() {
  if (peers == null) {
    throw new Error("bindDeferredSettingsH7 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Zx).status === `allowed`);
}
