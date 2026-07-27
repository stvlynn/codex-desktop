// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qxo` / export `pA`.

import { canonicalizeWorkspacePathKey } from "./workspace-path-keys";

/** `${scope}:${canonicalPath}` cache key; null for empty/`/` paths. */
export function workspacePathCacheKey(pathValue: string | null | undefined, scope: string): string | null {
  return !pathValue || pathValue === "/"
    ? null
    : `${scope}:${canonicalizeWorkspacePathKey(pathValue)}`;
}
