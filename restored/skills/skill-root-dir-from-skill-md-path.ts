// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `P4n` / export `q3` (uses `Tf` / path.posix basename+dirname).

import { toPosixPath } from "../utils/workspace-paths";

function posixBasename(posixPath: string): string {
  const parts = posixPath.split("/").filter(Boolean);
  return parts.at(-1) ?? "";
}

function posixDirname(posixPath: string): string {
  const trimmed = posixPath.replace(/\/+$/u, "");
  const idx = trimmed.lastIndexOf("/");
  if (idx <= 0) return trimmed.startsWith("/") ? "/" : ".";
  return trimmed.slice(0, idx);
}

/** Parent directory of a `skill.md` path; null when basename ≠ skill.md. */
export function skillRootDirFromSkillMdPath(entry: {
  path: string;
}): string | null {
  const posix = toPosixPath(entry.path);
  if (posixBasename(posix).toLowerCase() !== "skill.md") return null;
  const dir = posixDirname(posix);
  return entry.path.includes("\\") ? dir.replaceAll("/", "\\") : dir;
}
