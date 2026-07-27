// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P1i`) / export `mB`.

export type FilteredMapEntriesFragmentPeers = {
  F1i: (...args: unknown[]) => unknown;
  I1i: (...args: unknown[]) => unknown;
  L1i: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  _z: (...args: unknown[]) => unknown;
  hz: (...args: unknown[]) => unknown;
  uz: (...args: unknown[]) => unknown;
};
let peers: FilteredMapEntriesFragmentPeers | null = null;

/** Wire FilteredMapEntriesFragment peers once companions land. */
export function setFilteredMapEntriesFragmentPeers(
  next: FilteredMapEntriesFragmentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mB` / internal `P1i`.
 */
export function FilteredMapEntriesFragment() {
  if (peers == null) {
    throw new Error("FilteredMapEntriesFragment peers are not configured");
  }
  let t = peers.Y(peers.uz);
  return (
    <>
      {Array.from(t.entries()).filter(peers.L1i).map(peers.I1i).map(peers.F1i)}
    </>
  );
}
