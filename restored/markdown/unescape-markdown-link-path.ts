// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `t_` / export `Est`.

/** Unescape markdown link path escapes produced by the lexer. */
export function unescapeMarkdownLinkPath(pathValue: string): string {
  return pathValue.replaceAll("\\)", ")").replaceAll("\\\\", "\\");
}
