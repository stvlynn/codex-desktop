// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Art` — pure helper.

/** Join then trim; empty result → null. */
export function joinTrimmedStringsOrNull(
  parts: readonly string[],
): string | null {
  const joined = parts.join("").trim();
  return joined.length === 0 ? null : joined;
}
