// Restored from ref/webview/assets/use-git-config-value-BVCZfaZo.js
// Live-query wrapper for git `config-value` lookups.
// Stage 3: xA/SA→git-config-value-query; I3→mergeGitLiveQueryOptions; I_t→useAppScopeAtomValue.

import { useAppScopeAtomValue } from "../boundaries/composer-appscope-atoms";
import {
  ensureGitConfigValueQueryInit,
  gitConfigValueFromTargetAtom,
} from "./git-config-value-query";
import {
  ensureGitRepoWatchAtomsInit,
  mergeGitLiveQueryOptions,
  type GitMethodQueryOptionsInput,
} from "./git-method-query-atoms";

ensureGitConfigValueQueryInit();

export type UseGitConfigValueHostConfig = Record<string, unknown>;

/**
 * Bundle export `n` — read a git config key for cwd/host/scope.
 */
export function useGitConfigValue(
  cwd: string | null | undefined,
  hostConfig: UseGitConfigValueHostConfig | null | undefined,
  key: string,
  scope: unknown,
  operationSource: unknown,
  options?: GitMethodQueryOptionsInput | null,
): unknown {
  const lookup =
    cwd == null ? null : ({ cwd, hostConfig } as Record<string, unknown>);
  const merged = mergeGitLiveQueryOptions(options, null);
  return useAppScopeAtomValue(gitConfigValueFromTargetAtom, {
    key,
    operationSource,
    lookup,
    scope,
    ...merged,
  });
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseGitConfigValueInit(): void {
  ensureGitRepoWatchAtomsInit();
}
