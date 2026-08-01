// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: HOUR/MINUTE/SECOND/MONTH/YEAR/TIMEVALUE/WEEKDAY/NOW/TODAY (legacy l1e…b1e).
// Stage-3 wave-140.

import { coerceFormulaDate, excelDaysSinceEpoch } from "../formula-token-utils";
import { toExcelDate } from "../formula-scalar-funcs";
import { y2e, workbookBinding1842 } from "../formula-stats";

export function l1e(fdmIn12327: any) {
  return (
    (fdmIn12327 = coerceFormulaDate(fdmIn12327)),
    fdmIn12327 instanceof Error ? fdmIn12327 : fdmIn12327.getHours()
  );
}
export function d1e(fdmIn12213: any) {
  return (
    (fdmIn12213 = coerceFormulaDate(fdmIn12213)),
    fdmIn12213 instanceof Error ? fdmIn12213 : fdmIn12213.getMinutes()
  );
}
export function f1e(fdmIn12091: any) {
  return (
    (fdmIn12091 = coerceFormulaDate(fdmIn12091)),
    fdmIn12091 instanceof Error ? fdmIn12091 : fdmIn12091.getMonth() + 1
  );
}
export function p1e() {
  return workbookBinding1842 ? excelDaysSinceEpoch(new Date()) : new Date();
}
export function m1e(fdmIn12214: any) {
  return (
    (fdmIn12214 = coerceFormulaDate(fdmIn12214)),
    fdmIn12214 instanceof Error ? fdmIn12214 : fdmIn12214.getSeconds()
  );
}
export function g1e(fdmIn9359: any) {
  return (
    (fdmIn9359 = coerceFormulaDate(fdmIn9359)),
    fdmIn9359 instanceof Error
      ? fdmIn9359
      : (3600 * fdmIn9359.getHours() +
          60 * fdmIn9359.getMinutes() +
          fdmIn9359.getSeconds()) /
        86400
  );
}
export function _1e() {
  let fdmBind22579 = toExcelDate(new Date());
  return workbookBinding1842 ? excelDaysSinceEpoch(fdmBind22579) : fdmBind22579;
}
export function v1e(fdmIn10039: any, fdmIn10040: any) {
  if (
    ((fdmIn10039 = coerceFormulaDate(fdmIn10039)), fdmIn10039 instanceof Error)
  )
    return fdmIn10039;
  fdmIn10040 === undefined && (fdmIn10040 = 1);
  let fdmBind20520 = fdmIn10039.getDay();
  return y2e[fdmIn10040][fdmBind20520];
}
export function b1e(fdmIn12152: any) {
  return (
    (fdmIn12152 = coerceFormulaDate(fdmIn12152)),
    fdmIn12152 instanceof Error ? fdmIn12152 : fdmIn12152.getFullYear()
  );
}
