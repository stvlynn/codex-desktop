// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: complex sum (i0e) + reciprocal/abs gate (a0e).
// Stage-3 wave-136.

import { workbookBinding1835 } from "../formula-stats";
import { complexReal, $4 } from "./formula-complex-impl";
import { formatComplexPair, complexDivide } from "./complex-divide-impl";
import { workbookHelper891, workbookHelper894 } from "./complex-trig-impl";
import { flattenFormulaArgs, hasFormulaError } from "../formula-token-utils";

export function i0e() {
  if (!arguments.length) return workbookBinding1835;
  let fcxBind17637 = flattenFormulaArgs(arguments),
    fcxBind17638 = 0,
    fcxBind17639 = 0;
  for (let fcxBind21417 of fcxBind17637) {
    let fcxBind21971 = +complexReal(fcxBind21417),
      fcxBind21972 = +$4(fcxBind21417);
    if (hasFormulaError(fcxBind21971, fcxBind21972)) return workbookBinding1835;
    fcxBind17638 += fcxBind21971;
    fcxBind17639 += fcxBind21972;
  }
  return formatComplexPair(fcxBind17638, fcxBind17639, "i");
}
export function a0e(fcxIn11767: any) {
  return fcxIn11767 === true ||
    fcxIn11767 === false ||
    hasFormulaError(complexReal(fcxIn11767), $4(fcxIn11767))
    ? workbookBinding1835
    : complexDivide(
        workbookHelper894(fcxIn11767),
        workbookHelper891(fcxIn11767),
      );
}
