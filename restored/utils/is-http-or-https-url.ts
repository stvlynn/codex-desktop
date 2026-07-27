// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qma` — absolute http(s) URL check (used by `Zma` / export `JI`).

export function isHttpOrHttpsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
