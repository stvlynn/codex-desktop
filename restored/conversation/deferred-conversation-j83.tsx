// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cYn`) / export `j8`.

export type BindDeferredConversationJ83Peers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bge: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationJ83Peers | null = null;

/** Wire bindDeferredConversationJ83 peers once companions land. */
export function setBindDeferredConversationJ83Peers(
  next: BindDeferredConversationJ83Peers,
): void {
  peers = next;
}

/**
 * Bundle export `j8` / internal `cYn`.
 */
export function bindDeferredConversationJ83() {
  if (peers == null) {
    throw new Error("bindDeferredConversationJ83 peers are not configured");
  }

  return peers.Da(peers.Q, (e) => peers.bge());
}
