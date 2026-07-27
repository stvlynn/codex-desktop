// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iMa`) / export `PN`.

export type DeleteProjectAndMaybeNavigatePeers = {
  MV: (...args: unknown[]) => unknown;
  bH: (...args: unknown[]) => unknown;
  lMa: (...args: unknown[]) => unknown;
};
let peers: DeleteProjectAndMaybeNavigatePeers | null = null;

/** Wire deleteProjectAndMaybeNavigate peers once companions land. */
export function setDeleteProjectAndMaybeNavigatePeers(
  next: DeleteProjectAndMaybeNavigatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `PN` / internal `iMa`.
 */
export async function deleteProjectAndMaybeNavigate({
  scope,
  activeProjectId,
  navigate,
  projectId,
  queryClient,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("deleteProjectAndMaybeNavigate peers are not configured");
  }
  await scope.get(peers.MV).deleteProject(projectId);
  peers.lMa(queryClient, projectId);
  projectId === activeProjectId && (peers.bH(scope, "chat"), navigate("/"));
}
