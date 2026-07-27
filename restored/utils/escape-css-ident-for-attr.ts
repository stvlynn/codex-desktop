// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Et` — pure helper — real CSS.escape-ish body.

/** Escape non-ident characters as CSS `\\NN `. */
export function escapeCssIdentForAttr(value: string): string {
  return value.replace(
    /[^\w-]/g,
    (ch) => "\\" + ch.charCodeAt(0).toString(16) + " ",
  );
}
