// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kGr`) / export `XX`.

export type RecentConversationsMetaQueryKeyPeers = {
  AGr: (...args: unknown[]) => unknown;
};

let peers: RecentConversationsMetaQueryKeyPeers | null = null;

/** Wire recentConversationsMetaQueryKey peers once companions land. */
export function setRecentConversationsMetaQueryKeyPeers(
  next: RecentConversationsMetaQueryKeyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `XX` / internal `kGr`.
 */
export function recentConversationsMetaQueryKey() {
  if (peers == null) {
    throw new Error("recentConversationsMetaQueryKey peers are not configured");
  }

  return peers.AGr(`recent-conversations-meta`);
}
