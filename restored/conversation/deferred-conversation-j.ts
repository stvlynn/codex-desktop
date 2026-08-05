// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lxu`) / export `j`.

export type DeferredConversationJPeers = {
  Pm: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationJPeers | null = null;

/** Wire deferredConversationJ peers once companions land. */
export function setDeferredConversationJPeers(
  next: DeferredConversationJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `j` / internal `Lxu`.
 */
export function deferredConversationJ() {
  if (peers == null) {
    throw new Error("deferredConversationJ peers are not configured");
  }

  return peers.Pm(`remote-hosted-pip-hidden-thread-ids`, []);
}
