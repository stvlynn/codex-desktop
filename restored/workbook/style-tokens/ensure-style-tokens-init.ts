// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: style-token cluster ensure (legacy Binding620).

import { ensureFontWeightTokensInit } from "./font-weight-tokens";
import { ensureLineHeightTokensInit } from "./line-height-tokens";
import { ensureFontSizeTokensInit } from "./font-size-tokens";

let styleTokensReady = false;

/** Legacy Binding620 — touch font-weight / leading / text-size token tables. */
export function ensureStyleTokensInit(): void {
  if (styleTokensReady) return;
  ensureFontWeightTokensInit();
  ensureLineHeightTokensInit();
  ensureFontSizeTokensInit();
  styleTokensReady = true;
}
