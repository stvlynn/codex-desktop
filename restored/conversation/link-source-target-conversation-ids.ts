// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `xxo`) / export `OA`.

export type ConversationStore = {
  set: (atom: unknown, key: unknown, value: unknown) => void;
  get?: (atom: unknown, key?: unknown) => unknown;
};

export type LinkSourceTargetConversationIdsPeers = {
  linkAtom: unknown;
  readSourceLinks: (store: ConversationStore, sourceId: unknown) => unknown;
  mergeTargetLinks: (sourceLinks: unknown, targetLinks: unknown) => unknown;
  readTargetLinks: (store: ConversationStore, targetId: unknown) => unknown;
};

let peers: LinkSourceTargetConversationIdsPeers | null = null;

/** Wire conversation-link atoms once companions land. */
export function setLinkSourceTargetConversationIdsPeers(
  next: LinkSourceTargetConversationIdsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `OA` / internal `xxo`.
 * Link source conversation ids onto the target conversation.
 */
export function linkSourceTargetConversationIds(
  store: ConversationStore,
  args: { sourceConversationId: unknown; targetConversationId: unknown },
): void {
  if (peers == null) {
    throw new Error("LinkSourceTargetConversationIds peers are not configured");
  }
  const { sourceConversationId, targetConversationId } = args;
  store.set(
    peers.linkAtom,
    targetConversationId,
    peers.mergeTargetLinks(
      peers.readSourceLinks(store, sourceConversationId),
      peers.readTargetLinks(store, targetConversationId),
    ),
  );
}
