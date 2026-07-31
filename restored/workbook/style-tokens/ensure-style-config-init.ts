// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: style-config cluster ensure (legacy Binding621).

import { ensureWorkbookColorInit } from "../theme-color";
import { ensureFillInit } from "../fill";
import { ensureLineInit } from "../line";
import { ensureTextStyleInit } from "../text-style";
import { ensureListParagraphDefaultsInit } from "../text-run";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { ensureStyleTokensInit } from "./ensure-style-tokens-init";

let styleConfigReady = false;

/** Legacy Binding621 — touch color/fill/line/text-style/list + style tokens. */
export function ensureStyleConfigInit(): void {
  if (styleConfigReady) return;
  ensureWorkbookColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureListParagraphDefaultsInit();
  ensureTextStyleInit();
  ensureChartProtoNameMapsInit();
  ensureStyleTokensInit();
  styleConfigReady = true;
}
