// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `j2`) / export `pf`.

export type BindDeferredConversationPfPeers = {
  Q: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationPfPeers | null = null;

/** Wire bindDeferredConversationPf peers once companions land. */
export function setBindDeferredConversationPfPeers(
  next: BindDeferredConversationPfPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pf` / internal `j2`.
 */
export function bindDeferredConversationPf() {
  if (peers == null) {
    throw new Error("bindDeferredConversationPf peers are not configured");
  }

  return peers.wa(`ConversationalOnboardingTaskScope`, {
    parent: peers.Q,
  });
}
