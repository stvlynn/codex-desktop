// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: COUP* / ODDFPRICE wrappers (legacy wat/Eat/Dat/Oat/kat/Lat).
// Stage-3 wave-134 — Binding1900 via fbbH.couponNumPeriods hook.

import { fbbH } from "./boundary-hooks";
import { $8, Gat, isBondError, Zat } from "./bond-basis-helpers-impl";
import { C0e } from "../formula-financial";

export function wat(
  fbwIn11877: any,
  fbwIn11878: any,
  fbwIn11879: any,
  fbwIn11880: any,
) {
  let fbwBind22158 = $8(fbwIn11877, fbwIn11878, fbwIn11879, fbwIn11880);
  return isBondError(fbwBind22158) ? fbwBind22158 : fbwBind22158.accruedDays;
}
export function Eat(
  fbwIn11174: any,
  fbwIn11175: any,
  fbwIn11176: any,
  fbwIn11177: any,
) {
  let fbwBind21657 = $8(fbwIn11174, fbwIn11175, fbwIn11176, fbwIn11177);
  return isBondError(fbwBind21657)
    ? fbwBind21657
    : fbwBind21657.periodDays - fbwBind21657.accruedDays;
}
export function Dat(
  fbwIn11654: any,
  fbwIn11655: any,
  fbwIn11656: any,
  fbwIn11657: any,
) {
  let fbwBind22036 = $8(fbwIn11654, fbwIn11655, fbwIn11656, fbwIn11657);
  return isBondError(fbwBind22036)
    ? fbwBind22036
    : Zat(fbwBind22036.nextCoupon);
}
export function Oat(
  fbwIn9158: any,
  fbwIn9159: any,
  fbwIn9160: any,
  fbwIn9161: any,
) {
  let fbwBind19721 = Gat(fbwIn9158, fbwIn9159, fbwIn9160, fbwIn9161);
  if (isBondError(fbwBind19721)) return fbwBind19721;
  let fbwBind19722 = fbbH.couponNumPeriods(
    fbwBind19721.settlement,
    fbwBind19721.maturity,
    fbwBind19721.frequency,
  );
  return Number.isFinite(fbwBind19722) ? fbwBind19722 : fbbH.NUM_ERROR;
}
export function kat(
  fbwIn11497: any,
  fbwIn11498: any,
  fbwIn11499: any,
  fbwIn11500: any,
) {
  let fbwBind21910 = $8(fbwIn11497, fbwIn11498, fbwIn11499, fbwIn11500);
  return isBondError(fbwBind21910)
    ? fbwBind21910
    : Zat(fbwBind21910.previousCoupon);
}
export function Lat(
  fbwIn12770: any,
  fbwIn12771: any,
  fbwIn12772: any,
  fbwIn12773: any,
  fbwIn12774: any,
  fbwIn12775: any,
  fbwIn12776: any,
  fbwIn12777: any,
) {
  return C0e(
    fbwIn12770,
    fbwIn12771,
    fbwIn12772,
    fbwIn12773,
    fbwIn12774,
    fbwIn12775,
    fbwIn12776,
  );
}
