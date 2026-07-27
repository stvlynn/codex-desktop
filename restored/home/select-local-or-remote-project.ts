// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `wA`) / export `g$`.

export type SelectLocalOrRemoteProjectPeers = {
  selectLocalProject: (store: unknown, project: unknown) => void;
  selectRemoteProjectId: (store: unknown, projectId: unknown) => void;
};

let peers: SelectLocalOrRemoteProjectPeers | null = null;

/** Wire local/remote project selection peers once companions land. */
export function setSelectLocalOrRemoteProjectPeers(
  next: SelectLocalOrRemoteProjectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `g$` / internal `wA`.
 * Select a local project, remote project id, or clear remote selection.
 */
export function selectLocalOrRemoteProject(
  store: unknown,
  project:
    | { projectKind: "local" }
    | { projectKind: "remote"; projectId: unknown }
    | null
    | undefined,
): void {
  if (peers == null) {
    throw new Error("SelectLocalOrRemoteProject peers are not configured");
  }
  if (project?.projectKind === "local") {
    peers.selectLocalProject(store, project);
    return;
  }
  if (project?.projectKind === "remote") {
    peers.selectRemoteProjectId(store, project.projectId);
    return;
  }
  peers.selectRemoteProjectId(store, null);
}
