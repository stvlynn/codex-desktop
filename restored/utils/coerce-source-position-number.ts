// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `_ut` (internal d2e) — coerce source line/column to a number.
// Used by unist/micromark-style position formatters (gut/hut) and popcorn surface.

/**
 * Bundle export `_ut`.
 * Returns `value` when it is a number; otherwise defaults to 1.
 */
export function coerceSourcePositionNumber(value: unknown): number {
  return value && typeof value === "number" ? value : 1;
}
