// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rxu`) / export `P`.

export type DeferredConversationPPeers = {
  Lxu: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationPPeers | null = null;

/** Wire deferredConversationP peers once companions land. */
export function setDeferredConversationPPeers(next: DeferredConversationPPeers): void {
  peers = next;
}

/**
 * Bundle export `P` / internal `Rxu`.
 */
export function deferredConversationP() {
  if (peers == null) {
    throw new Error("deferredConversationP peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => e == null || !(t(peers.Lxu) ?? []).includes(e));
}
