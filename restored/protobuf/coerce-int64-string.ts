// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zT` / export `v6` (simplified pure path for string inputs).

/** Coerce a protobuf int64-ish value to string when already a string. */
export function coerceInt64String(
  value: unknown,
  _wireType?: unknown,
): string | undefined {
  if (value == null) return;
  if (typeof value === "string") return value;
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (typeof value === "bigint") return String(value);
}
