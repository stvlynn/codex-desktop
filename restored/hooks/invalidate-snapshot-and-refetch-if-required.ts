// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pjr`) / export `VQ`.

export type InvalidateSnapshotAndRefetchIfRequiredPeers = {
  Hjr: (...args: unknown[]) => unknown;
  Ujr: (...args: unknown[]) => unknown;
};

let peers: InvalidateSnapshotAndRefetchIfRequiredPeers | null = null;

/** Wire invalidateSnapshotAndRefetchIfRequired peers once companions land. */
export function setInvalidateSnapshotAndRefetchIfRequiredPeers(next: InvalidateSnapshotAndRefetchIfRequiredPeers): void {
  peers = next;
}

/**
 * Bundle export `VQ` / internal `Pjr`.
 */
async function invalidateSnapshotAndRefetchIfRequired(e) {
  if (peers == null) {
    throw new Error("invalidateSnapshotAndRefetchIfRequired peers are not configured");
  }

  let t = e.query.snapshot(peers.Hjr);
  if (await t.invalidate({
    exact: !0,
    refetchType: `none`
  }), (await t.fetch()) !== `required`) return !1;
  let n = e.query.snapshot(peers.Ujr);
  return await n.invalidate({
    exact: !0,
    refetchType: `none`
  }), !(await n.fetch());
}
