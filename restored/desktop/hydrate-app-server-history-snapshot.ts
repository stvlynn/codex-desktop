// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `snc`) / export `im`.

export type HydrateAppServerHistorySnapshotPeers = {
  Jfs: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  anc: (...args: unknown[]) => unknown;
  appServerHistorySnapshots: (...args: unknown[]) => unknown;
  checkGate: (...args: unknown[]) => unknown;
  fS: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  tD: (...args: unknown[]) => unknown;
};

let peers: HydrateAppServerHistorySnapshotPeers | null = null;

/** Wire hydrateAppServerHistorySnapshot peers once companions land. */
export function setHydrateAppServerHistorySnapshotPeers(next: HydrateAppServerHistorySnapshotPeers): void {
  peers = next;
}

/**
 * Bundle export `im` / internal `snc`.
 */
export function hydrateAppServerHistorySnapshot(e: unknown, t: unknown, n: unknown, r: unknown) {
  if (peers == null) {
    throw new Error("hydrateAppServerHistorySnapshot peers are not configured");
  }

  let i = peers.gp?.appServerHistorySnapshots,
    a = e.get(peers.tD, t);
  if (a == null || i == null || e.get(peers.Th)?.checkGate(`416252813`) !== !0)
    return () => {};
  let o = (a.historySnapshotHydrationController ??= new peers.anc(
    a,
    i,
  )).hydrate(
    n,
    r,
    () => e.set(peers.Jfs, n, null),
    (t) => e.set(peers.Jfs, n, t),
  );
  return (
    o.applied.then((e) => {
      e && peers.fS.markCachedHistoryApplied(n);
    }),
    () => {
      (o.dispose(), e.set(peers.Jfs, n, null));
    }
  );
}
