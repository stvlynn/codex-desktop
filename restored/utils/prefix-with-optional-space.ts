// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `yft` — pure helper.

/** Prefix `value` with a space unless `skipSpace` is set. */
export function prefixWithOptionalSpace(
  value: string,
  _unused?: unknown,
  skipSpace?: boolean,
): string {
  return (skipSpace ? "" : " ") + value;
}
