// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jZ` / export `bx`.

/** Convert unix seconds to a Date, or null when invalid. */
export function secondsToDate(seconds: number | null | undefined): Date | null {
  if (seconds == null || !Number.isFinite(seconds)) return null;
  const ms = seconds * 1e3;
  return Number.isFinite(ms) ? new Date(ms) : null;
}
