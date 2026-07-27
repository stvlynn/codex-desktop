// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Mrt` — pure helper.

/** Join strings; empty input → null. */
export function joinStringsOrNull(parts: readonly string[]): string | null {
  return parts.length === 0 ? null : parts.join("");
}
