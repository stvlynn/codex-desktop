// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tT`) / export `z8`.

export type BindNewConversationPeers = {
  IJn: (...args: unknown[]) => unknown;
  LJn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindNewConversationPeers | null = null;

/** Wire bindNewConversation peers once companions land. */
export function setBindNewConversationPeers(
  next: BindNewConversationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `z8` / internal `tT`.
 */
export function bindNewConversation() {
  if (peers == null) {
    throw new Error("bindNewConversation peers are not configured");
  }

  return peers.e(() => {
    ((IJn = `new-conversation`), (LJn = `panel-new-conversation`));
  });
}
