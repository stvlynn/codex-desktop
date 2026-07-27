// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kvt` / export `bst`.

/** Escape backslashes and closing parentheses (CSS url / path fragments). */
export function escapeBackslashAndParen(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll(")", "\\)");
}
