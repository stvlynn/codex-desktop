// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OI`) / export `vW`.

export type BindDeferredConversationVWPeers = {
  Ma: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  pFi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationVWPeers | null = null;

/** Wire bindDeferredConversationVW peers once companions land. */
export function setBindDeferredConversationVWPeers(
  next: BindDeferredConversationVWPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vW` / internal `OI`.
 */
export function bindDeferredConversationVW() {
  if (peers == null) {
    throw new Error("bindDeferredConversationVW peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => e(peers.pFi).hostId);
}
