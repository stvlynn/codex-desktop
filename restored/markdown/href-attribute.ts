// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `jc` — pure helper.

import { escapeCssIdentForAttr } from "../utils/escape-css-ident-for-attr";

/** Build an HTML `href="..."` attribute using CSS-style escapes. */
export function hrefAttribute(value: string): string {
  return 'href="' + escapeCssIdentForAttr(value) + '"';
}
