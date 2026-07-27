// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CE`) / export `J4`.

export type BindDeferredHostsJ4Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  Z8n: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsJ4Peers | null = null;

/** Wire bindDeferredHostsJ4 peers once companions land. */
export function setBindDeferredHostsJ4Peers(next: BindDeferredHostsJ4Peers): void {
  peers = next;
}

/**
 * Bundle export `J4` / internal `CE`.
 */
export function bindDeferredHostsJ4() {
  if (peers == null) {
    throw new Error("bindDeferredHostsJ4 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.SE) ? null : e(peers.Z8n)[0] ?? null);
}
