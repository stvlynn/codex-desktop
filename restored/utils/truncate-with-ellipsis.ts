// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `k_t` companion (alias historically rebound to zod; keep helper public).

/** Trim + collapse whitespace; ellipsize when longer than `maxLen`. */
export function truncateWithEllipsis(
  value: string,
  maxLen: number,
): string | null {
  const normalized = value.trim().replace(/\s+/g, " ");
  if (normalized.length === 0) return null;
  if (normalized.length <= maxLen) return normalized;
  return `${normalized.slice(0, maxLen - 1).trimEnd()}…`;
}
