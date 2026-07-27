// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WV` / export `RF`.

export function nonEmptyStringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}
