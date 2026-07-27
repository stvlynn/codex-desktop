// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UV` / export `HF` (also used as content-reference `asRecord`).

export function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value
    ? Object.fromEntries(Object.entries(value as Record<string, unknown>))
    : null;
}
