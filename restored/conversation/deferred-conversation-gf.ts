// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N2`) / export `gf`.

export type BindDeferredConversationGfPeers = {
  Ta: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationGfPeers | null = null;

/** Wire bindDeferredConversationGf peers once companions land. */
export function setBindDeferredConversationGfPeers(next: BindDeferredConversationGfPeers): void {
  peers = next;
}

/**
 * Bundle export `gf` / internal `N2`.
 */
export function bindDeferredConversationGf() {
  if (peers == null) {
    throw new Error("bindDeferredConversationGf peers are not configured");
  }

  return peers.Ta(peers.j2, !1);
}
