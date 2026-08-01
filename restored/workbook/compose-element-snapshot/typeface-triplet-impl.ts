// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: optional typeface triplet from theme fonts (legacy workbookHelper680).
// Stage-3 wave-137.

import { trimNonEmpty } from "./layout-blob-impl";

export function workbookHelper680(cesIn6702: any) {
  if (!cesIn6702) return;
  let cesBind16999 = {
    latinTypeface: trimNonEmpty(cesIn6702.latinTypeface),
    eastAsianTypeface: trimNonEmpty(cesIn6702.eastAsianTypeface),
    complexScriptTypeface: trimNonEmpty(cesIn6702.complexScriptTypeface),
  };
  return Object.values(cesBind16999).some((item) => item !== undefined)
    ? cesBind16999
    : undefined;
}
/** Compat alias for barrels. */
export const workbookFn680 = workbookHelper680;
