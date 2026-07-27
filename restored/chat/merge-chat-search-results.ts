// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `Dqa`) / export `pM`.

export type MergeChatSearchResultsArgs = {
  asyncResults: unknown[];
  chatGptResults?: unknown[];
  loadedChatSearchResults: unknown[];
  limit: number;
  query: string;
};

export type MergeChatSearchResultsPeers = {
  mapAsyncResult: (item: unknown) => unknown;
  mergeLists: (loaded: unknown[], asyncMapped: unknown[]) => unknown[];
  rankAndLimit: (merged: unknown[], query: string, limit: number) => unknown[];
};

let peers: MergeChatSearchResultsPeers | null = null;

/** Wire chat-search merge peers once companions land. */
export function setMergeChatSearchResultsPeers(
  next: MergeChatSearchResultsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pM` / internal `Dqa`.
 * Merge async + ChatGPT + loaded chat search results with limit/query.
 */
export function mergeChatSearchResults(
  args: MergeChatSearchResultsArgs,
): unknown[] {
  if (peers == null) {
    throw new Error("MergeChatSearchResults peers are not configured");
  }
  const {
    asyncResults,
    chatGptResults = [],
    loadedChatSearchResults,
    limit,
    query,
  } = args;
  const mapped = asyncResults.map(peers.mapAsyncResult);
  return peers.rankAndLimit(
    peers.mergeLists([...loadedChatSearchResults, ...chatGptResults], mapped),
    query,
    limit,
  );
}
