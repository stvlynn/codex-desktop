// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Ij` — pure helper.

/** Join two strings with a NUL separator. */
export function joinWithNullChar(left: string, right: string): string {
  return `${left}\0${right}`;
}
