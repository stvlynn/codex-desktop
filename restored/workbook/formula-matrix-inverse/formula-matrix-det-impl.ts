// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: matrix determinant / MDETERM (legacy klt).
// Stage-3 wave-106.

import { fmiH } from "./boundary-hooks";

void fmiH;

export function computeDeterminant(fmiIn1821: any) {
  let fmiBind8373 = fmiIn1821.length;
  if (fmiBind8373 === 0) return fmiH.valueError;
  let fmiBind8374 = fmiIn1821.map((item) => [...item]),
    fmiBind8375 = 1;
  for (
    let fmiBind10240 = 0;
    fmiBind10240 < fmiBind8373;
    fmiBind10240 += 1
  ) {
    let fmiBind10585 = fmiBind10240,
      fmiBind10586 = Math.abs(
        fmiBind8374[fmiBind10585]?.[fmiBind10240] ?? 0,
      );
    for (
      let fmiBind21315 = fmiBind10240 + 1;
      fmiBind21315 < fmiBind8373;
      fmiBind21315 += 1
    ) {
      let fmiBind22386 = Math.abs(
        fmiBind8374[fmiBind21315]?.[fmiBind10240] ?? 0,
      );
      fmiBind22386 > fmiBind10586 &&
        ((fmiBind10586 = fmiBind22386),
        (fmiBind10585 = fmiBind21315));
    }
    if (
      (fmiBind8374[fmiBind10585]?.[fmiBind10240] ??
        0) === 0
    )
      return 0;
    if (fmiBind10585 !== fmiBind10240) {
      let fmiBind22526 = fmiBind8374[fmiBind10240];
      fmiBind8374[fmiBind10240] =
        fmiBind8374[fmiBind10585];
      fmiBind8374[fmiBind10585] = fmiBind22526;
      fmiBind8375 *= -1;
    }
    let fmiBind10587 =
      fmiBind8374[fmiBind10240]?.[fmiBind10240] ?? 0;
    if (fmiBind10587 === 0) return 0;
    for (
      let fmiBind16348 = fmiBind10240 + 1;
      fmiBind16348 < fmiBind8373;
      fmiBind16348 += 1
    ) {
      let fmiBind17249 =
        (fmiBind8374[fmiBind16348]?.[fmiBind10240] ??
          0) / fmiBind10587;
      if (!Number.isFinite(fmiBind17249)) return fmiH.numError;
      for (
        let fmiBind19914 = fmiBind10240;
        fmiBind19914 < fmiBind8373;
        fmiBind19914 += 1
      ) {
        let fmiBind20836 =
          (fmiBind8374[fmiBind16348]?.[fmiBind19914] ??
            0) -
          fmiBind17249 *
            (fmiBind8374[fmiBind10240]?.[
              fmiBind19914
            ] ?? 0);
        if (!Number.isFinite(fmiBind20836)) return fmiH.numError;
        fmiBind8374[fmiBind16348][fmiBind19914] =
          fmiBind20836;
      }
    }
  }
  let fmiBind8376 = fmiBind8375;
  for (
    let fmiBind22009 = 0;
    fmiBind22009 < fmiBind8373;
    fmiBind22009 += 1
  )
    if (
      ((fmiBind8376 *=
        fmiBind8374[fmiBind22009]?.[fmiBind22009] ?? 0),
      !Number.isFinite(fmiBind8376))
    )
      return fmiH.numError;
  return fmiH.coerceNumber(fmiBind8376);
}

/** Legacy alias. */
export const klt = computeDeterminant;
