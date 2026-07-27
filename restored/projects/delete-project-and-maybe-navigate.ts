// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `iMa`) / export `PN`.

export type DeleteProjectAndMaybeNavigatePeers = {
  accountScopeAtom: unknown;
  invalidateProjectQueries: (queryClient: unknown, projectId: unknown) => void;
  setActiveRouteKind: (scope: unknown, kind: string) => void;
};

let peers: DeleteProjectAndMaybeNavigatePeers | null = null;

/** Wire delete-project peers once companions land. */
export function setDeleteProjectAndMaybeNavigatePeers(
  next: DeleteProjectAndMaybeNavigatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `PN` / internal `iMa`.
 * Delete a project, invalidate queries, and navigate home if it was active.
 */
export async function deleteProjectAndMaybeNavigate(args: {
  scope: {
    get: (atom: unknown) => {
      deleteProject: (id: unknown) => Promise<unknown>;
    };
  };
  activeProjectId: unknown;
  navigate: (path: string) => void;
  projectId: unknown;
  queryClient: unknown;
}): Promise<void> {
  if (peers == null) {
    throw new Error("DeleteProjectAndMaybeNavigate peers are not configured");
  }
  const { scope, activeProjectId, navigate, projectId, queryClient } = args;
  await scope.get(peers.accountScopeAtom).deleteProject(projectId);
  peers.invalidateProjectQueries(queryClient, projectId);
  if (projectId === activeProjectId) {
    peers.setActiveRouteKind(scope, "chat");
    navigate("/");
  }
}
