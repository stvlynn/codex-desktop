// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-69: mermaid-slide-helpers cluster ensure (legacy Binding1592…QAe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCodeThemeTokensInit } from "./theme-tokens-impl";
import { ensureTextMeasureInit } from "./text-measure-impl";
import { ensureRunTextStyleInit } from "./run-style-impl";
import { ensureScratchSlideInit } from "./scratch-slide-impl";
import { ensureChartLikePluginsInit } from "./ensure-chart-like-plugins";
import { ensureFallbackPluginInit } from "./fallback-plugin-impl";
import { ensureStateGeometryInit } from "./state-geometry-impl";
import { ensureArrowGeometryInit } from "./arrow-geometry-impl";
import { ensureArrowEndsInit } from "./arrow-ends-impl";

/** Initialize the full Binding1592…QAe helper cluster. */
export const ensureMermaidSlideHelpersInit = esmInit(() => {
  ensureCodeThemeTokensInit();
  ensureTextMeasureInit();
  ensureRunTextStyleInit();
  ensureScratchSlideInit();
  ensureChartLikePluginsInit();
  ensureFallbackPluginInit();
  ensureStateGeometryInit();
  ensureArrowGeometryInit();
  ensureArrowEndsInit();
});
