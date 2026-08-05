// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UKc`) / export `gd`.

export type BindDeferredConversationGdPeers = {
  GM: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationGdPeers | null = null;

/** Wire bindDeferredConversationGd peers once companions land. */
export function setBindDeferredConversationGdPeers(
  next: BindDeferredConversationGdPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gd` / internal `UKc`.
 */
export function bindDeferredConversationGd() {
  if (peers == null) {
    throw new Error("bindDeferredConversationGd peers are not configured");
  }

  return peers.wa(`ConversationTurnPresentationScope`, {
    key: ({ turnKey: e }) => e,
    parent: peers.GM,
  });
}
