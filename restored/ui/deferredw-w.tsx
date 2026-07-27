// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nji`) / export `wW`.

export type BindDeferredwWPeers = {
  Aji: (...args: unknown[]) => unknown;
  FAi: (...args: unknown[]) => unknown;
  Mji: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredwWPeers | null = null;

/** Wire bindDeferredwW peers once companions land. */
export function setBindDeferredwWPeers(next: BindDeferredwWPeers): void {
  peers = next;
}

/**
 * Bundle export `wW` / internal `Nji`.
 */
export function bindDeferredwW() {
  if (peers == null) {
    throw new Error("bindDeferredwW peers are not configured");
  }

  return peers.e(() => {
    peers.FAi(), peers.Aji(), Mji = `/dev/null`;
  });
}
