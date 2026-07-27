// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `fJs`) / export `zg`.

export type FindLatestMatchingOperationPeers = {
  getOperations: () => {
    operations: Array<{
      sourceConversationId?: unknown;
      targetConversationId?: unknown;
    }>;
  };
};

let peers: FindLatestMatchingOperationPeers | null = null;

/** Wire findLatestMatchingOperation peers once companions land. */
export function setFindLatestMatchingOperationPeers(
  next: FindLatestMatchingOperationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zg` / internal `fJs`.
 * Find latest operation matching a conversation id.
 */
export function findLatestMatchingOperation(conversationId: unknown): unknown {
  if (peers == null) {
    throw new Error("FindLatestMatchingOperation peers are not configured");
  }
  const { operations } = peers.getOperations();
  if (conversationId == null) return null;
  for (let i = operations.length - 1; i >= 0; --i) {
    const op = operations[i];
    if (
      op.sourceConversationId === conversationId ||
      op.targetConversationId === conversationId
    ) {
      return op;
    }
  }
  return null;
}
