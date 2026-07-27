// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uwa` / export `zF`.

export function stringArrayFromUnknown(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}
