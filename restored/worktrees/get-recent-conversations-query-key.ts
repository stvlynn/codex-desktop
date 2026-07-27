// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `OGr`) / export `YX`.

export type RecentConversationsQueryKeyPeers = {
  makeKey: (name: string) => unknown;
};

let peers: RecentConversationsQueryKeyPeers | null = null;

/** Wire query-key factory once companions land. */
export function setGetRecentConversationsQueryKeyPeers(
  next: RecentConversationsQueryKeyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YX` / internal `OGr`.
 * Query key helper for recent-conversations list.
 */
export function getRecentConversationsQueryKey(): unknown {
  if (peers == null) {
    throw new Error("GetRecentConversationsQueryKey peers are not configured");
  }
  return peers.makeKey("recent-conversations");
}
