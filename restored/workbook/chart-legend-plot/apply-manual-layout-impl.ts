// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart manual layout rect (legacy helper455/456/458).
// Stage-3 wave-108.

import { clpH } from "./boundary-hooks";

void clpH;

export function layoutEdgeOffset(
  clpIn9561: any,
  clpIn9562: any,
  clpIn9563: any,
  clpIn9564: any,
  clpIn9565: any,
) {
  let clpBind20089 = clpH.bh453(clpIn9564);
  return clpBind20089 === undefined
    ? clpIn9563
    : clpIn9565 === clpH.LAYOUT_MODE_EDGE
      ? clpIn9561 + clpIn9562 * clpH.bh454(clpBind20089, 0, 1)
      : clpIn9563 + clpIn9562 * clpBind20089;
}
export function layoutSizeOffset(
  clpIn7974: any,
  clpIn7975: any,
  clpIn7976: any,
  clpIn7977: any,
  clpIn7978: any,
  clpIn7979: any,
) {
  let clpBind18458 = clpH.bh453(clpIn7978);
  if (clpBind18458 === undefined) return clpIn7977;
  if (clpIn7979 === clpH.LAYOUT_MODE_EDGE) {
    let clpBind22571 = clpIn7974 + clpIn7975 * clpH.bh454(clpBind18458, 0, 1);
    return Math.max(0, clpBind22571 - clpIn7976);
  }
  return clpIn7975 * clpH.bh454(clpBind18458, 0, 1);
}
export function applyManualLayout(
  clpIn4196: any,
  clpIn4197: any,
  clpIn4198: any,
) {
  let clpBind13239 = layoutEdgeOffset(
      clpIn4196.x,
      clpIn4196.width,
      clpIn4197.x,
      clpIn4198.x,
      clpIn4198.xMode,
    ),
    clpBind13240 = layoutEdgeOffset(
      clpIn4196.y,
      clpIn4196.height,
      clpIn4197.y,
      clpIn4198.y,
      clpIn4198.yMode,
    ),
    clpBind13241 = layoutSizeOffset(
      clpIn4196.x,
      clpIn4196.width,
      clpBind13239,
      clpIn4197.width,
      clpIn4198.w,
      clpIn4198.wMode,
    ),
    clpBind13242 = layoutSizeOffset(
      clpIn4196.y,
      clpIn4196.height,
      clpBind13240,
      clpIn4197.height,
      clpIn4198.h,
      clpIn4198.hMode,
    ),
    clpBind13243 = clpH.bh454(
      clpBind13239,
      clpIn4196.x,
      clpIn4196.x + clpIn4196.width,
    ),
    clpBind13244 = clpH.bh454(
      clpBind13240,
      clpIn4196.y,
      clpIn4196.y + clpIn4196.height,
    );
  return {
    x: clpBind13243,
    y: clpBind13244,
    width: Math.min(
      clpBind13241,
      Math.max(0, clpIn4196.x + clpIn4196.width - clpBind13243),
    ),
    height: Math.min(
      clpBind13242,
      Math.max(0, clpIn4196.y + clpIn4196.height - clpBind13244),
    ),
  };
}

/** Legacy aliases. */
export const workbookHelper455 = layoutEdgeOffset;
export const workbookHelper456 = layoutSizeOffset;
export const workbookHelper458 = applyManualLayout;
