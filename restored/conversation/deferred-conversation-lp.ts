// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fsc`) / export `lp`.

export type DeferredConversationLpPeers = {
  X: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationLpPeers | null = null;

/** Wire deferredConversationLp peers once companions land. */
export function setDeferredConversationLpPeers(next: DeferredConversationLpPeers): void {
  peers = next;
}

/**
 * Bundle export `lp` / internal `fsc`.
 */
export function deferredConversationLp() {
  if (peers == null) {
    throw new Error("deferredConversationLp peers are not configured");
  }

  return peers.sl({
    iconAppId: peers.X().min(1).optional(),
    label: peers.X().min(1)
  });
}
