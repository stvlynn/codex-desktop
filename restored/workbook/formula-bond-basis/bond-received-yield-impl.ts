// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel RECEIVED / YIELD wrappers (legacy lat/uat/dat/fat).
// Stage-3 wave-122.

import { fbbH } from "./boundary-hooks";
import {
  parseSettlementMaturity,
  isBondError,
  coerceBondNumber,
  bondDayCount,
  bondDaysInYear,
} from "./bond-basis-helpers-impl";
import { k0e } from "../formula-securities";
import { H0e } from "../formula-securities";

export function lat(
  fbrIn4151: any,
  fbrIn4152: any,
  fbrIn4153: any,
  fbrIn4154: any,
  fbrIn4155: any,
) {
  let fbrBind13155 = parseSettlementMaturity(fbrIn4151, fbrIn4152, fbrIn4155);
  if (isBondError(fbrBind13155)) return fbrBind13155;
  let fbrBind13156 = coerceBondNumber(fbrIn4153);
  if (typeof fbrBind13156 != "number") return fbrBind13156;
  let fbrBind13157 = coerceBondNumber(fbrIn4154);
  if (typeof fbrBind13157 != "number") return fbrBind13157;
  if (fbrBind13156 <= 0 || fbrBind13157 < 0) return fbbH.NUM_ERROR;
  let fbrBind13158 = bondDayCount(
    fbrBind13155.settlement,
    fbrBind13155.maturity,
    fbrBind13155.convention,
  );
  if (fbrBind13158 <= 0) return fbbH.NUM_ERROR;
  let fbrBind13159 = bondDaysInYear(
      fbrBind13155.convention,
      fbrBind13155.settlement,
    ),
    fbrBind13160 = (fbrBind13157 * fbrBind13158) / fbrBind13159;
  if (fbrBind13160 >= 1) return fbbH.NUM_ERROR;
  let fbrBind13161 = fbrBind13156 / (1 - fbrBind13160);
  return Number.isFinite(fbrBind13161) ? fbrBind13161 : fbbH.NUM_ERROR;
}
export function uat(
  fbrIn13887: any,
  fbrIn13888: any,
  fbrIn13889: any,
  fbrIn13890: any,
  fbrIn13891: any,
) {
  return k0e(fbrIn13887, fbrIn13888, fbrIn13889, fbrIn13890, fbrIn13891);
}
export function dat(
  fbrIn13892: any,
  fbrIn13893: any,
  fbrIn13894: any,
  fbrIn13895: any,
  fbrIn13896: any,
) {
  return H0e(fbrIn13892, fbrIn13893, fbrIn13894, fbrIn13895, fbrIn13896);
}
export function fat(
  fbrIn4545: any,
  fbrIn4546: any,
  fbrIn4547: any,
  fbrIn4548: any,
  fbrIn4549: any,
) {
  let fbrBind13817 = parseSettlementMaturity(fbrIn4545, fbrIn4546, fbrIn4549);
  if (isBondError(fbrBind13817)) return fbrBind13817;
  let fbrBind13818 = coerceBondNumber(fbrIn4547);
  if (typeof fbrBind13818 != "number") return fbrBind13818;
  let fbrBind13819 = coerceBondNumber(fbrIn4548);
  if (typeof fbrBind13819 != "number") return fbrBind13819;
  if (fbrBind13818 <= 0 || fbrBind13819 <= 0) return fbbH.NUM_ERROR;
  let fbrBind13820 = bondDayCount(
    fbrBind13817.settlement,
    fbrBind13817.maturity,
    fbrBind13817.convention,
  );
  if (fbrBind13820 <= 0) return fbbH.NUM_ERROR;
  let fbrBind13821 = bondDaysInYear(
      fbrBind13817.convention,
      fbrBind13817.settlement,
    ),
    fbrBind13822 =
      ((fbrBind13819 - fbrBind13818) / fbrBind13818) *
      (fbrBind13821 / fbrBind13820);
  return Number.isFinite(fbrBind13822) ? fbrBind13822 : fbbH.NUM_ERROR;
}
