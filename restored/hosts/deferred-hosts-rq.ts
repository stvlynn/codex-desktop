// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `F2r`) / export `Rq`.

export type BindDeferredHostsRqPeers = {
  Ia: (...args: unknown[]) => unknown;
  M2r: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsRqPeers | null = null;

/** Wire bindDeferredHostsRq peers once companions land. */
export function setBindDeferredHostsRqPeers(
  next: BindDeferredHostsRqPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rq` / internal `F2r`.
 */
export function bindDeferredHostsRq() {
  if (peers == null) {
    throw new Error("bindDeferredHostsRq peers are not configured");
  }

  return peers.Ia(peers.Q, ({ get: e }) => peers.M2r(e(peers.SD)));
}
