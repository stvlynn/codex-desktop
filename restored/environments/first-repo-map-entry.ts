// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jXr` / export `SY`.

import { firstRepoFromRepos } from "../conversation/first-repo-from-repos";

/** Look up `repo_map[firstRepo]` for an environment-like object. */
export function firstRepoMapEntry<T>(
  environment:
    | {
        repos?: unknown[] | null;
        repo_map?: Record<string, T> | null;
      }
    | null
    | undefined,
): T | null {
  if (environment == null) return null;
  const repo = firstRepoFromRepos(environment);
  if (repo == null) return null;
  return (environment.repo_map ?? {})[String(repo)] ?? null;
}
