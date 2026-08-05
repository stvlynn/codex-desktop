// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OZc` / `kZc` companions (schedule interval helpers).

/** Round to int; null when non-finite or < 1. */
export function positiveRoundedIntOrNull(
  value: number | null | undefined,
): number | null {
  if (value == null || !Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}
