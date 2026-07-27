// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MTe` companion for worktrees dir resolution.

import { normalizePosixPathSlashes } from "./normalize-posix-path-slashes";

const FALLBACK_CODEX_HOME = "/.codex";

/** Resolve CODEX_HOME / ~/.codex (posix-normalized). */
export function resolveCodexHomePath(
  env:
    | { CODEX_HOME?: string; HOME?: string }
    | null
    | undefined = typeof process !== "undefined" ? process.env : undefined,
): string {
  if (env?.CODEX_HOME && env.CODEX_HOME.length > 0) {
    return normalizePosixPathSlashes(env.CODEX_HOME);
  }
  if (env?.HOME && env.HOME.length > 0) {
    return normalizePosixPathSlashes(
      `${env.HOME.replaceAll("\\", "/")}/.codex`,
    );
  }
  return FALLBACK_CODEX_HOME;
}
