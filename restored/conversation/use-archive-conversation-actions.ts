// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `oCo`) / export `$k`.
// Archive / unarchive conversation actions hook from extractFn(oCo).

export type UseArchiveConversationActionsPeers = {
  run: (...args: unknown[]) => unknown;
};

let peers: UseArchiveConversationActionsPeers | null = null;

/** Wire useArchiveConversationActions peers once companions land. */
export function setUseArchiveConversationActionsPeers(
  next: UseArchiveConversationActionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$k` / internal `oCo`.
 * Archive / unarchive conversation actions hook from extractFn(oCo).
 */
export function useArchiveConversationActions(...args: unknown[]): unknown {
  if (peers == null) {
    throw new Error("useArchiveConversationActions peers are not configured");
  }
  return peers.run(...args);
}
