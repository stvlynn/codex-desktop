// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tSo`) / export `gA`.

export type UseLocalEnvironmentEditorControllerPeers = {
  $n: (...args: unknown[]) => unknown;
  Qxo: (...args: unknown[]) => unknown;
  eSo: (...args: unknown[]) => unknown;
  iSo: (...args: unknown[]) => unknown;
  nSo: (...args: unknown[]) => unknown;
  np: (...args: unknown[]) => unknown;
  tr: (...args: unknown[]) => unknown;
  vK: (...args: unknown[]) => unknown;
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
 */
export function useLocalEnvironmentEditorController(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useLocalEnvironmentEditorController peers are not configured",
    );
  }
  let { hostId, workspaceRoot = "" } = e,
    i = peers.$n(),
    a = peers.tr(peers.vK),
    o = peers.Qxo(workspaceRoot, hostId),
    c = {
      hostId,
      workspaceRoot,
    };
  let l = o != null,
    u = {
      enabled: l,
    };
  let d = {
    params: c,
    queryConfig: u,
    select: peers.nSo,
  };
  let { data, isLoading, isFetching, error } = peers.np(
      "local-environments",
      d,
    ),
    g,
    _;
  g = data ?? [];
  _ = peers.eSo({
    canValidateSelection: !isLoading && !isFetching && error == null,
    environments: g,
    hostId,
    selectionsByWorkspace: a,
    workspaceRoot,
  });
  let {
      defaultEnvironment,
      defaultEnvironmentNormalized,
      availableEnvironments,
      resolvedConfigPath,
      normalizedResolvedConfigPath,
      repairConfigPath,
    } = _,
    w = (e) => {
      o != null &&
        i.set(peers.vK, {
          ...i.get(peers.vK),
          [o]: e,
        });
    };
  let T = w;
  return {
    workspaceKey: o,
    environments: g,
    isLoading,
    isFetching,
    error,
    defaultEnvironment,
    defaultEnvironmentNormalized,
    availableEnvironments,
    resolvedConfigPath,
    normalizedResolvedConfigPath,
    repairConfigPath,
    updateSelection: T,
  };
}
