// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-11: CSS font-family token quoting.

/** Legacy workbookHelper 111 — quote a font-family token when needed. */
export function quoteCssFontFamily(
  raw: string | null | undefined,
): string | undefined {
  if (!raw) return;
  const trimmed = String(raw).trim();
  if (!trimmed) return;
  return /[^A-Za-z0-9_-]/.test(trimmed)
    ? `'${trimmed.replace(/'/g, "\\'")}'`
    : trimmed;
}
