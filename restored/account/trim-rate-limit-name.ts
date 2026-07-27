// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `j_s` / export `Ub`.

/** Trim a rate-limit display name; empty → null. */
export function trimRateLimitName(
  source: { rate_limit_name?: string | null } | null | undefined,
): string | null {
  if (source == null) return null;
  const raw = source.rate_limit_name;
  if (raw == null) return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}
