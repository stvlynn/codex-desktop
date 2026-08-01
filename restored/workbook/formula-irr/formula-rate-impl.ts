// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel RATE Newton solver (legacy W0e).
// Stage-3 wave-106.

import {
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
} from "../formula-stats";
import { irrH } from "./boundary-hooks";

void valueError;
void numError;
void irrH;

export function computeRate(
  irrIn2045: any,
  irrIn2046: any,
  irrIn2047: any,
  irrIn2048: any,
  irrIn2049: any,
  irrIn2050: any,
) {
  if (
    ((irrIn2050 = irrIn2050 === undefined ? 0.1 : irrIn2050),
    (irrIn2048 = irrIn2048 === undefined ? 0 : irrIn2048),
    (irrIn2049 = irrIn2049 === undefined ? 0 : irrIn2049),
    (irrIn2045 = irrH.fn849(irrIn2045)),
    (irrIn2046 = irrH.fn849(irrIn2046)),
    (irrIn2047 = irrH.fn849(irrIn2047)),
    (irrIn2048 = irrH.fn849(irrIn2048)),
    (irrIn2049 = irrH.fn849(irrIn2049)),
    (irrIn2050 = irrH.fn849(irrIn2050)),
    irrH.fn846(
      irrIn2045,
      irrIn2046,
      irrIn2047,
      irrIn2048,
      irrIn2049,
      irrIn2050,
    ))
  )
    return valueError;
  let irrBind8908 = irrIn2050;
  irrIn2049 = +!!irrIn2049;
  for (let irrBind12205 = 0; irrBind12205 < 100; irrBind12205++) {
    if (irrBind8908 <= -1) return numError;
    let irrBind12672, irrBind12673;
    if (
      (Math.abs(irrBind8908) < 1e-10
        ? (irrBind12672 =
            irrIn2047 * (1 + irrIn2045 * irrBind8908) +
            irrIn2046 * (1 + irrBind8908 * irrIn2049) * irrIn2045 +
            irrIn2048)
        : ((irrBind12673 = (1 + irrBind8908) ** +irrIn2045),
          (irrBind12672 =
            irrIn2047 * irrBind12673 +
            irrIn2046 * (1 / irrBind8908 + irrIn2049) * (irrBind12673 - 1) +
            irrIn2048)),
      Math.abs(irrBind12672) < 1e-10)
    )
      return irrBind8908;
    let irrBind12674;
    if (Math.abs(irrBind8908) < 1e-10)
      irrBind12674 = irrIn2047 * irrIn2045 + irrIn2046 * irrIn2049 * irrIn2045;
    else {
      irrBind12673 = (1 + irrBind8908) ** +irrIn2045;
      let irrBind20582 = irrIn2045 * (1 + irrBind8908) ** (irrIn2045 - 1);
      irrBind12674 =
        irrIn2047 * irrBind20582 +
        irrIn2046 * (1 / irrBind8908 + irrIn2049) * irrBind20582 +
        irrIn2046 * (-1 / (irrBind8908 * irrBind8908)) * (irrBind12673 - 1);
    }
    irrBind8908 -= irrBind12672 / irrBind12674;
  }
  return irrBind8908;
}

/** Legacy alias. */
export const W0e = computeRate;
