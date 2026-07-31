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

// --- wave-110: CUMPRINC / DDB / PPMT ---

export function cumPrinc(
  ffinIn4284: any,
  ffinIn4285: any,
  ffinIn4286: any,
  ffinIn4287: any,
  ffinIn4288: any,
  ffinIn4289: any,
) {
  if (
    ((ffinIn4284 = ffinH.fn849(ffinIn4284)),
    (ffinIn4285 = ffinH.fn849(ffinIn4285)),
    (ffinIn4286 = ffinH.fn849(ffinIn4286)),
    ffinH.fn846(ffinIn4284, ffinIn4285, ffinIn4286))
  )
    return ffinH.VALUE_ERROR;
  if (
    ffinIn4284 <= 0 ||
    ffinIn4285 <= 0 ||
    ffinIn4286 <= 0 ||
    ffinIn4287 < 1 ||
    ffinIn4288 < 1 ||
    ffinIn4287 > ffinIn4288 ||
    (ffinIn4289 !== 0 && ffinIn4289 !== 1)
  )
    return ffinH.NUM_ERROR;
  let ffinBind13357 = ffinH.fn901(
      ffinIn4284,
      ffinIn4285,
      ffinIn4286,
      0,
      ffinIn4289,
    ),
    ffinBind13358 = 0;
  ffinIn4287 === 1 &&
    (ffinIn4289 === 0 && (ffinBind13358 = -ffinIn4286), ffinIn4287++);
  for (
    let ffinBind21909 = ffinIn4287;
    ffinBind21909 <= ffinIn4288;
    ffinBind21909++
  )
    ffinBind13358 +=
      ffinIn4289 === 1
        ? ffinH.fn899(
            ffinIn4284,
            ffinBind21909 - 2,
            ffinBind13357,
            ffinIn4286,
            1,
          ) - ffinBind13357
        : ffinH.fn899(
            ffinIn4284,
            ffinBind21909 - 1,
            ffinBind13357,
            ffinIn4286,
            0,
          );
  return ((ffinBind13358 *= ffinIn4284), ffinBind13358);
}
export function ddb(
  ffinIn4566: any,
  ffinIn4567: any,
  ffinIn4568: any,
  ffinIn4569: any,
  ffinIn4570: any,
) {
  if (
    ((ffinIn4570 = ffinIn4570 === undefined ? 2 : ffinIn4570),
    (ffinIn4566 = ffinH.fn849(ffinIn4566)),
    (ffinIn4567 = ffinH.fn849(ffinIn4567)),
    (ffinIn4568 = ffinH.fn849(ffinIn4568)),
    (ffinIn4569 = ffinH.fn849(ffinIn4569)),
    (ffinIn4570 = ffinH.fn849(ffinIn4570)),
    ffinH.fn846(ffinIn4566, ffinIn4567, ffinIn4568, ffinIn4569, ffinIn4570))
  )
    return ffinH.VALUE_ERROR;
  if (
    ffinIn4566 < 0 ||
    ffinIn4567 < 0 ||
    ffinIn4568 < 0 ||
    ffinIn4569 < 0 ||
    ffinIn4570 <= 0 ||
    ffinIn4569 > ffinIn4568
  )
    return ffinH.NUM_ERROR;
  if (ffinIn4567 >= ffinIn4566) return 0;
  let ffinBind13838 = 0,
    ffinBind13839 = 0;
  for (let ffinBind22157 = 1; ffinBind22157 <= ffinIn4569; ffinBind22157++) {
    ffinBind13839 = Math.min(
      (ffinIn4566 - ffinBind13838) * (ffinIn4570 / ffinIn4568),
      ffinIn4566 - ffinIn4567 - ffinBind13838,
    );
    ffinBind13838 += ffinBind13839;
  }
  return ffinBind13839;
}
export function ppmt(
  ffinIn4757: any,
  ffinIn4758: any,
  ffinIn4759: any,
  ffinIn4760: any,
  ffinIn4761: any,
  ffinIn4762: any,
) {
  if (
    ((ffinIn4761 ||= 0),
    (ffinIn4762 ||= 0),
    (ffinIn4757 = ffinH.fn849(ffinIn4757)),
    (ffinIn4758 = ffinH.fn849(ffinIn4758)),
    (ffinIn4759 = ffinH.fn849(ffinIn4759)),
    (ffinIn4760 = ffinH.fn849(ffinIn4760)),
    (ffinIn4761 = ffinH.fn849(ffinIn4761)),
    (ffinIn4762 = ffinH.fn849(ffinIn4762)),
    ffinH.fn846(
      ffinIn4757,
      ffinIn4758,
      ffinIn4759,
      ffinIn4760,
      ffinIn4761,
      ffinIn4762,
    ))
  )
    return ffinH.VALUE_ERROR;
  let ffinBind14111 = ffinH.fn901(
    ffinIn4757,
    ffinIn4759,
    ffinIn4760,
    ffinIn4761,
    ffinIn4762,
  );
  return (
    (ffinIn4758 === 1
      ? ffinIn4762 === 1
        ? 0
        : -ffinIn4760
      : ffinIn4762 === 1
        ? ffinH.fn899(
            ffinIn4757,
            ffinIn4758 - 2,
            ffinBind14111,
            ffinIn4760,
            1,
          ) - ffinBind14111
        : ffinH.fn899(
            ffinIn4757,
            ffinIn4758 - 1,
            ffinBind14111,
            ffinIn4760,
            0,
          )) * ffinIn4757
  );
}

/** Legacy aliases. */
export const E0e = cumIpmt;
export const D0e = dbDepreciation;
export const T0e = cumPrinc;
export const O0e = ddb;
export const P0e = ppmt;
