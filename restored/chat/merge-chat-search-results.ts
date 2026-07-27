// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dqa`) / export `pM`.

export type MergeChatSearchResultsPeers = {
  Aqa: (...args: unknown[]) => unknown;
  Lqa: (...args: unknown[]) => unknown;
  jqa: (...args: unknown[]) => unknown;
};
let peers: MergeChatSearchResultsPeers | null = null;

/** Wire mergeChatSearchResults peers once companions land. */
export function setMergeChatSearchResultsPeers(
  next: MergeChatSearchResultsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pM` / internal `Dqa`.
 */
export function mergeChatSearchResults({
  asyncResults,
  chatGptResults = [],
  loadedChatSearchResults,
  limit,
  query,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("mergeChatSearchResults peers are not configured");
  }
  let a = asyncResults.map(peers.jqa);
  return peers.Aqa(
    peers.Lqa([...loadedChatSearchResults, ...chatGptResults], a),
    query,
    limit,
  );
}
