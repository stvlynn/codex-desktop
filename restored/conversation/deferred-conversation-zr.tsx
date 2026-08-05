// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `K8l`) / export `zr`.

export type BindBindDeferredConversationZrPeers = {
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredConversationZrPeers | null = null;

/** Wire bindBindDeferredConversationZr peers once companions land. */
export function setBindBindDeferredConversationZrPeers(
  next: BindBindDeferredConversationZrPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zr` / internal `K8l`.
 */
export function bindBindDeferredConversationZr() {
  if (peers == null) {
    throw new Error("bindBindDeferredConversationZr peers are not configured");
  }

  return peers.Pm(`heartbeat-thread-permissions-by-id`, {});
}
