// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OY`) / export `KT`.

export type BindDeferredUiKTPeers = {
  DE: (...args: unknown[]) => unknown;
  DY: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiKTPeers | null = null;

/** Wire bindDeferredUiKT peers once companions land. */
export function setBindDeferredUiKTPeers(next: BindDeferredUiKTPeers): void {
  peers = next;
}

/**
 * Bundle export `KT` / internal `OY`.
 */
export function bindDeferredUiKT() {
  if (peers == null) {
    throw new Error("bindDeferredUiKT peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.DY) && e(peers.DE, e(peers.SD)).kind === `local`);
}
