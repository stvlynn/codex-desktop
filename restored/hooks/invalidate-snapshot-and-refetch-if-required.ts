// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Pjr`) / export `VQ`.

export type InvalidateSnapshotAndRefetchIfRequiredPeers = {
  primarySnapshotKey: unknown;
  secondarySnapshotKey: unknown;
};

let peers: InvalidateSnapshotAndRefetchIfRequiredPeers | null = null;

/** Wire invalidateSnapshotAndRefetchIfRequired peers once companions land. */
export function setInvalidateSnapshotAndRefetchIfRequiredPeers(
  next: InvalidateSnapshotAndRefetchIfRequiredPeers,
): void {
  peers = next;
}

/**
 * Bundle export `VQ` / internal `Pjr`.
 * Invalidate primary snapshot; if fetch returns required, invalidate secondary.
 */
export async function invalidateSnapshotAndRefetchIfRequired(store: {
  query: {
    snapshot: (key: unknown) => {
      invalidate: (opts: {
        exact: boolean;
        refetchType: string;
      }) => Promise<unknown>;
      fetch: () => Promise<unknown>;
    };
  };
}): Promise<boolean> {
  if (peers == null) {
    throw new Error(
      "InvalidateSnapshotAndRefetchIfRequired peers are not configured",
    );
  }
  const primary = store.query.snapshot(peers.primarySnapshotKey);
  await primary.invalidate({ exact: true, refetchType: "none" });
  if ((await primary.fetch()) !== "required") return false;
  const secondary = store.query.snapshot(peers.secondarySnapshotKey);
  await secondary.invalidate({ exact: true, refetchType: "none" });
  return !(await secondary.fetch());
}
