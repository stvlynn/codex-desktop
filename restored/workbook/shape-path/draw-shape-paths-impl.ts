// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint all shape paths with optional metrics (legacy workbookHelper608).
// Stage-3 wave-124.

import { evalPresetGuides } from "../preset-shape";
import { drawShapePath } from "./shape-path-impl";

export function drawShapePaths(
  dspIn5017: any,
  dspIn5018: any,
  {
    w: any,
    h: any,
    x: any = 0,
    y: any = 0,
    adjustments: any = {},
    fill: any = true,
    stroke: any = true,
    collectMetrics: any = false,
  }: any,
) {
  dspIn5017.save();
  dspIn5017.translate(x, y);
  let dspBind14467 = evalPresetGuides(dspIn5018, w, h, adjustments),
    dspBind14468 = [];
  for (let dspBind22238 of dspIn5018.paths) {
    let dspBind22676 = drawShapePath(
      dspIn5017,
      dspBind22238,
      dspBind14467,
      fill,
      stroke,
      collectMetrics,
    );
    collectMetrics && dspBind22676 && dspBind14468.push(dspBind22676);
  }
  return (dspIn5017.restore(), collectMetrics ? dspBind14468 : undefined);
}

/** Legacy alias (wave-124). */
export const workbookHelper608 = drawShapePaths;
