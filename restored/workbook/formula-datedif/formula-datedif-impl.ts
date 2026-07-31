// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel DATEDIF / day-count units (legacy helper876).
// Stage-3 wave-108.

import { fdifH } from "./boundary-hooks";

void fdifH;

export function dateDif(fdifIn1966: any, fdifIn1967: any, fdifIn1968: any) {
  fdifIn1968 = fdifIn1968.toUpperCase();
  fdifIn1966 = fdifH.coerceDate(fdifIn1966);
  fdifIn1967 = fdifH.coerceDate(fdifIn1967);
  let fdifBind8712 = fdifIn1966.getFullYear(),
    fdifBind8713 = fdifIn1966.getMonth(),
    fdifBind8714 = fdifIn1966.getDate(),
    fdifBind8715 = fdifIn1967.getFullYear(),
    fdifBind8716 = fdifIn1967.getMonth(),
    fdifBind8717 = fdifIn1967.getDate(),
    fdifBind8718;
  switch (fdifIn1968) {
    case "Y":
      fdifBind8718 = Math.floor(fdifH.yearFrac(fdifIn1966, fdifIn1967));
      break;
    case "D":
      fdifBind8718 = fdifH.dateDiffDays(fdifIn1967, fdifIn1966);
      break;
    case "M":
      fdifBind8718 =
        fdifBind8716 - fdifBind8713 + 12 * (fdifBind8715 - fdifBind8712);
      fdifBind8717 < fdifBind8714 && fdifBind8718--;
      break;
    case "MD":
      fdifBind8714 <= fdifBind8717
        ? (fdifBind8718 = fdifBind8717 - fdifBind8714)
        : (fdifBind8716 === 0
            ? (fdifIn1966.setFullYear(fdifBind8715 - 1),
              fdifIn1966.setMonth(12))
            : (fdifIn1966.setFullYear(fdifBind8715),
              fdifIn1966.setMonth(fdifBind8716 - 1)),
          (fdifBind8718 = fdifH.dateDiffDays(fdifIn1967, fdifIn1966)));
      break;
    case "YM":
      fdifBind8718 =
        fdifBind8716 - fdifBind8713 + 12 * (fdifBind8715 - fdifBind8712);
      fdifBind8717 < fdifBind8714 && fdifBind8718--;
      fdifBind8718 %= 12;
      break;
    case "YD":
      fdifBind8716 > fdifBind8713 ||
      (fdifBind8716 === fdifBind8713 && fdifBind8717 < fdifBind8714)
        ? fdifIn1966.setFullYear(fdifBind8715)
        : fdifIn1966.setFullYear(fdifBind8715 - 1);
      fdifBind8718 = fdifH.dateDiffDays(fdifIn1967, fdifIn1966);
      break;
  }
  return fdifBind8718;
}

/** Legacy alias. */
export const workbookHelper876 = dateDif;
