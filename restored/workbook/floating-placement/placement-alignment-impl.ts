// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: floating placement horizontal alignment (legacy workbookHelper642).
// Stage-3 wave-137.

import { Jn } from "../presentation-protobuf";

/** Placement-type constant for floating (legacy Binding1273). */
export const FLOATING_PLACEMENT_TYPE = 1;

export function workbookHelper642(fpIn5559: any) {
  if (fpIn5559.placement?.type === FLOATING_PLACEMENT_TYPE)
    switch (fpIn5559.placement.horizontalAlignment?.trim().toLowerCase()) {
      case "center":
        return Jn.ALIGNMENT_TYPE_CENTER;
      case "right":
        return Jn.ALIGNMENT_TYPE_RIGHT;
      case "left":
        return Jn.ALIGNMENT_TYPE_LEFT;
      default:
        return;
    }
}
