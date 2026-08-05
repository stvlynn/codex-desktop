// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A2`) / export `yf`.

export type BindDeferredConversationYfPeers = {
  FPc: (...args: unknown[]) => unknown;
  IPc: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationYfPeers | null = null;

/** Wire bindDeferredConversationYf peers once companions land. */
export function setBindDeferredConversationYfPeers(
  next: BindDeferredConversationYfPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yf` / internal `A2`.
 */
export function bindDeferredConversationYf() {
  if (peers == null) {
    throw new Error("bindDeferredConversationYf peers are not configured");
  }

  return peers.Pm(peers.FPc, peers.IPc);
}
