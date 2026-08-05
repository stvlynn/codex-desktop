// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EA`) / export `c$`.

export type BindDeferredConversationCPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationCPeers | null = null;

/** Wire bindDeferredConversationC peers once companions land. */
export function setBindDeferredConversationCPeers(
  next: BindDeferredConversationCPeers,
): void {
  peers = next;
}

/**
 * Bundle export `c$` / internal `EA`.
 */
export function bindDeferredConversationC() {
  if (peers == null) {
    throw new Error("bindDeferredConversationC peers are not configured");
  }

  return peers.ep(peers.Q, `list-automations`, {
    enabled: !0,
    refetchInterval: peers.Hf.ONE_MINUTE,
    staleTime: peers.Hf.ONE_MINUTE,
  });
}
