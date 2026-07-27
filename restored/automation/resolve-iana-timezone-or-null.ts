// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rQc` companion used by schedule parsers.

/** Resolved IANA timezone from `Intl`, or null when unavailable. */
export function resolveIanaTimezoneOrNull(): string | null {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return typeof zone === "string" && zone.trim().length > 0 ? zone : null;
}
