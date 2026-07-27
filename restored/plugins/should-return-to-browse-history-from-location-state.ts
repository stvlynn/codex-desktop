// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `D4i`) / export `Gz`.

export type LocationStateParseResult = {
  success: boolean;
  data?: { returnToBrowseHistoryEntry?: boolean };
};

export type ReturnToBrowseHistoryPeers = {
  safeParse: (value: unknown) => LocationStateParseResult;
};

let peers: ReturnToBrowseHistoryPeers | null = null;

/** Wire location-state schema once companions land. */
export function setReturnToBrowseHistoryPeers(
  next: ReturnToBrowseHistoryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gz` / internal `D4i`.
 * True when location state requests returnToBrowseHistoryEntry.
 */
export function shouldReturnToBrowseHistoryFromLocationState(
  value: unknown,
): boolean {
  if (peers == null) {
    throw new Error("ReturnToBrowseHistory peers are not configured");
  }
  const parsed = peers.safeParse(value);
  return parsed.success && parsed.data?.returnToBrowseHistoryEntry === true;
}
