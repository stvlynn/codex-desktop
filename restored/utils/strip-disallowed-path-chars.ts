// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Aqs` / export `Jg`; companion `jqs`.

const DISALLOWED_PATH_CHARS = new Set([
  "~",
  "^",
  ":",
  "?",
  "*",
  "[",
  "]",
  "\\",
]);

/** Keep only non-whitespace characters that are allowed in path segments. */
export function stripDisallowedPathChars(value: string): string {
  return Array.from(value)
    .filter((ch) => !/\s/u.test(ch) && !DISALLOWED_PATH_CHARS.has(ch))
    .join("");
}
