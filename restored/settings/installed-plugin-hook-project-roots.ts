// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nqc` / export `rd`.

import { mergeProjectRoots } from "./hooks-source-helpers";

/** When a plugin summary is installed with hooks, return ordered project roots. */
export function installedPluginHookProjectRoots(
  plugin:
    | {
        summary?: { installed?: boolean | null } | null;
        hooks?: unknown[] | null;
      }
    | null
    | undefined,
  discovered: string[],
  preferred: string[],
): string[] | undefined {
  if (
    plugin == null ||
    !plugin.summary?.installed ||
    (plugin.hooks?.length ?? 0) === 0
  ) {
    return;
  }
  const roots = mergeProjectRoots(discovered, preferred, null);
  return roots.length === 0 ? undefined : roots;
}
