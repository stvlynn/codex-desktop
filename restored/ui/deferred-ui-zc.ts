// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TX`) / export `zC`.

export type DeferredUiZCPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredUiZCPeers | null = null;

/** Wire deferredUiZC peers once companions land. */
export function setDeferredUiZCPeers(next: DeferredUiZCPeers): void {
  peers = next;
}

/**
 * Bundle export `zC` / internal `TX`.
 */
export function deferredUiZC() {
  if (peers == null) {
    throw new Error("deferredUiZC peers are not configured");
  }

  return peers.Ta(peers.Q, `idle`);
}
