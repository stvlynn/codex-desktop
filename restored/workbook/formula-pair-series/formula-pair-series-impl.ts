// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: flatten paired numeric series (legacy i4e/a4e/o4e).
// Stage-3 wave-132.

import { isArrayValue } from "../formula-array";

export function i4e(fpsIn6361: any, fpsIn6362: any) {
  let fpsBind16518 = a4e(fpsIn6361),
    fpsBind16519 = a4e(fpsIn6362),
    fpsBind16520 = Math.min(fpsBind16518.length, fpsBind16519.length),
    fpsBind16521 = [],
    fpsBind16522 = [];
  for (let fpsBind20747 = 0; fpsBind20747 < fpsBind16520; fpsBind20747 += 1) {
    let fpsBind21721 = o4e(fpsBind16518[fpsBind20747]),
      fpsBind21722 = o4e(fpsBind16519[fpsBind20747]);
    fpsBind21721 == null ||
      fpsBind21722 == null ||
      (fpsBind16521.push(fpsBind21721), fpsBind16522.push(fpsBind21722));
  }
  return {
    ys: fpsBind16521,
    xs: fpsBind16522,
  };
}
export function a4e(fpsIn5759: any) {
  if (Array.isArray(fpsIn5759)) {
    let fpsBind21877 = [];
    for (let fpsBind22760 of fpsIn5759)
      if (fpsBind22760)
        for (let fpsBind23058 of fpsBind22760)
          fpsBind21877.push(fpsBind23058 ?? null);
    return fpsBind21877;
  }
  if (fpsIn5759 !== undefined && isArrayValue(fpsIn5759)) {
    let fpsBind21444 = fpsIn5759,
      fpsBind21445 = [];
    for (let fpsBind22761 of fpsBind21444.values)
      for (let fpsBind23059 of fpsBind22761)
        fpsBind21445.push(fpsBind23059 ?? null);
    return fpsBind21445;
  }
  return fpsIn5759 === undefined ? [] : [fpsIn5759];
}
export function o4e(fpsIn6363: any) {
  if (fpsIn6363 == null) return null;
  if (typeof fpsIn6363 == "number")
    return Number.isFinite(fpsIn6363) ? fpsIn6363 : null;
  if (typeof fpsIn6363 == "string") {
    let fpsBind21112 = fpsIn6363.trim();
    if (fpsBind21112 === "") return null;
    let fpsBind21113 = Number(fpsBind21112);
    return Number.isFinite(fpsBind21113) ? fpsBind21113 : null;
  }
  return null;
}

export const pairNumericSeries = i4e;
export const flattenSeriesValues = a4e;
export const coerceSeriesNumber = o4e;
