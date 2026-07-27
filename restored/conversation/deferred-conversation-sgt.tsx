// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pge`) / export `Sgt`.

export type BindDeferredConversationSgtPeers = {
  e: (...args: unknown[]) => unknown;
  fge: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationSgtPeers | null = null;

/** Wire bindDeferredConversationSgt peers once companions land. */
export function setBindDeferredConversationSgtPeers(next: BindDeferredConversationSgtPeers): void {
  peers = next;
}

/**
 * Bundle export `Sgt` / internal `pge`.
 */
export function bindDeferredConversationSgt() {
  if (peers == null) {
    throw new Error("bindDeferredConversationSgt peers are not configured");
  }

  return peers.e(() => {
    fge = 256 * 1024 * 1024;
  });
}
