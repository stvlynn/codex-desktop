// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `XM` — pure helper.

/** True when value is not `null` or `undefined`. */
export function isNotNullish<T>(value: T | null | undefined): value is T {
  return value != null;
}
