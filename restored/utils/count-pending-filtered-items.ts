// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Ht`) / export `yvt`.

export type CountPendingFilteredItemsPeers = {
  resolveScope: (scope: unknown) => unknown;
  listItems: (
    query: { filters: Record<string, unknown> },
    scope: unknown,
  ) => unknown[];
};

let peers: CountPendingFilteredItemsPeers | null = null;

/** Wire countPendingFilteredItems peers once companions land. */
export function setCountPendingFilteredItemsPeers(
  next: CountPendingFilteredItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yvt` / internal `Ht`.
 * Count pending items under the given filters.
 */
export function countPendingFilteredItems(
  filters: Record<string, unknown>,
  scope: unknown,
): number {
  if (peers == null) {
    throw new Error("CountPendingFilteredItems peers are not configured");
  }
  const resolved = peers.resolveScope(scope);
  return peers.listItems(
    { filters: { ...filters, status: "pending" } },
    resolved,
  ).length;
}
