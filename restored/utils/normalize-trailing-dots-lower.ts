// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `d1` — pure helper.

/** Trim, lowercase, and strip trailing dots. */
export function normalizeTrailingDotsLower(value: string): string {
  return value.trim().toLowerCase().replace(/\.+$/u, "");
}
