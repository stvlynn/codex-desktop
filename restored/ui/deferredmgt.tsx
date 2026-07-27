// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jge`) / export `mgt`.

export type BindDeferredmgtPeers = {
  Dge: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredmgtPeers | null = null;

/** Wire bindDeferredmgt peers once companions land. */
export function setBindDeferredmgtPeers(next: BindDeferredmgtPeers): void {
  peers = next;
}

/**
 * Bundle export `mgt` / internal `jge`.
 */
export function bindDeferredmgt() {
  if (peers == null) {
    throw new Error("bindDeferredmgt peers are not configured");
  }

  return peers.e(() => {
    peers.Dge();
  });
}
