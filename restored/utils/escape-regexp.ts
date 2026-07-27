// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ls` — pure helper.

/** Escape a string for safe inclusion in a RegExp source. */
export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
