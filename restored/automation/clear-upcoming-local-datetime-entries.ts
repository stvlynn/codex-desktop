// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `atn`) / export `E9`.

export type ClearUpcomingLocalDatetimeEntriesPeers = {
  clearEntries: (key: unknown) => void;
};

let peers: ClearUpcomingLocalDatetimeEntriesPeers | null = null;

/** Wire formatter cache peers once companions land. */
export function setClearUpcomingLocalDatetimeEntriesPeers(
  next: ClearUpcomingLocalDatetimeEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `E9` / internal `atn`.
 * Clear cached upcoming-local-datetime formatter entries for a key.
 */
export function clearUpcomingLocalDatetimeEntries(key: unknown): void {
  if (peers == null) {
    throw new Error(
      "ClearUpcomingLocalDatetimeEntries peers are not configured",
    );
  }
  peers.clearEntries(key);
}
