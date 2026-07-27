// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `AXr` / export `CY`.

/** First entry of an optional `repos` array. */
export function firstRepoFromRepos<T>(
  value:
    | {
        repos?: T[] | null;
      }
    | null
    | undefined,
): T | undefined {
  return Array.isArray(value?.repos) ? value.repos[0] : undefined;
}
