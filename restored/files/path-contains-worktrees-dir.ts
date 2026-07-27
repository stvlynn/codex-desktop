// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pu` / export `Wpt`.

import { comparablePath } from "./comparable-path";
import { codexWorktreesDir } from "./codex-worktrees-dir";

/** True when `filePath` contains the codex worktrees directory. */
export function pathContainsWorktreesDir(filePath: string | null | undefined, codexHome?: string | null): boolean {
  if (!filePath) return false;
  const needle = comparablePath(codexWorktreesDir(codexHome));
  return comparablePath(filePath).includes(needle);
}
