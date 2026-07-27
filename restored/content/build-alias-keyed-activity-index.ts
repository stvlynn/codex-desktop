// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `x5r`) / export `_K`.

export type BuildAliasKeyedActivityIndexPeers = {
  getAliases: (item: unknown) => Iterable<unknown>;
  getKey: (item: unknown) => unknown;
};

let peers: BuildAliasKeyedActivityIndexPeers | null = null;

/** Wire buildAliasKeyedActivityIndex peers once companions land. */
export function setBuildAliasKeyedActivityIndexPeers(
  next: BuildAliasKeyedActivityIndexPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_K` / internal `x5r`.
 * Index activity items by alias keys for merge/lookup.
 */
export function buildAliasKeyedActivityIndex(
  items: unknown[],
): Map<unknown, unknown> {
  if (peers == null) {
    throw new Error("BuildAliasKeyedActivityIndex peers are not configured");
  }
  const index = new Map<unknown, unknown>();
  for (const item of items) {
    const key = peers.getKey(item);
    index.set(key, item);
    for (const alias of peers.getAliases(item)) {
      index.set(alias, item);
    }
  }
  return index;
}
