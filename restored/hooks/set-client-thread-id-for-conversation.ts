// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VJn`) / export `setClientThreadIdForConversation`.

export type ClientThreadIdForConversationPeers = {
  JJn: (...args: unknown[]) => unknown;
};
let peers: ClientThreadIdForConversationPeers | null = null;

/** Wire setClientThreadIdForConversation peers once companions land. */
export function setClientThreadIdForConversationPeers(next: ClientThreadIdForConversationPeers): void {
  peers = next;
}

/**
 * Bundle export `setClientThreadIdForConversation` / internal `VJn`.
 */
export function setClientThreadIdForConversation(
  e: unknown,
  { clientThreadId, conversationId }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("setClientThreadIdForConversation peers are not configured");
  }
  peers.JJn(e, conversationId, clientThreadId);
}
