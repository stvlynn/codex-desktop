// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fxu`) / export `R`.

export type DeferredConversationRPeers = {
  K_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oxu: (...args: unknown[]) => unknown;
  uxu: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationRPeers | null = null;

/** Wire deferredConversationR peers once companions land. */
export function setDeferredConversationRPeers(next: DeferredConversationRPeers): void {
  peers = next;
}

/**
 * Bundle export `R` / internal `fxu`.
 */
export function deferredConversationR() {
  if (peers == null) {
    throw new Error("deferredConversationR peers are not configured");
  }

  return peers.e(() => {
    peers.oxu(), peers.K_(), uxu = 0;
  });
}
