// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ig` — pure helper.

/** Filter out `null` / `undefined` entries. */
export function filterNullish<T>(values: Array<T | null | undefined>): T[] {
  return values.filter((value): value is T => value != null);
}
