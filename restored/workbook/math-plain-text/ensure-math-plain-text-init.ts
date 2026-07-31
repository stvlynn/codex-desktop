// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: idempotent ensure for math plain-text / latex cluster (Binding465).

import { ensurePresentationMathEnumsInit } from "./math-proto-enums";

let ready = false;

/** Legacy `workbookBinding465` — touch presentation math enums once. */
export function ensureMathPlainTextInit(): void {
  if (ready) return;
  ensurePresentationMathEnumsInit();
  ready = true;
}
