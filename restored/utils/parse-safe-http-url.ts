// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vDo` + `yDo` (companions for `lDo` / `ck`).

/** Parse http(s) URLs without credentials; else null. */
export function parseSafeHttpUrl(value: string): URL | null {
  try {
    const url = new URL(value);
    return (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username !== "" ||
      url.password !== ""
      ? null
      : url;
  } catch {
    return null;
  }
}

/** Canonical href: drop hash + trailing slash on pathname. */
export function canonicalizeHttpUrl(url: URL): string {
  const next = new URL(url);
  next.hash = "";
  if (next.pathname.length > 1) {
    next.pathname = next.pathname.replace(/\/$/u, "");
  }
  return next.href;
}
