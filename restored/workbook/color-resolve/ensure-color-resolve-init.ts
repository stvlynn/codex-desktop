// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-7: idempotent ensure for color-resolve cluster.

import { ensureWorkbookColorInit } from "../theme-color";
import { ensurePresentationThemeInit } from "../presentation-theme";

let ready = false;

/** Color-resolve helpers are eager; deps ensured once. */
export function ensureColorResolveInit(): void {
  if (ready) return;
  ensureWorkbookColorInit();
  ensurePresentationThemeInit();
  ready = true;
}
