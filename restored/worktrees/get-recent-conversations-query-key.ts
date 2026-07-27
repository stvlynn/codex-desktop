// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OGr`) / export `YX`.

export type GetRecentConversationsQueryKeyPeers = {
  AGr: (...args: unknown[]) => unknown;
};

let peers: GetRecentConversationsQueryKeyPeers | null = null;

/** Wire getRecentConversationsQueryKey peers once companions land. */
export function setGetRecentConversationsQueryKeyPeers(next: GetRecentConversationsQueryKeyPeers): void {
  peers = next;
}

/**
 * Bundle export `YX` / internal `OGr`.
 */
export function getRecentConversationsQueryKey() {
  if (peers == null) {
    throw new Error("getRecentConversationsQueryKey peers are not configured");
  }

  return peers.AGr(`recent-conversations`);
}
