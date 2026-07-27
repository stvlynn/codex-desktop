// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CZi` / export `NB`.

import { firstOrNull } from "../utils/first-or-null";
import { isChatgptProjectsParentPath } from "./is-chatgpt-projects-parent-path";

/** True when a single root path sits under `.chatgpt-projects`. */
export function isChatgptProjectsWorkspace(workspace: {
  rootPaths: readonly string[];
}): boolean {
  const only =
    workspace.rootPaths.length === 1
      ? firstOrNull(workspace.rootPaths)
      : undefined;
  return only != null && isChatgptProjectsParentPath(only);
}
