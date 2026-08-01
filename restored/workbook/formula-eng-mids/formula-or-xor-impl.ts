// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: OR / XOR over flattened formula args (legacy i2e/o2e).
// Stage-3 wave-133.

import { flattenFormulaArgs } from "../formula-token-utils";
import { workbookBinding1835 } from "../formula-stats";

export function i2e() {
  let femBind16621 = flattenFormulaArgs(arguments),
    femBind16622 = workbookBinding1835;
  for (
    let femBind18435 = 0;
    femBind18435 < femBind16621.length;
    femBind18435++
  ) {
    if (femBind16621[femBind18435] instanceof Error)
      return femBind16621[femBind18435];
    femBind16621[femBind18435] === undefined ||
      femBind16621[femBind18435] === null ||
      typeof femBind16621[femBind18435] == "string" ||
      (femBind16622 === workbookBinding1835 && (femBind16622 = false),
      femBind16621[femBind18435] && (femBind16622 = true));
  }
  return femBind16622;
}
export function o2e() {
  let femBind15765 = flattenFormulaArgs(arguments),
    femBind15766 = workbookBinding1835;
  for (
    let femBind18631 = 0;
    femBind18631 < femBind15765.length;
    femBind18631++
  ) {
    if (femBind15765[femBind18631] instanceof Error)
      return femBind15765[femBind18631];
    femBind15765[femBind18631] === undefined ||
      femBind15765[femBind18631] === null ||
      typeof femBind15765[femBind18631] == "string" ||
      (femBind15766 === workbookBinding1835 && (femBind15766 = 0),
      femBind15765[femBind18631] && femBind15766++);
  }
  return femBind15766 === workbookBinding1835
    ? femBind15766
    : !!(Math.floor(Math.abs(femBind15766)) & 1);
}

export const formulaOrFromArgs = i2e;
export const formulaXorFromArgs = o2e;
