// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `TQr`) / export `mY`.

export type UseEnvironmentsByRepoQueryArgs = {
  enabled?: boolean;
};

export type UseEnvironmentsByRepoQueryPeers = {
  useAuthSession: () => { authMethod: string };
  useQuery: (options: Record<string, unknown>) => { data?: unknown };
  fetchRepos: () => Promise<unknown>;
  oneMinuteMs: number;
  repoKeysFromRepos: (repos: unknown) => string[];
  fetchEnvironmentsForRepos: (repos: unknown) => Promise<unknown[]>;
  sortEnvironments: (items: unknown[]) => unknown[];
};

let peers: UseEnvironmentsByRepoQueryPeers | null = null;

/** Wire environments-by-repo query peers once companions land. */
export function setUseEnvironmentsByRepoQueryPeers(
  next: UseEnvironmentsByRepoQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mY` / internal `TQr`.
 * Load workspace environments grouped/sorted by repo for ChatGPT auth.
 */
export function useEnvironmentsByRepoQuery(
  args?: UseEnvironmentsByRepoQueryArgs,
): unknown {
  if (peers == null) {
    throw new Error("UseEnvironmentsByRepoQuery peers are not configured");
  }
  const { authMethod } = peers.useAuthSession();
  const enabled = args?.enabled ?? true;
  const reposQueryKey = ["workspace", "environments-by-repo"];
  const reposEnabled = enabled && authMethod === "chatgpt";
  const { data: repos } = peers.useQuery({
    queryKey: reposQueryKey,
    queryFn: peers.fetchRepos,
    staleTime: peers.oneMinuteMs,
    enabled: reposEnabled,
  });
  const repoKeys = peers.repoKeysFromRepos(repos);
  const environmentsEnabled = enabled && !!repos && authMethod === "chatgpt";
  return peers.useQuery({
    queryKey: ["workspace", "environments-by-repo", ...repoKeys],
    enabled: environmentsEnabled,
    staleTime: peers.oneMinuteMs,
    queryFn: async () =>
      peers!.sortEnvironments(await peers!.fetchEnvironmentsForRepos(repos)),
  });
}
