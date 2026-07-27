// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `DAr`) / export `b$`.

export type UseRemoteProjectsSelectionPeers = {
  useAtomValue: (atom: unknown) => unknown;
  accountScopeAtom: unknown;
  useAccountSetting: (key: unknown) => {
    data: unknown;
    isLoading: boolean;
  };
  remoteProjectsKey: unknown;
  selectedProjectKey: unknown;
  setSelectedRemoteProjectId: (scope: unknown, projectId: unknown) => void;
  setRemoteProjects: (scope: unknown, projects: unknown) => void;
};

let peers: UseRemoteProjectsSelectionPeers | null = null;

/** Wire remote projects selection peers once companions land. */
export function setUseRemoteProjectsSelectionPeers(
  next: UseRemoteProjectsSelectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `b$` / internal `DAr`.
 * Read remote projects + selection and expose setters.
 */
export function useRemoteProjectsSelection(): {
  isLoading: boolean;
  selectedRemoteProject: unknown;
  selectedRemoteProjectId: unknown;
  setSelectedRemoteProjectId: (projectId: unknown) => void;
  remoteProjects: unknown[];
  setRemoteProjects: (projects: unknown) => void;
} {
  if (peers == null) {
    throw new Error("UseRemoteProjectsSelection peers are not configured");
  }
  const scope = peers.useAtomValue(peers.accountScopeAtom);
  const { data: remoteData, isLoading: remoteLoading } =
    peers.useAccountSetting(peers.remoteProjectsKey);
  const { data: selectedData, isLoading: selectedLoading } =
    peers.useAccountSetting(peers.selectedProjectKey);
  const remoteProjects = (remoteData as unknown[] | null | undefined) ?? [];
  const selectedRemoteProjectId =
    (selectedData as { type?: string; projectId?: unknown } | null | undefined)
      ?.type === "remote"
      ? (selectedData as { projectId: unknown }).projectId
      : null;
  const selectedRemoteProject =
    remoteProjects.find(
      (project) => (project as { id: unknown }).id === selectedRemoteProjectId,
    ) ?? null;
  return {
    isLoading: remoteLoading || selectedLoading,
    selectedRemoteProject,
    selectedRemoteProjectId: selectedRemoteProjectId ?? null,
    setSelectedRemoteProjectId: (projectId) =>
      peers!.setSelectedRemoteProjectId(scope, projectId),
    remoteProjects,
    setRemoteProjects: (projects) => peers!.setRemoteProjects(scope, projects),
  };
}
