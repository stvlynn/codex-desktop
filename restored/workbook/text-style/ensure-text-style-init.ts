// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8/9/11: idempotent ensure for TextStyle + CSS-parse + style-resolve.

import { ensureFillInit } from "../fill";
import { ensureThemeColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import {
  ensurePlaceholderStyleInit,
  ensureSlidePlaceholderRolesInit,
} from "../presentation-theme";
import { ensureOutlineDashMapInit } from "./outline-css";
import { ensureShadowCssParseInit } from "./shadow-css-parse";

let textStyleReady = false;
let styleResolveReady = false;

/** Legacy workbookBt — TextStyle + CSS parsers are eager; deps once. */
export function ensureTextStyleInit(): void {
  if (textStyleReady) return;
  ensureThemeColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureChartProtoNameMapsInit();
  ensureOutlineDashMapInit();
  ensureShadowCssParseInit();
  textStyleReady = true;
}

/**
 * Legacy `workbookT` — style-resolve cascade + EMU factor are eager module
 * exports; touch placeholder deps once (does not call ensureTextStyleInit to
 * avoid an init cycle with TextStyle consumers).
 */
export function ensureStyleResolveInit(): void {
  if (styleResolveReady) return;
  ensurePlaceholderStyleInit();
  ensureSlidePlaceholderRolesInit();
  styleResolveReady = true;
}
