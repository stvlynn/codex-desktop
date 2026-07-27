// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jln`) / export `z7`.

export type BindDeferredSettingsZ7Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Xx: (...args: unknown[]) => unknown;
};

let peers: BindDeferredSettingsZ7Peers | null = null;

/** Wire bindDeferredSettingsZ7 peers once companions land. */
export function setBindDeferredSettingsZ7Peers(next: BindDeferredSettingsZ7Peers): void {
  peers = next;
}

/**
 * Bundle export `z7` / internal `Jln`.
 */
export function bindDeferredSettingsZ7() {
  if (peers == null) {
    throw new Error("bindDeferredSettingsZ7 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Xx).status === `allowed`);
}
