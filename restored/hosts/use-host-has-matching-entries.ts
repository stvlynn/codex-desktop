// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z7r`) / export `dK`.

export type UseHostHasMatchingEntriesPeers = {
  B7r: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  OD: (...args: unknown[]) => unknown;
  V7r: (...args: unknown[]) => unknown;
};

let peers: UseHostHasMatchingEntriesPeers | null = null;

/** Wire useHostHasMatchingEntries peers once companions land. */
export function setUseHostHasMatchingEntriesPeers(
  next: UseHostHasMatchingEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dK` / internal `z7r`.
 */
export function useHostHasMatchingEntries(e: unknown) {
  if (peers == null) {
    throw new Error("useHostHasMatchingEntries peers are not configured");
  }

  let t = (0, peers.V7r.c)(4),
    { hostId: n } = e,
    { data: r } = peers.Fo(peers.OD, n),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  return (
    t[2] === a ? (o = t[3]) : ((o = a.some(peers.B7r)), (t[2] = a), (t[3] = o)),
    o
  );
}
