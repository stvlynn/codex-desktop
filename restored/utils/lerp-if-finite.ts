// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Q1` — pure helper.

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

/** Linear interpolate when both ends are finite numbers; else return `b`. */
export function lerpIfFinite(a: unknown, b: unknown, t: number): unknown {
  return isFiniteNumber(a) && isFiniteNumber(b) ? a + t * (b - a) : b;
}

// --- missing-relative-export aliases ---
export { lerpIfFinite as LerpIfFinite };
