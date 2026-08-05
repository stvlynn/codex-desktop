// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `atn`) / export `E9`.

export type ClearUpcomingLocalDatetimeEntriesPeers = {
  gx: (...args: unknown[]) => unknown;
};

let peers: ClearUpcomingLocalDatetimeEntriesPeers | null = null;

/** Wire clearUpcomingLocalDatetimeEntries peers once companions land. */
export function setClearUpcomingLocalDatetimeEntriesPeers(
  next: ClearUpcomingLocalDatetimeEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `E9` / internal `atn`.
 */
export function clearUpcomingLocalDatetimeEntries(e: unknown) {
  if (peers == null) {
    throw new Error(
      "clearUpcomingLocalDatetimeEntries peers are not configured",
    );
  }

  peers.gx.clearEntries(e);
}
