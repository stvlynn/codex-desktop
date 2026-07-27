// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zxu`) / export `N`.

export type DeferredConversationNPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationNPeers | null = null;

/** Wire deferredConversationN peers once companions land. */
export function setDeferredConversationNPeers(next: DeferredConversationNPeers): void {
  peers = next;
}

/**
 * Bundle export `N` / internal `zxu`.
 */
export function deferredConversationN() {
  if (peers == null) {
    throw new Error("deferredConversationN peers are not configured");
  }

  return peers.Da(peers.Q, e => !1);
}
