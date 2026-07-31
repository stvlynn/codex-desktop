// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8/9: idempotent ensure for TextStyle + CSS-parse cluster.

import { ensureFillInit } from "../fill";
import { ensureThemeColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { ensureOutlineDashMapInit } from "./outline-css";
import { ensureShadowCssParseInit } from "./shadow-css-parse";

let ready = false;

/** Legacy workbookBt — TextStyle + CSS parsers are eager; deps once. */
export function ensureTextStyleInit(): void {
  if (ready) return;
  ensureThemeColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureChartProtoNameMapsInit();
  ensureOutlineDashMapInit();
  ensureShadowCssParseInit();
  ready = true;
}
