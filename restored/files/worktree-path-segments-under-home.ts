// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xzl` companion for export `Po`.

import { comparablePath } from "./comparable-path";
import { codexWorktreesDir } from "./codex-worktrees-dir";
import { normalizePosixPathSlashes } from "./normalize-posix-path-slashes";

const CODEX_WORKTREES_MARKER = ".codex/worktrees/";

/** Path segments of `worktreePath` under the codex worktrees root. */
export function worktreePathSegmentsUnderHome(worktreePath: string, codexHome?: string | null): string[] | null {
  const normalized = normalizePosixPathSlashes(worktreePath).replace(
    /\/+$/,
    "",
  );
  const lower = normalized.toLowerCase();
  if (codexHome != null) {
    const root = comparablePath(codexWorktreesDir(codexHome)).replace(
      /\/+$/,
      "",
    );
    if (lower === root || lower.startsWith(`${root}/`)) {
      return normalized.slice(root.length).split("/").filter(Boolean);
    }
  }
  const idx = lower.lastIndexOf(CODEX_WORKTREES_MARKER);
  if (idx === -1) return null;
  return normalized
    .slice(idx + CODEX_WORKTREES_MARKER.length)
    .split("/")
    .filter(Boolean);
}

/** Last two path segments joined (fallback label). */
export function lastTwoPathSegments(filePath: string): string {
  return normalizePosixPathSlashes(filePath)
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .slice(-2)
    .join("/");
}
