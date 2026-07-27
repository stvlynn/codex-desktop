// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `A6i`) / export `ez`.

export type UseGitRepoLookupQueryPeers = {
  runGitRepoLookupQuery: (options: {
    enabled: boolean;
    operationSource: unknown;
    lookup: { cwd: unknown; hostConfig: unknown } | null;
    retainRepoWatch: unknown;
  }) => unknown;
};

let peers: UseGitRepoLookupQueryPeers | null = null;

/** Wire git repo lookup query peers once companions land. */
export function setUseGitRepoLookupQueryPeers(
  next: UseGitRepoLookupQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ez` / internal `A6i`.
 * Build and run a git repo lookup query for cwd + host.
 */
export function useGitRepoLookupQuery(
  cwd: unknown,
  hostConfig: unknown,
  operationSource: unknown,
  options?: { enabled?: boolean; retainRepoWatch?: unknown },
): unknown {
  if (peers == null) {
    throw new Error("UseGitRepoLookupQuery peers are not configured");
  }
  const enabled = options?.enabled ?? true;
  const lookup = cwd == null ? null : { cwd, hostConfig };
  return peers.runGitRepoLookupQuery({
    enabled,
    operationSource,
    lookup,
    retainRepoWatch: options?.retainRepoWatch,
  });
}
