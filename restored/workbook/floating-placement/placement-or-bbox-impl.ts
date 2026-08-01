// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: floating placement with bbox fallback (legacy MTe).
// Stage-3 wave-124.

import { workbookGt } from "../text-style";
import { resolveFloatingPlacement } from "./floating-placement-impl";

export function resolvePlacementOrBBox(
  fpIn4489: any,
  fpIn4490: any,
  fpIn4491: any,
  fpIn4492: any,
) {
  let fpBind13734 = resolveFloatingPlacement(
    fpIn4489,
    fpIn4490,
    fpIn4491,
    fpIn4492,
  );
  if (fpBind13734) return fpBind13734;
  let fpBind13735 =
      fpIn4489.bbox?.widthEmu === undefined
        ? undefined
        : fpIn4489.bbox.widthEmu * workbookGt,
    fpBind13736 =
      fpIn4489.bbox?.heightEmu === undefined
        ? undefined
        : fpIn4489.bbox.heightEmu * workbookGt;
  if (
    !(
      fpBind13735 === undefined ||
      fpBind13736 === undefined ||
      fpBind13735 <= 0 ||
      fpBind13736 <= 0
    )
  )
    return {
      xPx: fpIn4491.xPx + (fpIn4489.bbox?.xEmu ?? 0) * workbookGt,
      yPx: fpIn4491.yPx + (fpIn4489.bbox?.yEmu ?? 0) * workbookGt,
      widthPx: fpBind13735,
      heightPx: fpBind13736,
    };
}

/** Legacy alias (wave-124). */
export const MTe = resolvePlacementOrBBox;
