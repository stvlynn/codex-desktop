// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ASa` / `jSa` — hostname or original string.

export function hostnameFromUrl(url: string | null | undefined): string | null {
  if (url == null) return null;
  try {
    return new URL(url).hostname || url;
  } catch {
    return url;
  }
}
