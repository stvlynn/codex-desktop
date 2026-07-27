// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `M2`) / export `mf`.

export type DeferredConversationMfPeers = {
  Ta: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationMfPeers | null = null;

/** Wire deferredConversationMf peers once companions land. */
export function setDeferredConversationMfPeers(next: DeferredConversationMfPeers): void {
  peers = next;
}

/**
 * Bundle export `mf` / internal `M2`.
 */
export function deferredConversationMf() {
  if (peers == null) {
    throw new Error("deferredConversationMf peers are not configured");
  }

  return peers.Ta(peers.j2, !1);
}
