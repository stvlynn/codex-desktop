// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hXt` / export `nnt`.

export function normalizeLooseHref(href: string): string {
  if (href.startsWith("//")) return `https:${href}`;
  if (/^www\./i.test(href)) return `https://${href}`;
  return href;
}
