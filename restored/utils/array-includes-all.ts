// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `i3` — pure helper.

/** True when `haystack` includes every entry of `needles` (same length). */
export function arrayIncludesAll<T>(haystack: T[], needles: T[]): boolean {
  return haystack.length === needles.length
    ? needles.every((needle) => haystack.includes(needle))
    : false;
}
