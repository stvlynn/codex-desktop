// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Ua`) / export `AM`.

export type BindDeferredHostsAMPeers = {
  $u: (...args: unknown[]) => unknown;
  WH: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  uUa: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsAMPeers | null = null;

/** Wire bindDeferredHostsAM peers once companions land. */
export function setBindDeferredHostsAMPeers(next: BindDeferredHostsAMPeers): void {
  peers = next;
}

/**
 * Bundle export `AM` / internal `_Ua`.
 */
export function bindDeferredHostsAM() {
  if (peers == null) {
    throw new Error("bindDeferredHostsAM peers are not configured");
  }

  return peers.e(() => {
    peers.$u(), peers.uUa(), peers.WH();
  });
}
