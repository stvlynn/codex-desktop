// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$Zl` / export `ra`.

/** Return the first non-nullish of three values. */
export function coalesceNullableThree<T>(
  a: T | null | undefined,
  b: T | null | undefined,
  c: T | null | undefined,
): T | null {
  return a ?? b ?? c ?? null;
}
