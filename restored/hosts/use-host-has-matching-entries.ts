// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `z7r`) / export `dK`.

export type UseHostHasMatchingEntriesArgs = {
  hostId: unknown;
};

export type UseHostHasMatchingEntriesPeers = {
  entriesAtom: unknown;
  useAtomValue: (atom: unknown, hostId: unknown) => { data?: unknown[] };
  matchesEntry: (entry: unknown) => boolean;
};

let peers: UseHostHasMatchingEntriesPeers | null = null;

/** Wire host matching-entry peers once companions land. */
export function setUseHostHasMatchingEntriesPeers(
  next: UseHostHasMatchingEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dK` / internal `z7r`.
 * Whether the host has any matching config entries.
 */
export function useHostHasMatchingEntries(
  args: UseHostHasMatchingEntriesArgs,
): boolean {
  if (peers == null) {
    throw new Error("UseHostHasMatchingEntries peers are not configured");
  }
  const { hostId } = args;
  const { data } = peers.useAtomValue(peers.entriesAtom, hostId);
  const entries = data === undefined ? [] : data;
  return entries.some(peers.matchesEntry);
}
