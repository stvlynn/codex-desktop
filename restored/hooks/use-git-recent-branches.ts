// Restored from ref/webview/assets/use-git-recent-branches-D2g84RUJ.js
// Thin wrapper over the shared git live-query for recent branches.
// Stage 3: N3→useGitRepoLiveQuery; A3→ensureUseGitRepoLiveQueryInit; Ivt dropped.

import {
  useGitRepoLiveQuery,
  type GitRepoLiveQueryHostConfig,
  type GitRepoLiveQueryOptions,
} from "./use-git-repo-live-query";
export type UseGitRecentBranchesOptions = GitRepoLiveQueryOptions & {
  limit?: number;
};
type RecentBranchesResult = {
  branches: unknown;
};
function selectBranches(data: RecentBranchesResult): unknown {
  return data.branches;
}
function liveQuery(params: Record<string, unknown>): {
  method: string;
  params: Record<string, unknown>;
} {
  return {
    method: "recent-branches",
    params,
  };
}

/**
 * Bundle export `n` — live-query recent git branches for a cwd/host.
 */
export function useGitRecentBranches(
  cwd: string | null | undefined,
  hostConfig: GitRepoLiveQueryHostConfig | null | undefined,
  operationSource: unknown,
  options?: UseGitRecentBranchesOptions,
): unknown {
  const { limit = 100, ...rest } = options ?? {};
  const paramsFactory = ({ root }: { root: unknown }) => {
    return {
      operationSource,
      root,
      limit,
    };
  };
  return useGitRepoLiveQuery(
    cwd,
    hostConfig,
    "recent-branches",
    paramsFactory,
    operationSource,
    {
      liveQuery,
      select: selectBranches,
      staleTime: Number.POSITIVE_INFINITY,
      ...rest,
    },
  );
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseGitRecentBranchesInit(): void {}
