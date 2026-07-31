// Restored from ref/webview/assets/core-DvEtKs5A.js — vendored highlight.js
//
// npm-shim: stock highlight.js. The original chunk wrapped the package in
// Rolldown `__commonJS`; IMPORT_MAP maps bundle short `t` → `getHighlightJs`.
// Workbook-runtime also imports the legacy alias `Core`.

import hljs from "highlight.js";

/** Lazy init matching the bundled `__commonJS` export token `t`. */
export function getHighlightJs(): typeof hljs {
  return hljs;
}

/** Legacy workbook alias for the same `__commonJS` getter. */
export function Core(): typeof hljs {
  return hljs;
}

export { getHighlightJs as t };

export default hljs;
export * from "highlight.js";
