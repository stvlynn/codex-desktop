// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KA`) / export `SQ`.

export type DeferredConversationSQPeers = {
  GMr: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationSQPeers | null = null;

/** Wire deferredConversationSQ peers once companions land. */
export function setDeferredConversationSQPeers(
  next: DeferredConversationSQPeers,
): void {
  peers = next;
}

/**
 * Bundle export `SQ` / internal `KA`.
 */
export function deferredConversationSQ() {
  if (peers == null) {
    throw new Error("deferredConversationSQ peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => e(peers.GMr) ?? `updated_at`);
}
