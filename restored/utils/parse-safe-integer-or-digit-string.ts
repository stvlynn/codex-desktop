// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mxa` — coerce writing-block index values.

export function parseSafeIntegerOrDigitString(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isSafeInteger(value) ? value : null;
  }
  if (typeof value === "string" && /^\d+$/.test(value)) {
    return Number(value);
  }
  return null;
}
