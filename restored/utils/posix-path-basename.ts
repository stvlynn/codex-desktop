// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ef` / export `Udt`.

import { toPosixPath } from "./workspace-paths";

/** Basename of a path after POSIX normalization (trims trailing slashes). */
export function posixPathBasename(pathValue: string): string {
  const normalized = toPosixPath(pathValue).replace(/\/+$/u, "");
  return normalized.split("/").at(-1) ?? normalized;
}
