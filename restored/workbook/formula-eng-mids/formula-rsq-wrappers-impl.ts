// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: RSQ/PEARSON/thin series wrappers (legacy w4e/I4e…U4e).
// Stage-3 wave-138.

import { firstArrayError } from "../formula-criteria-shape";
import { flattenNestedCellArgs } from "../formula-averageif";
import { i4e } from "../formula-pair-series";
import { AQe, LQe, MQe, sQe, fQe, mQe, gQe } from "../formula-scalar-funcs";
import {
  r4e,
  hasVaryingSeriesValues,
  callWithDefinedArgs,
} from "./formula-series-utils-impl";

/** Legacy Binding1875 — #DIV/0! error token. */
const ERR_DIV0 = { kind: "Error", code: "#DIV/0!" } as const;

export function w4e(femIn9750: any, femIn9751: any, ...femIn9752: any[]) {
  let femBind20279 = flattenNestedCellArgs(
      [femIn9750, femIn9751, ...femIn9752].filter((item) => item !== undefined),
    ),
    femBind20280 = 0;
  for (let femBind23018 of femBind20279)
    femBind23018 !== null && (femBind20280 += 1);
  return femBind20280;
}
export function I4e(femIn8832: any, femIn8833: any) {
  let femBind19378 = firstArrayError([femIn8832, femIn8833]);
  if (femBind19378) return femBind19378;
  let femBind19379 = i4e(femIn8832, femIn8833);
  return femBind19379.ys.length < 2 ||
    femBind19379.xs.length < 2 ||
    !hasVaryingSeriesValues(femBind19379.ys) ||
    !hasVaryingSeriesValues(femBind19379.xs)
    ? ERR_DIV0
    : AQe(femIn8832, femIn8833);
}
export function L4e(femIn12768: any, femIn12769: any) {
  return (
    firstArrayError([femIn12768, femIn12769]) ||
    (r4e(femIn12768, femIn12769) ? ERR_DIV0 : LQe(femIn12768, femIn12769))
  );
}
export function R4e(femIn14242: any, femIn14243: any) {
  return (
    firstArrayError([femIn14242, femIn14243]) || MQe(femIn14242, femIn14243)
  );
}
export function B4e(femIn14058: any, femIn14059: any, ...femIn14060: any[]) {
  return callWithDefinedArgs(sQe, femIn14058, femIn14059, ...femIn14060);
}
export function V4e(femIn14061: any, femIn14062: any, ...femIn14063: any[]) {
  return callWithDefinedArgs(fQe, femIn14061, femIn14062, ...femIn14063);
}
export function H4e(femIn14064: any, femIn14065: any, ...femIn14066: any[]) {
  return callWithDefinedArgs(mQe, femIn14064, femIn14065, ...femIn14066);
}
export function U4e(femIn14067: any, femIn14068: any, ...femIn14069: any[]) {
  return callWithDefinedArgs(gQe, femIn14067, femIn14068, ...femIn14069);
}
