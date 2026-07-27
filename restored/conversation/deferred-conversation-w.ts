// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kI`) / export `_W`.

export type BindDeferredConversationWPeers = {
  DE: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationWPeers | null = null;

/** Wire bindDeferredConversationW peers once companions land. */
export function setBindDeferredConversationWPeers(next: BindDeferredConversationWPeers): void {
  peers = next;
}

/**
 * Bundle export `_W` / internal `kI`.
 */
export function bindDeferredConversationW() {
  if (peers == null) {
    throw new Error("bindDeferredConversationW peers are not configured");
  }

  return peers.Ma(peers.hT, ({
    get: e
  }) => e(peers.DE, e(peers.OI)));
}
