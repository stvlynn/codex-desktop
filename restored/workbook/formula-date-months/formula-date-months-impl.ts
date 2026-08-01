// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: month-step / coupon-day count helpers (legacy F9e/N9e/_9e).
// Stage-3 wave-128.

import { fdmH } from "./boundary-hooks";

export function monthsBetween(fdmIn9510: any, fdmIn9511: any, fdmIn9512: any) {
  let [fdmBind20020, fdmBind20021] = fdmH.fn932(
      fdmIn9512?.in,
      fdmIn9510,
      fdmIn9511,
    ),
    fdmBind20022 = fdmBind20020.getFullYear() - fdmBind20021.getFullYear(),
    fdmBind20023 = fdmBind20020.getMonth() - fdmBind20021.getMonth();
  return fdmBind20022 * 12 + fdmBind20023;
}
export function isSameMonthEnd(fdmIn12460: any, fdmIn12461: any) {
  let fdmBind22415 = fdmH.fn931(fdmIn12460, fdmIn12461?.in);
  return (
    +fdmH.A9e(fdmBind22415, fdmIn12461) == +fdmH.fn936(fdmBind22415, fdmIn12461)
  );
}
export function countMonthSteps(
  fdmIn5267: any,
  fdmIn5268: any,
  fdmIn5269: any,
) {
  let [fdmBind14843, fdmBind14844, fdmBind14845] = fdmH.fn932(
      fdmIn5269?.in,
      fdmIn5267,
      fdmIn5267,
      fdmIn5268,
    ),
    fdmBind14846 = fdmH.fn934(fdmBind14844, fdmBind14845),
    fdmBind14847 = Math.abs(monthsBetween(fdmBind14844, fdmBind14845));
  if (fdmBind14847 < 1) return 0;
  fdmBind14844.getMonth() === 1 &&
    fdmBind14844.getDate() > 27 &&
    fdmBind14844.setDate(30);
  fdmBind14844.setMonth(fdmBind14844.getMonth() - fdmBind14846 * fdmBind14847);
  let fdmBind14848 = fdmH.fn934(fdmBind14844, fdmBind14845) === -fdmBind14846;
  isSameMonthEnd(fdmBind14843) &&
    fdmBind14847 === 1 &&
    fdmH.fn934(fdmBind14843, fdmBind14845) === 1 &&
    (fdmBind14848 = false);
  let fdmBind14849 = fdmBind14846 * (fdmBind14847 - +fdmBind14848);
  return fdmBind14849 === 0 ? 0 : fdmBind14849;
}

export const _9e = monthsBetween;
export const N9e = isSameMonthEnd;
export const F9e = countMonthSteps;
