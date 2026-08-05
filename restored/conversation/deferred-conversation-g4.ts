// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ner`) / export `g4`.

export type BindDeferredConversationG4Peers = {
  Ma: (...args: unknown[]) => unknown;
  Mer: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  aD: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationG4Peers | null = null;

/** Wire bindDeferredConversationG4 peers once companions land. */
export function setBindDeferredConversationG4Peers(
  next: BindDeferredConversationG4Peers,
): void {
  peers = next;
}

/**
 * Bundle export `g4` / internal `Ner`.
 */
export function bindDeferredConversationG4() {
  if (peers == null) {
    throw new Error("bindDeferredConversationG4 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => {
    let t = e(peers.Mer);
    return t == null || !e(peers.aD, t.hostId).includes(t.conversationId)
      ? null
      : t;
  });
}
