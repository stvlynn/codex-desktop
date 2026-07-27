// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Uds`) / export `lS`.

export type EnsureLocalGizmoProjectTrackedPeers = {
  trackedIds: Set<unknown>;
  setActiveLocalProject: (
    store: unknown,
    payload: {
      activeProject: {
        projectId: unknown;
        projectKind: "local";
        rootPaths: unknown[];
      };
    },
  ) => void;
  trackProjectAsync: (store: unknown, projectId: unknown) => Promise<unknown>;
};

let peers: EnsureLocalGizmoProjectTrackedPeers | null = null;

/** Wire local gizmo project tracking peers once companions land. */
export function setEnsureLocalGizmoProjectTrackedPeers(
  next: EnsureLocalGizmoProjectTrackedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lS` / internal `Uds`.
 * Ensure a local gizmo project is tracked once per id.
 */
export function ensureLocalGizmoProjectTracked(
  store: unknown,
  project: { gizmo: { id: unknown } },
): void {
  if (peers == null) {
    throw new Error("EnsureLocalGizmoProjectTracked peers are not configured");
  }
  const id = project.gizmo.id;
  if (peers.trackedIds.has(id)) return;
  peers.trackedIds.add(id);
  peers.setActiveLocalProject(store, {
    activeProject: { projectId: id, projectKind: "local", rootPaths: [] },
  });
  void peers.trackProjectAsync(store, id).finally(() => {
    peers!.trackedIds.delete(id);
  });
}
