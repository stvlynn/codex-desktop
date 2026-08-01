// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: canvas text line-height measure (legacy workbookHelper431).
// Stage-3 wave-137.

import { metricsFromBoundingBoxes } from "../font-metrics";

export function workbookHelper431(catIn10322: any, catIn10323: any) {
  let catBind20793 = metricsFromBoundingBoxes(
    catIn10322.measureText("H"),
    catIn10322.measureText("g"),
    catIn10323,
  );
  return Math.max(
    catIn10323,
    (catBind20793.ascentEm + catBind20793.descentEm) * catIn10323,
  );
}
