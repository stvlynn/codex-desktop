// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: unit-interval / positive coerce (legacy helper908/909).
// Stage-3 wave-134.

import {
  workbookHelper904,
  workbookHelper907,
  ERR_NUM,
} from "./formula-ttest-coerce-impl";

/** Legacy v6e — upper bound for positive coerce. */
export const UNIT_INTERVAL_MAX = 1e10;

export function workbookHelper908(fvcIn8524: any, fvcIn8525: any) {
  let fvcBind19036 = workbookHelper904(fvcIn8524);
  if (typeof fvcBind19036 != "number") return fvcBind19036;
  let fvcBind19037 = fvcIn8525?.inclusiveZero
      ? fvcBind19036 >= 0
      : fvcBind19036 > 0,
    fvcBind19038 = fvcIn8525?.inclusiveOne
      ? fvcBind19036 <= 1
      : fvcBind19036 < 1;
  return !fvcBind19037 || !fvcBind19038 ? ERR_NUM : fvcBind19036;
}
export function workbookHelper909(fvcIn14975: any) {
  return workbookHelper907(fvcIn14975, {
    max: UNIT_INTERVAL_MAX,
  });
}
