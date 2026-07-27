// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hl` / `u_e` companions for file URL checks.

const LEADING_DRIVE_SLASH = /^\/[A-Za-z]:[\\/]/;

/** Strip a leading `/C:/` style prefix from a pathname. */
export function stripLeadingDriveSlash(pathname: string): string {
  return LEADING_DRIVE_SLASH.test(pathname) ? pathname.slice(1) : pathname;
}
