// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FWi`) / export `sH`.

export type DeferredConversationSHPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationSHPeers | null = null;

/** Wire deferredConversationSH peers once companions land. */
export function setDeferredConversationSHPeers(
  next: DeferredConversationSHPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sH` / internal `FWi`.
 */
export function deferredConversationSH() {
  if (peers == null) {
    throw new Error("deferredConversationSH peers are not configured");
  }

  return peers.Da(peers.Q, (e) => !1);
}
