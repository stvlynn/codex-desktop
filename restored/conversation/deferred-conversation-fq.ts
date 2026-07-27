// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W4r`) / export `fq`.

export type BindDeferredConversationFqPeers = {
  Pn: (...args: unknown[]) => unknown;
  Tar: (...args: unknown[]) => unknown;
  U4r: (...args: unknown[]) => unknown;
  nd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationFqPeers | null = null;

/** Wire bindDeferredConversationFq peers once companions land. */
export function setBindDeferredConversationFqPeers(next: BindDeferredConversationFqPeers): void {
  peers = next;
}

/**
 * Bundle export `fq` / internal `W4r`.
 */
export function bindDeferredConversationFq() {
  if (peers == null) {
    throw new Error("bindDeferredConversationFq peers are not configured");
  }

  return peers.Pn(e => e(peers.U4r) ?? peers.nd(`last_completed_onboarding`, null), (e, t, n) => {
    n != null && peers.Tar(), t(peers.U4r, n);
  });
}
