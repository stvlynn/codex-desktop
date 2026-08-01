// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: EOMONTH/HEX/BIN/OCT bit ops + TIME (legacy c1e/h1e/E1e…c0e).
// Stage-3 wave-135b.

import {
  coerceFormulaDate as workbookFn848,
  flattenMatrixArgs as workbookFn849,
  hasFormulaError as workbookFn846,
  excelDaysSinceEpoch as workbookFn835,
} from "../formula-token-utils";
import {
  workbookBinding1835,
  workbookBinding1838,
  workbookBinding1842,
} from "../formula-stats";
import { padStartRepeat } from "../formula-scalar-funcs";

export function c1e(femIn7988: any, femIn7989: any) {
  if (((femIn7988 = workbookFn848(femIn7988)), femIn7988 instanceof Error))
    return femIn7988;
  if (isNaN(femIn7989)) return workbookBinding1835;
  femIn7989 = parseInt(femIn7989, 10);
  let femBind18473 = new Date(
    femIn7988.getFullYear(),
    femIn7988.getMonth() + femIn7989 + 1,
    0,
  );
  return workbookBinding1842 ? workbookFn835(femBind18473) : femBind18473;
}
export function h1e(femIn8240: any, femIn8241: any, femIn8242: any) {
  return (
    (femIn8240 = workbookFn849(femIn8240)),
    (femIn8241 = workbookFn849(femIn8241)),
    (femIn8242 = workbookFn849(femIn8242)),
    workbookFn846(femIn8240, femIn8241, femIn8242)
      ? workbookBinding1835
      : femIn8240 < 0 || femIn8241 < 0 || femIn8242 < 0
        ? workbookBinding1838
        : (3600 * femIn8240 + 60 * femIn8241 + femIn8242) / 86400
  );
}
export function workbookFn885(femIn14740: any) {
  return /^[01]{1,10}$/.test(femIn14740);
}
export function E1e(femIn4849: any, femIn4850: any) {
  if (!workbookFn885(femIn4849)) return workbookBinding1838;
  let n = femIn4849.toString();
  if (n.length === 10 && n.substring(0, 1) === "1")
    return (0xfffffffe00 + parseInt(n.substring(1), 2)).toString(16);
  let r = parseInt(femIn4849, 2).toString(16);
  return femIn4850 === undefined
    ? r
    : isNaN(femIn4850)
      ? workbookBinding1835
      : femIn4850 < 0
        ? workbookBinding1838
        : ((femIn4850 = Math.floor(femIn4850)),
          femIn4850 >= r.length
            ? padStartRepeat("0", femIn4850 - r.length) + r
            : workbookBinding1838);
}
export function D1e(femIn4881: any, femIn4882: any) {
  if (!workbookFn885(femIn4881)) return workbookBinding1838;
  let n = femIn4881.toString();
  if (n.length === 10 && n.substring(0, 1) === "1")
    return (1073741312 + parseInt(n.substring(1), 2)).toString(8);
  let r = parseInt(femIn4881, 2).toString(8);
  return femIn4882 === undefined
    ? r
    : isNaN(femIn4882)
      ? workbookBinding1835
      : femIn4882 < 0
        ? workbookBinding1838
        : ((femIn4882 = Math.floor(femIn4882)),
          femIn4882 >= r.length
            ? padStartRepeat("0", femIn4882 - r.length) + r
            : workbookBinding1838);
}
export function O1e(femIn6346: any, femIn6347: any) {
  return (
    (femIn6346 = workbookFn849(femIn6346)),
    (femIn6347 = workbookFn849(femIn6347)),
    workbookFn846(femIn6346, femIn6347)
      ? workbookBinding1835
      : femIn6346 < 0 ||
          femIn6347 < 0 ||
          Math.floor(femIn6346) !== femIn6346 ||
          Math.floor(femIn6347) !== femIn6347 ||
          femIn6346 > 0xffffffffffff ||
          femIn6347 > 0xffffffffffff
        ? workbookBinding1838
        : femIn6346 & femIn6347
  );
}
export function k1e(femIn7265: any, femIn7266: any) {
  return (
    (femIn7265 = workbookFn849(femIn7265)),
    (femIn7266 = workbookFn849(femIn7266)),
    workbookFn846(femIn7265, femIn7266)
      ? workbookBinding1835
      : femIn7265 < 0 ||
          Math.floor(femIn7265) !== femIn7265 ||
          femIn7265 > 0xffffffffffff ||
          Math.abs(femIn7266) > 53
        ? workbookBinding1838
        : femIn7266 >= 0
          ? femIn7265 << femIn7266
          : femIn7265 >> -femIn7266
  );
}
export function A1e(femIn6348: any, femIn6349: any) {
  return (
    (femIn6348 = workbookFn849(femIn6348)),
    (femIn6349 = workbookFn849(femIn6349)),
    workbookFn846(femIn6348, femIn6349)
      ? workbookBinding1835
      : femIn6348 < 0 ||
          femIn6349 < 0 ||
          Math.floor(femIn6348) !== femIn6348 ||
          Math.floor(femIn6349) !== femIn6349 ||
          femIn6348 > 0xffffffffffff ||
          femIn6349 > 0xffffffffffff
        ? workbookBinding1838
        : femIn6348 | femIn6349
  );
}
export function j1e(femIn7267: any, femIn7268: any) {
  return (
    (femIn7267 = workbookFn849(femIn7267)),
    (femIn7268 = workbookFn849(femIn7268)),
    workbookFn846(femIn7267, femIn7268)
      ? workbookBinding1835
      : femIn7267 < 0 ||
          Math.floor(femIn7267) !== femIn7267 ||
          femIn7267 > 0xffffffffffff ||
          Math.abs(femIn7268) > 53
        ? workbookBinding1838
        : femIn7268 >= 0
          ? femIn7267 >> femIn7268
          : femIn7267 << -femIn7268
  );
}
export function M1e(femIn6350: any, femIn6351: any) {
  return (
    (femIn6350 = workbookFn849(femIn6350)),
    (femIn6351 = workbookFn849(femIn6351)),
    workbookFn846(femIn6350, femIn6351)
      ? workbookBinding1835
      : femIn6350 < 0 ||
          femIn6351 < 0 ||
          Math.floor(femIn6350) !== femIn6350 ||
          Math.floor(femIn6351) !== femIn6351 ||
          femIn6350 > 0xffffffffffff ||
          femIn6351 > 0xffffffffffff
        ? workbookBinding1838
        : femIn6350 ^ femIn6351
  );
}
export function c0e(femIn5443: any, femIn5444: any) {
  if (!/^[0-7]{1,10}$/.test(femIn5443)) return workbookBinding1838;
  let femBind15215 = parseInt(femIn5443, 8);
  if (femBind15215 >= 536870912)
    return "ff" + (femBind15215 + 3221225472).toString(16);
  let r = femBind15215.toString(16);
  return femIn5444 === undefined
    ? r
    : isNaN(femIn5444)
      ? workbookBinding1835
      : femIn5444 < 0
        ? workbookBinding1838
        : ((femIn5444 = Math.floor(femIn5444)),
          femIn5444 >= r.length
            ? padStartRepeat("0", femIn5444 - r.length) + r
            : workbookBinding1838);
}
/** Compat alias for barrels. */
export const workbookHelper885 = workbookFn885;
