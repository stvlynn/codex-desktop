// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dwa` / export `LF`.

export function tryParseJsonText(value: unknown): unknown | null {
  const text = String(value ?? "").trim();
  if (!text.startsWith("{") && !text.startsWith("[")) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
