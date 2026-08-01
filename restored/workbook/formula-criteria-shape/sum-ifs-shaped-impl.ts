// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: SUMIFS shaped wrapper + criteria coerce (r3e/922/923).
// Stage-3 wave-126.

import { isArrayValue } from "../formula-array";
import { oQe } from "../formula-scalar-funcs";
import { f4e } from "./formula-criteria-shape-impl";

export function sumIfsShaped(
  fcsIn5433: any,
  fcsIn5434: any,
  ...fcsIn5435: any[]
) {
  let fcsBind15196 = [fcsIn5433];
  for (let fcsBind22891 = 0; fcsBind22891 < fcsIn5435.length; fcsBind22891 += 2)
    fcsBind15196.push(fcsIn5435[fcsBind22891]);
  let fcsBind15197 = f4e(fcsBind15196);
  if (fcsBind15197) return fcsBind15197;
  let fcsBind15198 = [
    coerceCriteriaMatrix(fcsIn5433),
    coerceCriteriaMatrix(fcsIn5434),
  ];
  for (
    let fcsBind20548 = 0;
    fcsBind20548 < fcsIn5435.length;
    fcsBind20548 += 2
  ) {
    let fcsBind21723 = fcsIn5435[fcsBind20548],
      fcsBind21724 = fcsIn5435[fcsBind20548 + 1];
    fcsBind15198.push(coerceCriteriaMatrix(fcsBind21723));
    fcsBind15198.push(
      fcsBind21724 === undefined
        ? undefined
        : coerceCriteriaMatrix(fcsBind21724),
    );
  }
  return oQe(fcsBind15198[0], fcsBind15198[1], ...fcsBind15198.slice(2));
}
export function coerceCriteriaMatrix(fcsIn6590: any) {
  if (Array.isArray(fcsIn6590))
    return fcsIn6590.map((item) =>
      item ? item.map((_item) => lowerStringOrPassthrough(_item) ?? null) : [],
    );
  if (fcsIn6590 === undefined) return;
  let fcsBind16853 = fcsIn6590;
  if (isArrayValue(fcsBind16853)) {
    let fcsBind22121 = fcsBind16853.values.map((item) =>
      item.map((_item) => lowerStringOrPassthrough(_item)),
    );
    return {
      ...fcsBind16853,
      values: fcsBind22121,
    };
  }
  return lowerStringOrPassthrough(fcsBind16853);
}
export function lowerStringOrPassthrough(fcsIn13021: any) {
  return typeof fcsIn13021 == "string" ? fcsIn13021.toLowerCase() : fcsIn13021;
}

/** Legacy aliases (wave-126). */
export const r3e = sumIfsShaped;
