// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companions `OZc`/`kZc` for schedule validation.

/** Round to a positive integer, or null when invalid / < 1. */
export function positiveIntOrNull(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}
