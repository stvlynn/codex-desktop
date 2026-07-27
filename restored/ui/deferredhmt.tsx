// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rCe`) / export `hmt`.

export type BindDeferredhmtPeers = {
  Dge: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredhmtPeers | null = null;

/** Wire bindDeferredhmt peers once companions land. */
export function setBindDeferredhmtPeers(next: BindDeferredhmtPeers): void {
  peers = next;
}

/**
 * Bundle export `hmt` / internal `rCe`.
 */
export function bindDeferredhmt() {
  if (peers == null) {
    throw new Error("bindDeferredhmt peers are not configured");
  }

  return peers.e(() => {
    peers.Dge();
  });
}
