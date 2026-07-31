// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: text-element autofit deps ensure (legacy Hue).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFontMetricsInit } from "../font-metrics";
import { ensureGeometryTransformDepsInit } from "../geometry-transform";
import { ensurePresetShapeClusterInit } from "../preset-shape";
import { ensureStyleResolveInit } from "../text-style";
import { ensureTextBoxClusterInit } from "../text-box";

/** Legacy `Hue`. */
export const ensureTextElementAutofitInit = esmInit(() => {
  ensureTextBoxClusterInit();
  ensureFontMetricsInit();
  ensureStyleResolveInit();
  ensureGeometryTransformDepsInit();
  ensurePresetShapeClusterInit();
});
