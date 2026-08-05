// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DI`) / export `gW`.

export type BindDeferredConversationGWPeers = {
  Ma: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  pFi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationGWPeers | null = null;

/** Wire bindDeferredConversationGW peers once companions land. */
export function setBindDeferredConversationGWPeers(
  next: BindDeferredConversationGWPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gW` / internal `DI`.
 */
export function bindDeferredConversationGW() {
  if (peers == null) {
    throw new Error("bindDeferredConversationGW peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => e(peers.pFi).cwd);
}
