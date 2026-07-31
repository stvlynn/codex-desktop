// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CUMIPMT + DB (legacy E0e / D0e).
// Stage-3 wave-108.

import { ffinH } from "./boundary-hooks";

void ffinH;

export function cumIpmt(
  ffinIn3918: any,
  ffinIn3919: any,
  ffinIn3920: any,
  ffinIn3921: any,
  ffinIn3922: any,
  ffinIn3923: any,
) {
  if (
    ((ffinIn3918 = ffinH.fn849(ffinIn3918)),
    (ffinIn3919 = ffinH.fn849(ffinIn3919)),
    (ffinIn3920 = ffinH.fn849(ffinIn3920)),
    ffinH.fn846(ffinIn3918, ffinIn3919, ffinIn3920))
  )
    return ffinH.VALUE_ERROR;
  if (
    ffinIn3918 <= 0 ||
    ffinIn3919 <= 0 ||
    ffinIn3920 <= 0 ||
    ffinIn3921 < 1 ||
    ffinIn3922 < 1 ||
    ffinIn3921 > ffinIn3922 ||
    (ffinIn3923 !== 0 && ffinIn3923 !== 1)
  )
    return ffinH.NUM_ERROR;
  let ffinBind12804 = ffinH.fn901(
      ffinIn3918,
      ffinIn3919,
      ffinIn3920,
      0,
      ffinIn3923,
    ),
    ffinBind12805 = 0;
  ffinIn3921 === 1 &&
    ((ffinBind12805 =
      ffinIn3923 === 0
        ? ffinBind12804 + ffinIn3920 * ffinIn3918
        : ffinBind12804),
    ffinIn3921++);
  for (
    let ffinBind20686 = ffinIn3921;
    ffinBind20686 <= ffinIn3922;
    ffinBind20686++
  )
    ffinBind12805 +=
      ffinIn3923 > 0
        ? ffinBind12804 -
          (ffinH.fn899(
            ffinIn3918,
            ffinBind20686 - 2,
            ffinBind12804,
            ffinIn3920,
            1,
          ) -
            ffinBind12804) *
            ffinIn3918
        : ffinBind12804 -
          ffinH.fn899(
            ffinIn3918,
            ffinBind20686 - 1,
            ffinBind12804,
            ffinIn3920,
            0,
          ) *
            ffinIn3918;
  return ffinBind12805;
}

export function dbDepreciation(
  ffinIn3055: any,
  ffinIn3056: any,
  ffinIn3057: any,
  ffinIn3058: any,
  ffinIn3059: any,
) {
  if (
    ((ffinIn3059 = ffinIn3059 === undefined ? 12 : ffinIn3059),
    (ffinIn3055 = ffinH.fn849(ffinIn3055)),
    (ffinIn3056 = ffinH.fn849(ffinIn3056)),
    (ffinIn3057 = ffinH.fn849(ffinIn3057)),
    (ffinIn3058 = ffinH.fn849(ffinIn3058)),
    (ffinIn3059 = ffinH.fn849(ffinIn3059)),
    ffinH.fn846(ffinIn3055, ffinIn3056, ffinIn3057, ffinIn3058, ffinIn3059))
  )
    return ffinH.VALUE_ERROR;
  if (
    ffinIn3055 < 0 ||
    ffinIn3056 < 0 ||
    ffinIn3057 < 0 ||
    ffinIn3058 < 0 ||
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(ffinIn3059) === -1 ||
    ffinIn3058 > ffinIn3057
  )
    return ffinH.NUM_ERROR;
  if (ffinIn3056 >= ffinIn3055) return 0;
  let ffinBind11126 = (
      1 -
      (ffinIn3056 / ffinIn3055) ** (1 / ffinIn3057)
    ).toFixed(3),
    ffinBind11127 = (ffinIn3055 * ffinBind11126 * ffinIn3059) / 12,
    ffinBind11128 = ffinBind11127,
    ffinBind11129 = 0,
    ffinBind11130 = ffinIn3058 === ffinIn3057 ? ffinIn3057 - 1 : ffinIn3058;
  for (let ffinBind22759 = 2; ffinBind22759 <= ffinBind11130; ffinBind22759++) {
    ffinBind11129 = (ffinIn3055 - ffinBind11128) * ffinBind11126;
    ffinBind11128 += ffinBind11129;
  }
  return ffinIn3058 === 1
    ? ffinBind11127
    : ffinIn3058 === ffinIn3057
      ? (ffinIn3055 - ffinBind11128) * ffinBind11126
      : ffinBind11129;
}

/** Legacy aliases. */
export const E0e = cumIpmt;
export const D0e = dbDepreciation;
