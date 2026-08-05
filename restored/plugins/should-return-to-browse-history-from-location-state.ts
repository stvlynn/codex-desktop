// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `D4i`) / export `Gz`.

export type ShouldReturnToBrowseHistoryFromLocationStatePeers = {
  M4i: (...args: unknown[]) => unknown;
};

let peers: ShouldReturnToBrowseHistoryFromLocationStatePeers | null = null;

/** Wire shouldReturnToBrowseHistoryFromLocationState peers once companions land. */
export function setShouldReturnToBrowseHistoryFromLocationStatePeers(
  next: ShouldReturnToBrowseHistoryFromLocationStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gz` / internal `D4i`.
 */
export function shouldReturnToBrowseHistoryFromLocationState(e: unknown) {
  if (peers == null) {
    throw new Error(
      "shouldReturnToBrowseHistoryFromLocationState peers are not configured",
    );
  }

  let t = peers.M4i.safeParse(e);
  return t.success && t.data.returnToBrowseHistoryEntry === !0;
}
