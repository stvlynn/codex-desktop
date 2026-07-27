// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yX`) / export `iw`.

export type DeferredConversationIwPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationIwPeers | null = null;

/** Wire deferredConversationIw peers once companions land. */
export function setDeferredConversationIwPeers(next: DeferredConversationIwPeers): void {
  peers = next;
}

/**
 * Bundle export `iw` / internal `yX`.
 */
export function deferredConversationIw() {
  if (peers == null) {
    throw new Error("deferredConversationIw peers are not configured");
  }

  return peers.Ta(peers.Q, null);
}
