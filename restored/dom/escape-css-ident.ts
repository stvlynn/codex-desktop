// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FHs` companion for `h_`.

/** Escape a value for use inside a CSS attribute selector. */
export function escapeCssIdent(value: string): string {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
