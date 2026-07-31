// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: idempotent ensure for font-stack + math-font + typography units.

import { ensureCssFontStackInit } from "./css-font-stack";
import { ensureMathFontStackInit } from "./math-font-stack";
import { ensureMathLayoutConstantsInit } from "./math-layout-constants";
import { ensureTypographyUnitsInit } from "./typography-units";

let ready = false;

export function ensureFontStackClusterInit(): void {
  if (ready) return;
  ensureCssFontStackInit();
  ensureMathFontStackInit();
  ensureMathLayoutConstantsInit();
  ensureTypographyUnitsInit();
  ready = true;
}
