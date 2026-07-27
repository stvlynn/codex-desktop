// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `XLn` for `uw` / export `Z5`.

/** Parse an http(s) URL, or null when invalid / non-http(s). */
export function httpOrHttpsUrl(raw: string): URL | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  return url.protocol === "http:" || url.protocol === "https:" ? url : null;
}
