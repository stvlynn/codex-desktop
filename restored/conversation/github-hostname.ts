// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `d1` / export `Om`.

/** Normalize a GitHub hostname (trim, lower-case, strip trailing dots). */
export function normalizeGithubHostname(hostname: string): string {
  return hostname.trim().toLowerCase().replace(/\.+$/u, "");
}
