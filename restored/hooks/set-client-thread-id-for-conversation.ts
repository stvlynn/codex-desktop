// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `VJn`) / export `A8`.

export type SetClientThreadIdPeers = {
  writeMapping: (
    store: unknown,
    conversationId: unknown,
    clientThreadId: unknown,
  ) => void;
};

let peers: SetClientThreadIdPeers | null = null;

/** Wire clientThreadId mapping writer once companions land. */
export function setSetClientThreadIdPeers(next: SetClientThreadIdPeers): void {
  peers = next;
}

/**
 * Bundle export `A8` / internal `VJn`.
 * Associate clientThreadId with conversationId in store.
 */
export function setClientThreadIdForConversation(
  store: unknown,
  args: { clientThreadId: unknown; conversationId: unknown },
): void {
  if (peers == null) {
    throw new Error("SetClientThreadId peers are not configured");
  }
  peers.writeMapping(store, args.conversationId, args.clientThreadId);
}
