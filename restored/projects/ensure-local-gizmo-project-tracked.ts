// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uds`) / export `lS`.

export type EnsureLocalGizmoProjectTrackedPeers = {
  Ids: (...args: unknown[]) => unknown;
  Wds: (...args: unknown[]) => unknown;
  Xds: (...args: unknown[]) => unknown;
};

let peers: EnsureLocalGizmoProjectTrackedPeers | null = null;

/** Wire ensureLocalGizmoProjectTracked peers once companions land. */
export function setEnsureLocalGizmoProjectTrackedPeers(next: EnsureLocalGizmoProjectTrackedPeers): void {
  peers = next;
}

/**
 * Bundle export `lS` / internal `Uds`.
 */
export function ensureLocalGizmoProjectTracked(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("ensureLocalGizmoProjectTracked peers are not configured");
  }

  let n = t.gizmo.id;
  peers.Xds.has(n) ||
    (peers.Xds.add(n),
    peers.Ids(e, {
      activeProject: {
        projectId: n,
        projectKind: `local`,
        rootPaths: [],
      },
    }),
    peers.Wds(e, n).finally(() => {
      peers.Xds.delete(n);
    }));
}
