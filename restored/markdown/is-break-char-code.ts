// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `bg` — micromark char-code helper.

/** True when a character code is a hard break sentinel (`< -2`). */
export function isBreakCharCode(code: number | null): boolean {
  return code !== null && code < -2;
}
