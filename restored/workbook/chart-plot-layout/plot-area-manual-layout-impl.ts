// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize chart plotArea manualLayout VO (legacy bSe).
// Stage-3 wave-123. Contiguous coerceManualLayoutFraction owned; previously unused in boundary.

import {
  layoutTargetProtoToName,
  layoutModeProtoToName,
} from "../chart-proto-name-maps";

export function coerceManualLayoutFraction(cplmIn12189: any) {
  return typeof cplmIn12189 == "number" && Number.isFinite(cplmIn12189)
    ? cplmIn12189
    : undefined;
}
export function normalizePlotAreaManualLayout(cplmIn3335: any) {
  let cplmBind11650 = cplmIn3335.plotAreaManualLayout;
  if (!cplmBind11650) return;
  let cplmBind11651 = {
    target:
      cplmBind11650.layoutTarget === undefined
        ? "outer"
        : (layoutTargetProtoToName[cplmBind11650.layoutTarget] ?? "outer"),
    xMode:
      cplmBind11650.xMode === undefined
        ? undefined
        : layoutModeProtoToName[cplmBind11650.xMode],
    yMode:
      cplmBind11650.yMode === undefined
        ? undefined
        : layoutModeProtoToName[cplmBind11650.yMode],
    wMode:
      cplmBind11650.wMode === undefined
        ? undefined
        : layoutModeProtoToName[cplmBind11650.wMode],
    hMode:
      cplmBind11650.hMode === undefined
        ? undefined
        : layoutModeProtoToName[cplmBind11650.hMode],
    x: coerceManualLayoutFraction(cplmBind11650.x),
    y: coerceManualLayoutFraction(cplmBind11650.y),
    w: coerceManualLayoutFraction(cplmBind11650.w),
    h: coerceManualLayoutFraction(cplmBind11650.h),
  };
  return cplmBind11651.x !== undefined ||
    cplmBind11651.y !== undefined ||
    cplmBind11651.w !== undefined ||
    cplmBind11651.h !== undefined
    ? cplmBind11651
    : undefined;
}

/** Legacy alias (wave-123). */
export const bSe = normalizePlotAreaManualLayout;
