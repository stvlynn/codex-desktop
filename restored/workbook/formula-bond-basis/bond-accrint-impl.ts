// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel ACCRINT-family (legacy oat/sat). Stage-3 wave-121.

import { fbbH } from "./boundary-hooks";
import {
  parseSettlementMaturity,
  Gat,
  $8,
  Kat,
  coerceBondNumber,
  coerceBondDate,
  qat,
  Jat,
  bondDayCount,
  bondDaysInYear,
  unwrapBondArg,
  Yat,
  Xat,
  Zat,
  Qat,
  $at,
  eot,
  tot,
  isBondError,
  isFormulaLambda,
} from "./bond-basis-helpers-impl";

export function oat(
  fbbIn3204: any,
  fbbIn3205: any,
  fbbIn3206: any,
  fbbIn3207: any,
  fbbIn3208: any,
  fbbIn3209: any,
) {
  let fbbBind11371 = Kat(fbbIn3204, fbbIn3205, fbbIn3206, fbbIn3209);
  if (isBondError(fbbBind11371)) return fbbBind11371;
  let fbbBind11372 = coerceBondNumber(fbbIn3207);
  if (typeof fbbBind11372 != "number") return fbbBind11372;
  let fbbBind11373 = coerceBondNumber(fbbIn3208);
  if (typeof fbbBind11373 != "number") return fbbBind11373;
  if (fbbBind11372 < 0 || fbbBind11373 < 0) return fbbH.NUM_ERROR;
  let fbbBind11374 = bondDayCount(
      fbbBind11371.settlement,
      fbbBind11371.maturity,
      fbbBind11371.convention,
    ),
    fbbBind11375 = bondDayCount(
      fbbBind11371.issue,
      fbbBind11371.maturity,
      fbbBind11371.convention,
    );
  if (fbbBind11374 <= 0 || fbbBind11375 <= 0) return fbbH.NUM_ERROR;
  let fbbBind11376 = bondDaysInYear(
      fbbBind11371.convention,
      fbbBind11371.settlement,
    ),
    fbbBind11377 = bondDaysInYear(fbbBind11371.convention, fbbBind11371.issue),
    fbbBind11378 = 100 + (fbbBind11372 * 100 * fbbBind11375) / fbbBind11377,
    fbbBind11379 = 1 + (fbbBind11373 * fbbBind11374) / fbbBind11376;
  if (fbbBind11379 <= 0) return fbbH.NUM_ERROR;
  let fbbBind11380 = fbbBind11378 / fbbBind11379;
  return Number.isFinite(fbbBind11380) ? fbbBind11380 : fbbH.NUM_ERROR;
}
export function sat(
  fbbIn3028: any,
  fbbIn3029: any,
  fbbIn3030: any,
  fbbIn3031: any,
  fbbIn3032: any,
  fbbIn3033: any,
) {
  let fbbBind11066 = Kat(fbbIn3028, fbbIn3029, fbbIn3030, fbbIn3033);
  if (isBondError(fbbBind11066)) return fbbBind11066;
  let fbbBind11067 = coerceBondNumber(fbbIn3031);
  if (typeof fbbBind11067 != "number") return fbbBind11067;
  let fbbBind11068 = coerceBondNumber(fbbIn3032);
  if (typeof fbbBind11068 != "number") return fbbBind11068;
  if (fbbBind11068 <= 0 || fbbBind11067 < 0) return fbbH.NUM_ERROR;
  let fbbBind11069 = bondDayCount(
      fbbBind11066.settlement,
      fbbBind11066.maturity,
      fbbBind11066.convention,
    ),
    fbbBind11070 = bondDayCount(
      fbbBind11066.issue,
      fbbBind11066.maturity,
      fbbBind11066.convention,
    );
  if (fbbBind11069 <= 0 || fbbBind11070 <= 0) return fbbH.NUM_ERROR;
  let fbbBind11071 = bondDaysInYear(
      fbbBind11066.convention,
      fbbBind11066.settlement,
    ),
    fbbBind11072 = bondDaysInYear(fbbBind11066.convention, fbbBind11066.issue),
    fbbBind11073 = 100 + (fbbBind11067 * 100 * fbbBind11070) / fbbBind11072;
  if (fbbBind11073 <= 0) return fbbH.NUM_ERROR;
  let fbbBind11074 = fbbBind11073 / fbbBind11068;
  if (fbbBind11074 <= 0) return fbbH.NUM_ERROR;
  let fbbBind11075 = (fbbBind11074 - 1) * (fbbBind11071 / fbbBind11069);
  return Number.isFinite(fbbBind11075) ? fbbBind11075 : fbbH.NUM_ERROR;
}
