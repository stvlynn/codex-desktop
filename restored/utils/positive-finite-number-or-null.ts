// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NSa` — positive finite number guard for image dimensions.

export function positiveFiniteNumberOrNull(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : null;
}
