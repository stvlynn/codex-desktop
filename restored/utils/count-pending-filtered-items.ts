// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ht`) / export `yvt`.

export type CountPendingFilteredItemsPeers = {
  Wt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
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
 */
export function countPendingFilteredItems(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("countPendingFilteredItems peers are not configured");
  }

  let n = peers.rt(t);
  return peers.Wt(
    {
      filters: {
        ...e,
        status: `pending`,
      },
    },
    n,
  ).length;
}
