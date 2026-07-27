// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qT` companion for path helpers.

/** Trim, strip leading `./`, and normalize backslashes to `/`. */
export function normalizeRelativePathSlashes(value: string): string {
  return value
    .trim()
    .replace(/^\.\/+/, "")
    .replaceAll("\\", "/");
}
