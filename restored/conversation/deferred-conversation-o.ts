// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WWs`) / export `o_`.

export type DeferredConversationOPeers = {
  acs: (...args: unknown[]) => unknown;
  ccs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationOPeers | null = null;

/** Wire deferredConversationO peers once companions land. */
export function setDeferredConversationOPeers(
  next: DeferredConversationOPeers,
): void {
  peers = next;
}

/**
 * Bundle export `o_` / internal `WWs`.
 */
export function deferredConversationO() {
  if (peers == null) {
    throw new Error("deferredConversationO peers are not configured");
  }

  return peers.e(() => {
    (peers.acs(), peers.ccs());
  });
}
