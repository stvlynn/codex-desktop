// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `d3r` / export `nq`.

/** Domain part after `@`, lowercased; null when missing/empty. */
export function emailDomainFromAddress(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const at = value.lastIndexOf("@");
  if (at <= 0) return null;
  const domain = value
    .slice(at + 1)
    .trim()
    .toLowerCase();
  return domain.length === 0 ? null : domain;
}
