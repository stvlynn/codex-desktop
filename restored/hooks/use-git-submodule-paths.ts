// Restored from ref/webview/assets/use-git-submodule-paths-BOmLGs8q.js
// Live-query wrapper for git `submodule-paths` via shared method-query factory.
// Stage 3: aW/oW/I3/L3→git-method-query-atoms; I_t→useAppScopeAtomValue; fdt→QueryStaleTimes.

import { useAppScopeAtomValue } from "../boundaries/composer-appscope-atoms";
import { QueryStaleTimes } from "../config/query-stale-times";
import {
  createGitMethodQueryAtoms,
  ensureGitMethodQueryAtomsInit,
  ensureGitRepoWatchAtomsInit,
  mergeGitLiveQueryOptions,
  type GitMethodQueryOptionsInput,
} from "./git-method-query-atoms";
ensureGitMethodQueryAtomsInit();
const submodulePathsAtoms = createGitMethodQueryAtoms({
  method: "submodule-paths",
  getParams: (input) => {
    return {
      operationSource: input.operationSource,
      root: input.root,
    };
  },
  getOptions: (input) => {
    return {
      select: (data: { paths?: unknown }) => {
        return data.paths;
      },
      staleTime: input.staleTime,
    };
  },
});
const submodulePathsFromTargetAtom = submodulePathsAtoms.fromTarget$;
export type UseGitSubmodulePathsHostConfig = Record<string, unknown>;

/**
 * Bundle export `n` — live-query submodule paths for a cwd/host.
 */
export function useGitSubmodulePaths(
  cwd: string | null | undefined,
  hostConfig: UseGitSubmodulePathsHostConfig | null | undefined,
  operationSource: unknown,
  options?: GitMethodQueryOptionsInput,
): unknown {
  const merged = mergeGitLiveQueryOptions(options, QueryStaleTimes.ONE_MINUTE);
  const lookup =
    cwd == null
      ? null
      : ({
          cwd,
          hostConfig,
        } as Record<string, unknown>);
  return useAppScopeAtomValue(submodulePathsFromTargetAtom, {
    ...merged,
    operationSource,
    lookup,
  });
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseGitSubmodulePathsInit(): void {
  ensureGitRepoWatchAtomsInit();
}
