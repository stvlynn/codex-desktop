// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HN`/`Ll` — export `NK` (uses `Vl` / `Hht` → isAbsolutePath).

import { isAbsolutePath, toForwardSlashes } from "./workspace-paths";

const REMOTE_OR_DATA_PREFIXES = [
  "data:",
  "http:",
  "https:",
  "file:",
  "vscode-resource:",
  "vscode-webview:",
  "vscode-file:",
] as const;

/** Coerce a trimmed local filesystem path; reject URLs / data URIs. */
export function coerceLocalFilesystemPath(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  const lower = trimmed.toLowerCase();
  for (const prefix of REMOTE_OR_DATA_PREFIXES) {
    if (lower.startsWith(prefix)) return null;
  }
  const normalized = toForwardSlashes(trimmed);
  return isAbsolutePath(normalized) ? normalized : null;
}

// --- split/export lane aliases ---
export { coerceLocalFilesystemPath as CoerceLocalFilesystemPath };
