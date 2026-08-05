// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MI`) / export `pW`.

export type BindDeferredConversationPW3Peers = {
  Pm: (...args: unknown[]) => unknown;
  bFi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationPW3Peers | null = null;

/** Wire bindDeferredConversationPW3 peers once companions land. */
export function setBindDeferredConversationPW3Peers(
  next: BindDeferredConversationPW3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `pW` / internal `MI`.
 */
export function bindDeferredConversationPW3() {
  if (peers == null) {
    throw new Error("bindDeferredConversationPW3 peers are not configured");
  }

  return peers.Pm(peers.bFi, !1);
}
