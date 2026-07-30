// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Pure helper: whether a workspace path sits under the host's Codex worktrees dir.

import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";

/**
 * Bundle export `i` — worktree-path probe used by local-environment wiring.
 */
export function localConversationThreadI(
  workspacePath: string | null | undefined,
  hostId: string | null | undefined,
): boolean {
  const codexHome = readCodexHomeFromQuery(hostId);
  return (
    workspacePath != null && pathContainsWorktreesDir(workspacePath, codexHome)
  );
}
