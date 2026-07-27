// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `qmt` — micromark char-code helper.

/** True for markdown special ASCII codes or whitespace/EOF. */
export function isMarkdownSpecialCharCode(code: number | null): boolean {
  return (
    code === null ||
    code === 40 ||
    code === 42 ||
    code === 95 ||
    code === 91 ||
    code === 93 ||
    code === 126 ||
    (code !== null && (code < 0 || code === 32))
  );
}
