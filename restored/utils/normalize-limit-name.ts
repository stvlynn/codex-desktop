// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LZ` companion for rate-limit lookups.

/** Lowercase kebab limit name; null when empty. */
export function normalizeLimitName(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[_\s.]+/gu, "-");
  return normalized.length > 0 ? normalized : null;
}
