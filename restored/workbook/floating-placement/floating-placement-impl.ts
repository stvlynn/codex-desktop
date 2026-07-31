// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolve floating element placement rect (legacy jTe).
// Stage-3 wave-105.

import { Jn, Yn } from "../presentation-protobuf";
import { workbookGt as EMU_TO_CSS_PX } from "../text-style";
import { fpH } from "./boundary-hooks";

void Jn;
void Yn;
void EMU_TO_CSS_PX;
void fpH;

export function resolveFloatingPlacement(fpIn1412: any, fpIn1413: any, fpIn1414: any, fpIn1415: any, ) {
  if (fpIn1412.placement?.type !== fpH.floatingPlacementType) return;
  let fpBind7243 =
      fpIn1412.bbox?.widthEmu === undefined
        ? undefined
        : fpIn1412.bbox.widthEmu * EMU_TO_CSS_PX,
    fpBind7244 =
      fpIn1412.bbox?.heightEmu === undefined
        ? undefined
        : fpIn1412.bbox.heightEmu * EMU_TO_CSS_PX;
  if (
    fpBind7243 === undefined ||
    fpBind7244 === undefined ||
    fpBind7243 <= 0 ||
    fpBind7244 <= 0
  )
    return;
  let fpBind7245 = fpIn1414.xPx + fpIn1415.left,
    fpBind7246 = fpIn1414.yPx + fpIn1415.top,
    fpBind7247 = Math.max(
      0,
      fpIn1414.widthPx -
        fpIn1415.left -
        fpIn1415.right,
    ),
    fpBind7248 = Math.max(
      0,
      fpIn1414.heightPx -
        fpIn1415.top -
        fpIn1415.bottom,
    ),
    fpBind7249 = fpIn1412.placement.anchorParagraphId,
    fpBind7250 = fpH.paragraphAlignment(fpIn1413, fpBind7249),
    fpBind7251 =
      fpBind7250 ?? fpH.bh642(fpIn1412),
    fpBind7252 = fpH.bh640(fpIn1413.anchor),
    fpBind7253 = fpBind7245;
  fpBind7251 === Jn.ALIGNMENT_TYPE_CENTER
    ? (fpBind7253 += Math.max(
        0,
        (fpBind7247 - fpBind7243) / 2,
      ))
    : fpBind7251 === Jn.ALIGNMENT_TYPE_RIGHT &&
      (fpBind7253 += Math.max(
        0,
        fpBind7247 - fpBind7243,
      ));
  let fpBind7254 = fpBind7246;
  fpBind7252 === Yn.ANCHOR_TYPE_MIDDLE
    ? (fpBind7254 += Math.max(
        0,
        (fpBind7248 - fpBind7244) / 2,
      ))
    : fpBind7252 === Yn.ANCHOR_TYPE_BOTTOM
      ? (fpBind7254 += Math.max(
          0,
          fpBind7248 - fpBind7244,
        ))
      : fpBind7250 === Jn.ALIGNMENT_TYPE_CENTER &&
        fpH.isParagraphVCenter(fpIn1413, fpBind7249) &&
        (fpBind7254 += Math.max(
          0,
          (fpBind7248 - fpBind7244) / 2,
        ));
  let fpBind7255 =
      fpBind7245 +
      Math.max(0, fpBind7247 - fpBind7243),
    fpBind7256 =
      fpBind7246 +
      Math.max(0, fpBind7248 - fpBind7244);
  return {
    xPx: Math.min(
      Math.max(fpBind7253, fpBind7245),
      fpBind7255,
    ),
    yPx: Math.min(
      Math.max(fpBind7254, fpBind7246),
      fpBind7256,
    ),
    widthPx: fpBind7243,
    heightPx: fpBind7244,
  };
}

/** Legacy alias. */
export const jTe = resolveFloatingPlacement;
