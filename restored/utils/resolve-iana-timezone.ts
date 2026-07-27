// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rQc` companion (unexported in alias table; kept for schedule helpers).

/** Resolved IANA timezone string, or null when unavailable. */
export function resolveIanaTimezone(): string | null {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return typeof zone === "string" && zone.trim().length > 0 ? zone : null;
}
