// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NTe` companion for export `Wpt`.

import { normalizePosixPathSlashes } from "./normalize-posix-path-slashes";
import { resolveCodexHomePath } from "./resolve-codex-home-path";

/** `{codexHome}/worktrees` for the given home override. */
export function codexWorktreesDir(codexHome?: string | null): string {
  const home = codexHome ?? resolveCodexHomePath();
  return normalizePosixPathSlashes(`${home.replace(/\/+$/, "")}/worktrees`);
}
