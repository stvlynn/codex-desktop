// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `t6n`) / export `N3`.

export type UseGitRepoLiveQueryPeers = {
  getHostConfigId: (hostConfig: unknown) => string;
  useLiveQuery: (opts: Record<string, unknown>) => unknown;
};

let peers: UseGitRepoLiveQueryPeers | null = null;

/** Wire useGitRepoLiveQuery peers once companions land. */
export function setUseGitRepoLiveQueryPeers(
  next: UseGitRepoLiveQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `N3` / internal `t6n`.
 * Live git-repo query keyed by cwd + host config id.
 */
export type GitRepoLiveQueryHostConfig = {
  id: string;
  [key: string]: unknown;
};

export type GitRepoLiveQueryOptions = {
  enabled?: boolean;
  retainRepoWatch?: boolean;
  liveQuery?: unknown;
};

export function useGitRepoLiveQuery(
  cwd: string | null | undefined,
  hostConfig: GitRepoLiveQueryHostConfig,
  method: unknown,
  params: unknown,
  options?: GitRepoLiveQueryOptions,
  _extra?: unknown,
): unknown {
  if (peers == null) {
    throw new Error("UseGitRepoLiveQuery peers are not configured");
  }
  const hostId = peers.getHostConfigId(hostConfig);
  const scope = cwd == null ? null : { cwd, hostConfig };
  const enabled = options?.enabled !== false;
  const retainRepoWatch =
    options?.retainRepoWatch ?? options?.liveQuery == null;
  return peers.useLiveQuery({
    cwd,
    hostId,
    hostConfig,
    method,
    params,
    scope,
    enabled,
    retainRepoWatch,
  });
}
