// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Sidebar thread key → route path (bundle `bMr` / export `EQ`).

import { localThreadPath } from "./local-thread-path";
import { parseSidebarThreadKey } from "./sidebar-thread-keys";

export const REMOTE_TASK_PATH_PREFIX = "/remote";

/**
 * Bundle `Fwe` (co-located) — `/remote/<taskId>`.
 */
export function remoteTaskPath(taskId: string): string {
  return `${REMOTE_TASK_PATH_PREFIX}/${taskId}`;
}

/**
 * Bundle `bMr` / export `EQ` — resolve a sidebar thread key to a route path.
 */
export function sidebarThreadKeyToPath(key: string): string {
  const parsed = parseSidebarThreadKey(key);
  switch (parsed?.kind) {
    case "local":
      return localThreadPath(parsed.threadId);
    case "remote":
      return remoteTaskPath(parsed.taskId);
    case undefined:
      throw new Error("Invalid sidebar thread key");
  }
}
