// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `e_` / export `Tst`.

/** Undo over-escaped markdown link bracket sequences. */
export function unescapeMarkdownLinkBrackets(value: string): string {
  return value
    .replaceAll("\\]\\(", "](")
    .replaceAll("\\]", "]")
    .replaceAll("\\\\", "\\");
}
