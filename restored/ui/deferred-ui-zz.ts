// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IFr`) / export `zZ`.

export type DeferredUiZZPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredUiZZPeers | null = null;

/** Wire deferredUiZZ peers once companions land. */
export function setDeferredUiZZPeers(next: DeferredUiZZPeers): void {
  peers = next;
}

/**
 * Bundle export `zZ` / internal `IFr`.
 */
export function deferredUiZZ() {
  if (peers == null) {
    throw new Error("deferredUiZZ peers are not configured");
  }

  return peers.Ta(peers.Q, null);
}
