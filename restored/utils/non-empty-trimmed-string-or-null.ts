// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `WV` — pure helper.

/** Non-empty trimmed string, else `null`. */
export function nonEmptyTrimmedStringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}
