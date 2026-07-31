// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: idempotent ensure for TextStyle cluster (legacy workbookBt).

import { ensureFillInit } from "../fill";
import { ensureThemeColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";

let ready = false;

/** Legacy workbookBt — TextStyle + alignment/autofit/caps are eager; deps once. */
export function ensureTextStyleInit(): void {
  if (ready) return;
  ensureThemeColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureChartProtoNameMapsInit();
  ready = true;
}
