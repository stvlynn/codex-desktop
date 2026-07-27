// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `vs` — pure helper.

/** Coarse kind for jsonish values. */
export function jsonishValueKind(
  value: unknown,
): "array" | "string" | "unknown" {
  return Array.isArray(value)
    ? "array"
    : typeof value === "string"
      ? "string"
      : "unknown";
}
