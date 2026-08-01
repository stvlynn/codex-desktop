// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: PV/IPMT Decimal + bond PRICE/YIELD wrappers.
// Legacy Uat/Kit/Wat/gat/_at. Stage-3 wave-127.

import workbookDecimal from "../../vendor/decimal";
import { fbbH } from "./boundary-hooks";
import {
  coerceBondDate,
  coerceBondNumber,
  isBondError,
  Jat,
  qat,
  tot,
} from "./bond-basis-helpers-impl";

export function presentValue(
  fbpIn5227: any,
  fbpIn5228: any,
  fbpIn5229: any,
  fbpIn5230: any,
  fbpIn5231: any,
) {
  let fbpBind14787 = coerceBondNumber(fbpIn5227);
  if (typeof fbpBind14787 != "number") return fbpBind14787;
  let fbpBind14788 = coerceBondNumber(fbpIn5228);
  if (typeof fbpBind14788 != "number") return fbpBind14788;
  let fbpBind14789 = coerceBondNumber(fbpIn5229);
  if (typeof fbpBind14789 != "number") return fbpBind14789;
  let fbpBind14790 = fbpIn5230 === undefined ? 0 : coerceBondNumber(fbpIn5230);
  if (typeof fbpBind14790 != "number") return fbpBind14790;
  let fbpBind14791 = fbpIn5231 === undefined ? 0 : coerceBondNumber(fbpIn5231);
  return typeof fbpBind14791 == "number"
    ? computePvAnnuity(
        fbpBind14787,
        fbpBind14788,
        fbpBind14789,
        fbpBind14790,
        fbpBind14791,
      )
    : fbpBind14791;
}
export function bondPrice(
  fbpIn6709: any,
  fbpIn6710: any,
  fbpIn6711: any,
  fbpIn6712: any,
  fbpIn6713: any,
  fbpIn6714: any,
  fbpIn6715: any,
) {
  let fbpBind17007 = parseBondPriceArgs(
    fbpIn6709,
    fbpIn6710,
    fbpIn6711,
    fbpIn6713,
    fbpIn6714,
    fbpIn6715,
  );
  if (isBondError(fbpBind17007)) return fbpBind17007;
  let fbpBind17008 = coerceBondNumber(fbpIn6712);
  if (typeof fbpBind17008 != "number") return fbpBind17008;
  try {
    let fbpBind22524 = fbbH
      .createBondCalculator(fbpBind17007)
      .price(fbpBind17008);
    return Number.isFinite(fbpBind22524) ? fbpBind22524 : fbbH.NUM_ERROR;
  } catch (fbpBind23066) {
    return tot(fbpBind23066);
  }
}
export function bondYield(
  fbpIn6271: any,
  fbpIn6272: any,
  fbpIn6273: any,
  fbpIn6274: any,
  fbpIn6275: any,
  fbpIn6276: any,
  fbpIn6277: any,
) {
  let fbpBind16382 = parseBondPriceArgs(
    fbpIn6271,
    fbpIn6272,
    fbpIn6273,
    fbpIn6275,
    fbpIn6276,
    fbpIn6277,
  );
  if (isBondError(fbpBind16382)) return fbpBind16382;
  let fbpBind16383 = coerceBondNumber(fbpIn6274);
  if (typeof fbpBind16383 != "number") return fbpBind16383;
  if (fbpBind16383 <= 0) return fbbH.NUM_ERROR;
  try {
    let fbpBind22525 = fbbH
      .createBondCalculator(fbpBind16382)
      .yield(fbpBind16383);
    return Number.isFinite(fbpBind22525) ? fbpBind22525 : fbbH.NUM_ERROR;
  } catch (fbpBind23067) {
    return tot(fbpBind23067);
  }
}
export function computePvAnnuity(
  fbpIn5232: any,
  fbpIn5233: any,
  fbpIn5234: any,
  fbpIn5235: any,
  fbpIn5236: any,
) {
  let fbpBind14792 = new workbookDecimal(fbpIn5232),
    fbpBind14793 = new workbookDecimal(fbpIn5233),
    fbpBind14794 = new workbookDecimal(fbpIn5234),
    fbpBind14795 = new workbookDecimal(fbpIn5235),
    fbpBind14796 = new workbookDecimal(fbpIn5236),
    fbpBind14797 = new workbookDecimal(1);
  if (fbpBind14792.isZero())
    return fbpBind14794.neg().minus(fbpBind14795).div(fbpBind14793).toNumber();
  let fbpBind14798 = fbpBind14797.add(fbpBind14792).pow(fbpBind14793),
    fbpBind14799 = fbpBind14792.mul(
      fbpBind14795.add(fbpBind14798.mul(fbpBind14794)),
    ),
    fbpBind14800 = fbpBind14798.sub(fbpBind14797);
  return fbpBind14799
    .div(fbpBind14797.add(fbpBind14792.mul(fbpBind14796)))
    .div(fbpBind14800)
    .neg()
    .toNumber();
}
export function parseBondPriceArgs(
  fbpIn3426: any,
  fbpIn3427: any,
  fbpIn3428: any,
  fbpIn3429: any,
  fbpIn3430: any,
  fbpIn3431: any,
) {
  let fbpBind11843 = coerceBondDate(fbpIn3426);
  if (isBondError(fbpBind11843)) return fbpBind11843;
  let fbpBind11844 = coerceBondDate(fbpIn3427);
  if (isBondError(fbpBind11844)) return fbpBind11844;
  let fbpBind11845 = coerceBondNumber(fbpIn3428);
  if (typeof fbpBind11845 != "number") return fbpBind11845;
  let fbpBind11846 = coerceBondNumber(fbpIn3429);
  if (typeof fbpBind11846 != "number") return fbpBind11846;
  if (fbpBind11846 <= 0) return fbbH.NUM_ERROR;
  let fbpBind11847 = Jat(fbpIn3430);
  if (isBondError(fbpBind11847)) return fbpBind11847;
  let fbpBind11848 = qat(fbpIn3431);
  return isBondError(fbpBind11848)
    ? fbpBind11848
    : fbpBind11843.getTime() >= fbpBind11844.getTime()
      ? fbbH.NUM_ERROR
      : {
          settlement: fbpBind11843,
          maturity: fbpBind11844,
          rate: fbpBind11845,
          redemption: fbpBind11846,
          frequency: fbpBind11847,
          convention: fbpBind11848,
        };
}

export const Uat = computePvAnnuity;
export const Kit = presentValue;
export const Wat = parseBondPriceArgs;
export const gat = bondPrice;
export const _at = bondYield;
