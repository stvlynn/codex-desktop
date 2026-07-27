// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `JGt` / export `Ynt`.

/** True when value looks like a PDF path string. */
export function isPdfPath(value: unknown): value is string {
  return typeof value === "string" && /\.pdf$/i.test(value);
}
