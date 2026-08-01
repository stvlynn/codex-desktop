// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: non-stacked grouping + visible category count / gap ratio
// (legacy vye / workbookHelper395 / workbookHelper396).
// Stage-3 wave-137.

import { Yn } from "../presentation-protobuf";
import { workbookHelper393 } from "./series-overlap-offset-impl";

export function vye(cgsIn11360: any) {
  return (
    cgsIn11360 !== Yn.BAR_GROUPING_STACKED &&
    cgsIn11360 !== Yn.BAR_GROUPING_PERCENT_STACKED
  );
}
export function workbookHelper395(cgsIn10426: any, cgsIn10427: any) {
  if (!cgsIn10427 || cgsIn10427.size === 0) return cgsIn10426;
  let cgsBind20899 = 0;
  for (let cgsBind22974 = 0; cgsBind22974 < cgsIn10426; cgsBind22974++)
    cgsIn10427.has(cgsBind22974) || cgsBind20899++;
  return cgsBind20899;
}
export function workbookHelper396(cgsIn6675: any) {
  let { gapWidth, grouping, seriesCount, overlap } = cgsIn6675,
    cgsBind16966 =
      (gapWidth !== undefined && Number.isFinite(gapWidth) && gapWidth >= 0
        ? gapWidth
        : 150) / 100;
  if (!vye(grouping)) return cgsBind16966 / (1 + cgsBind16966);
  let cgsBind16967 =
    cgsBind16966 *
    workbookHelper393(Math.max(1, Math.floor(seriesCount)), overlap);
  return cgsBind16967 / (1 + cgsBind16967);
}
/** Compat alias for barrels. */
export const workbookFn395 = workbookHelper395;
/** Compat alias for barrels. */
export const workbookFn396 = workbookHelper396;
