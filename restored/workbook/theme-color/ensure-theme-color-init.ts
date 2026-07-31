// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: idempotent ensure for theme-color / pattern-fill cluster.

import { ensureColorTransformConstantsInit } from "./color-transform-constants";
import { ensureColorTypeProtoToNameInit } from "./color-type-proto-to-name";
import { ensureThemeSchemeColorNamesInit } from "./is-theme-scheme-color-name";
import { ensureWorkbookColorInit } from "./workbook-color";
import { ensurePatternFillInit } from "./pattern-fill";

let initialized = false;

export function ensureThemeColorInit(): void {
  if (initialized) return;
  ensureColorTransformConstantsInit();
  ensureThemeSchemeColorNamesInit();
  ensureColorTypeProtoToNameInit();
  ensureWorkbookColorInit();
  ensurePatternFillInit();
  initialized = true;
}

/** Legacy Gre() alias. */
export function ensureColorTransformConstantsClusterInit(): void {
  ensureColorTransformConstantsInit();
}
