// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `S$r`) / export `LJ`.

export type DeferredConversationLJPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationLJPeers | null = null;

/** Wire deferredConversationLJ peers once companions land. */
export function setDeferredConversationLJPeers(
  next: DeferredConversationLJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LJ` / internal `S$r`.
 */
export function deferredConversationLJ() {
  if (peers == null) {
    throw new Error("deferredConversationLJ peers are not configured");
  }

  return peers.Da(peers.Q, (e) => !1);
}
