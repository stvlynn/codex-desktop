// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eMa`) / export `VN`.

export type SetConversationPinnedStatePeers = {
  JMa: (...args: unknown[]) => unknown;
  isPinned: (...args: unknown[]) => unknown;
  nMa: (...args: unknown[]) => unknown;
  promise: (...args: unknown[]) => unknown;
};
let peers: SetConversationPinnedStatePeers | null = null;

/** Wire SetConversationPinnedState peers once companions land. */
export function setSetConversationPinnedStatePeers(
  next: SetConversationPinnedStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `VN` / internal `eMa`.
 */
export async function SetConversationPinnedState({
  scope,
  conversation,
  isPinned,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("SetConversationPinnedState peers are not configured");
  }
  let r = peers.JMa.get(conversation.id);
  if (r?.isPinned === isPinned) {
    await r.promise;
    return;
  }
  let i =
    r == null
      ? peers.nMa(scope, conversation, isPinned)
      : r.promise
          .catch(() => {
            return undefined;
          })
          .then(() => {
            return peers.nMa(scope, conversation, isPinned);
          });
  peers.JMa.set(conversation.id, {
    isPinned,
    promise: i,
  });
  try {
    await i;
  } finally {
    peers.JMa.get(conversation.id)?.promise === i &&
      peers.JMa.delete(conversation.id);
  }
}
