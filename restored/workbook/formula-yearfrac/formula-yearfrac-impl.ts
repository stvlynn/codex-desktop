// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel YEARFRAC basis math (legacy helper #884 + 882/883).
// Stage-3 wave-103.

import { fyfH } from "./boundary-hooks";

void fyfH;

export function isLeapYear(fyfIn13550: any) {
  return new Date(fyfIn13550, 1, 29).getMonth() === 1;
}
export function dateDiffDays(fyfIn13019: any, fyfIn13020: any) {
  return Math.ceil(
    (fyfIn13020 - fyfIn13019) / 1e3 / 60 / 60 / 24,
  );
}
export function yearFrac(fyfIn1045: any, fyfIn1046: any, fyfIn1047: any, ) {
  if (
    ((fyfIn1045 = fyfH.coerceDate(fyfIn1045)),
    fyfIn1045 instanceof Error)
  )
    return fyfIn1045;
  if (
    ((fyfIn1046 = fyfH.coerceDate(fyfIn1046)),
    fyfIn1046 instanceof Error)
  )
    return fyfIn1046;
  fyfIn1047 ||= 0;
  let fyfBind6265 = fyfIn1045.getDate(),
    fyfBind6266 = fyfIn1045.getMonth() + 1,
    fyfBind6267 = fyfIn1045.getFullYear(),
    fyfBind6268 = fyfIn1046.getDate(),
    fyfBind6269 = fyfIn1046.getMonth() + 1,
    fyfBind6270 = fyfIn1046.getFullYear();
  switch (fyfIn1047) {
    case 0:
      return (
        fyfBind6265 === 31 && fyfBind6268 === 31
          ? ((fyfBind6265 = 30), (fyfBind6268 = 30))
          : fyfBind6265 === 31
            ? (fyfBind6265 = 30)
            : fyfBind6265 === 30 &&
              fyfBind6268 === 31 &&
              (fyfBind6268 = 30),
        (fyfBind6268 +
          fyfBind6269 * 30 +
          fyfBind6270 * 360 -
          (fyfBind6265 +
            fyfBind6266 * 30 +
            fyfBind6267 * 360)) /
          360
      );
    case 1: {
      let fyfBind10763 = (fyfIn6898, fyfIn6899) => {
          let fyfBind17221 = fyfIn6898.getFullYear(),
            fyfBind17222 = new Date(fyfBind17221, 2, 1);
          if (
            isLeapYear(fyfBind17221) &&
            fyfIn6898 < fyfBind17222 &&
            fyfIn6899 >= fyfBind17222
          )
            return true;
          let fyfBind17223 = fyfIn6899.getFullYear(),
            fyfBind17224 = new Date(fyfBind17223, 2, 1);
          return (
            isLeapYear(fyfBind17223) &&
            fyfIn6899 >= fyfBind17224 &&
            fyfIn6898 < fyfBind17224
          );
        },
        fyfBind10764 = 365;
      if (
        fyfBind6267 === fyfBind6270 ||
        (fyfBind6267 + 1 === fyfBind6270 &&
          (fyfBind6266 > fyfBind6269 ||
            (fyfBind6266 === fyfBind6269 &&
              fyfBind6265 >= fyfBind6268)))
      )
        return (
          ((fyfBind6267 === fyfBind6270 &&
            isLeapYear(fyfBind6267)) ||
            fyfBind10763(fyfIn1045, fyfIn1046) ||
            (fyfBind6269 === 1 && fyfBind6268 === 29)) &&
            (fyfBind10764 = 366),
          dateDiffDays(fyfIn1045, fyfIn1046) /
            fyfBind10764
        );
      let fyfBind10765 = fyfBind6270 - fyfBind6267 + 1,
        fyfBind10766 =
          (new Date(fyfBind6270 + 1, 0, 1) -
            new Date(fyfBind6267, 0, 1)) /
          1e3 /
          60 /
          60 /
          24 /
          fyfBind10765;
      return (
        dateDiffDays(fyfIn1045, fyfIn1046) /
        fyfBind10766
      );
    }
    case 2:
      return dateDiffDays(fyfIn1045, fyfIn1046) / 360;
    case 3:
      return dateDiffDays(fyfIn1045, fyfIn1046) / 365;
    case 4:
      return (
        (fyfBind6268 +
          fyfBind6269 * 30 +
          fyfBind6270 * 360 -
          (fyfBind6265 +
            fyfBind6266 * 30 +
            fyfBind6267 * 360)) /
        360
      );
  }
}

/** Legacy aliases. */
/** Compat alias for barrels. */
export const workbookHelper882 = isLeapYear;
/** Compat alias for barrels. */
export const workbookHelper883 = isLeapYear;
/** Compat alias for barrels. */
export const workbookHelper884 = isLeapYear;
