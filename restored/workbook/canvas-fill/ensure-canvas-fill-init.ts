// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: cluster ensure for canvas fill painters.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCanvasLineDashInit } from "./apply-line-dash";
import { ensureGradientBlendInit } from "./gradient-stops";
import { ensureLinearGradientFillInit } from "./linear-gradient-fill";
import { ensureRadialGradientFillInit } from "./radial-gradient-fill";
import { ensurePatternTilePaintersInit } from "./pattern-tile-painters";
import { ensurePatternFillResolveInit } from "./pattern-fill-resolve";

/** Touch the full canvas-fill dependency cluster once. */
export const ensureCanvasFillClusterInit = esmInit(() => {
  ensureCanvasLineDashInit();
  ensureGradientBlendInit();
  ensureLinearGradientFillInit();
  ensureRadialGradientFillInit();
  ensurePatternTilePaintersInit();
  ensurePatternFillResolveInit();
});
