// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `kGr`) / export `XX`.

export type RecentConversationsQueryKeyPeers = {
  makeKey: (name: string) => unknown;
};

let peers: RecentConversationsQueryKeyPeers | null = null;

/** Wire query-key factory once companions land. */
export function setRecentConversationsMetaQueryKeyPeers(
  next: RecentConversationsQueryKeyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `XX` / internal `kGr`.
 * Query key for recent-conversations-meta.
 */
export function recentConversationsMetaQueryKey(): unknown {
  if (peers == null) {
    throw new Error("RecentConversationsMetaQueryKey peers are not configured");
  }
  return peers.makeKey("recent-conversations-meta");
}
