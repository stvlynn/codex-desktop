// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `tSo`) / export `gA`.

export type UseLocalEnvironmentEditorControllerPeers = {
  useStore: () => {
    get: (atom: unknown) => unknown;
    set: (atom: unknown, value: unknown) => void;
  };
  useSelectionsByWorkspace: () => unknown;
  resolveWorkspaceKey: (workspaceRoot: unknown, hostId: unknown) => unknown;
  queryLocalEnvironments: (input: {
    params: { hostId: unknown; workspaceRoot: string };
    queryConfig: { enabled: boolean };
    select: unknown;
  }) => {
    data: unknown[] | undefined;
    isLoading: boolean;
    isFetching: boolean;
    error: unknown;
  };
  selectEnvironments: unknown;
  selectionsAtom: unknown;
  resolveEditorState: (input: {
    canValidateSelection: boolean;
    environments: unknown[];
    hostId: unknown;
    selectionsByWorkspace: unknown;
    workspaceRoot: unknown;
  }) => {
    defaultEnvironment: unknown;
    defaultEnvironmentNormalized: unknown;
    availableEnvironments: unknown;
    resolvedConfigPath: unknown;
    normalizedResolvedConfigPath: unknown;
    repairConfigPath: unknown;
  };
};

let peers: UseLocalEnvironmentEditorControllerPeers | null = null;

/** Wire useLocalEnvironmentEditorController peers once companions land. */
export function setUseLocalEnvironmentEditorControllerPeers(
  next: UseLocalEnvironmentEditorControllerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gA` / internal `tSo`.
 * Controller for local environment editor selection + query state.
 */
export function useLocalEnvironmentEditorController(options: {
  hostId: unknown;
  workspaceRoot: unknown;
}): Record<string, unknown> {
  if (peers == null) {
    throw new Error(
      "UseLocalEnvironmentEditorController peers are not configured",
    );
  }
  const { hostId, workspaceRoot } = options;
  const store = peers.useStore();
  const selectionsByWorkspace = peers.useSelectionsByWorkspace();
  const workspaceKey = peers.resolveWorkspaceKey(workspaceRoot, hostId);
  const workspaceRootKey = workspaceRoot ?? "";
  const params = { hostId, workspaceRoot: workspaceRootKey };
  const queryConfig = { enabled: workspaceKey != null };
  const query = peers.queryLocalEnvironments({
    params,
    queryConfig,
    select: peers.selectEnvironments,
  });
  const environments = query.data ?? [];
  const resolved = peers.resolveEditorState({
    canValidateSelection:
      !query.isLoading && !query.isFetching && query.error == null,
    environments,
    hostId,
    selectionsByWorkspace,
    workspaceRoot,
  });
  const updateSelection = (next: unknown) => {
    if (workspaceKey == null) return;
    const current = peers!.useStore().get(peers!.selectionsAtom) as Record<
      string,
      unknown
    >;
    store.set(peers!.selectionsAtom, {
      ...current,
      [String(workspaceKey)]: next,
    });
  };
  return {
    workspaceKey,
    environments,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    defaultEnvironment: resolved.defaultEnvironment,
    defaultEnvironmentNormalized: resolved.defaultEnvironmentNormalized,
    availableEnvironments: resolved.availableEnvironments,
    resolvedConfigPath: resolved.resolvedConfigPath,
    normalizedResolvedConfigPath: resolved.normalizedResolvedConfigPath,
    repairConfigPath: resolved.repairConfigPath,
    updateSelection,
  };
}
