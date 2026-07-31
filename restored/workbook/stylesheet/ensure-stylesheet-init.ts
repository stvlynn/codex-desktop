// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: idempotent ensure for Stylesheet cluster (legacy Binding424).

import { ensureFillInit } from "../fill";
import { ensureWorkbookColorInit } from "../theme-color";
import {
  ensureCssNamedColorsInit,
  ensureChatgptThemeInit,
} from "../presentation-theme";

let ready = false;

/** Legacy Binding424 — Stylesheet + VO classes are eager; deps ensured once. */
export function ensureStylesheetInit(): void {
  if (ready) return;
  ensureFillInit();
  ensureWorkbookColorInit();
  ensureCssNamedColorsInit();
  ensureChatgptThemeInit();
  ready = true;
}
