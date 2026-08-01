// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series length/variance helpers (legacy n4e/r4e/910/911).
// Stage-3 wave-138.

import { t4e } from "../formula-value-coerce";
import { i4e } from "../formula-pair-series";

export function n4e(femIn12328: any) {
  return t4e(femIn12328, {
    allowZero: true,
    allowNegative: false,
    min: 0,
  });
}
export function r4e(femIn11172: any, femIn11173: any) {
  let femBind21656 = i4e(femIn11172, femIn11173);
  return femBind21656.ys.length < 3 || femBind21656.xs.length < 3
    ? true
    : !workbookHelper910(femBind21656.xs);
}
export function workbookHelper910(femIn9834: any) {
  if (femIn9834.length === 0) return false;
  let femBind20375 = femIn9834[0];
  for (let femBind22679 = 1; femBind22679 < femIn9834.length; femBind22679 += 1)
    if (femIn9834[femBind22679] !== femBind20375) return true;
  return false;
}
export function workbookHelper911(
  femIn12033: any,
  femIn12034: any,
  femIn12035: any,
  ...femIn12036: any[]
) {
  return femIn12033(
    ...[femIn12034, femIn12035, ...femIn12036].filter(
      (item) => item !== undefined,
    ),
  );
}

/** Semantic alias: series values are not all identical (legacy bh910). */
export const hasVaryingSeriesValues = workbookHelper910;
/** Semantic alias: call fn with defined trailing args (legacy bh911). */
export const callWithDefinedArgs = workbookHelper911;
