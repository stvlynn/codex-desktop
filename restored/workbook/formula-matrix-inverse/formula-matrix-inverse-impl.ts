// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Gauss-Jordan matrix inverse (legacy Alt / MINVERSE core).
// Stage-3 wave-102.

import { fmiH } from "./boundary-hooks";

void fmiH;

export function invertMatrix(props: any) {
  let fmiBind6771 = props.length;
  if (fmiBind6771 === 0) return fmiH.valueError;
  let fmiBind6772 = [];
  for (
    let fmiBind19012 = 0;
    fmiBind19012 < fmiBind6771;
    fmiBind19012 += 1
  ) {
    let fmiBind19942 = props[fmiBind19012];
    if (
      !fmiBind19942 ||
      fmiBind19942.length !== fmiBind6771
    )
      return fmiH.valueError;
    let fmiBind19943 = [];
    for (
      let fmiBind22912 = 0;
      fmiBind22912 < fmiBind6771;
      fmiBind22912 += 1
    )
      fmiBind19943.push(
        +(fmiBind19012 === fmiBind22912),
      );
    fmiBind6772.push([
      ...fmiBind19942,
      ...fmiBind19943,
    ]);
  }
  for (
    let fmiBind8916 = 0;
    fmiBind8916 < fmiBind6771;
    fmiBind8916 += 1
  ) {
    let fmiBind9171 = fmiBind8916,
      fmiBind9172 = Math.abs(
        fmiBind6772[fmiBind9171]?.[fmiBind8916] ?? 0,
      );
    for (
      let fmiBind21316 = fmiBind8916 + 1;
      fmiBind21316 < fmiBind6771;
      fmiBind21316 += 1
    ) {
      let fmiBind22387 = Math.abs(
        fmiBind6772[fmiBind21316]?.[fmiBind8916] ?? 0,
      );
      fmiBind22387 > fmiBind9172 &&
        ((fmiBind9172 = fmiBind22387),
        (fmiBind9171 = fmiBind21316));
    }
    if (
      (fmiBind6772[fmiBind9171]?.[fmiBind8916] ?? 0) ===
      0
    )
      return fmiH.numError;
    if (fmiBind9171 !== fmiBind8916) {
      let fmiBind22709 = fmiBind6772[fmiBind8916];
      fmiBind6772[fmiBind8916] =
        fmiBind6772[fmiBind9171];
      fmiBind6772[fmiBind9171] = fmiBind22709;
    }
    let fmiBind9173 =
      fmiBind6772[fmiBind8916]?.[fmiBind8916] ?? 0;
    if (fmiBind9173 === 0) return fmiH.numError;
    let fmiBind9174 = fmiBind6771 * 2;
    for (
      let fmiBind20724 = 0;
      fmiBind20724 < fmiBind9174;
      fmiBind20724 += 1
    ) {
      let fmiBind21692 =
        (fmiBind6772[fmiBind8916]?.[fmiBind20724] ??
          0) / fmiBind9173;
      if (!Number.isFinite(fmiBind21692)) return fmiH.numError;
      fmiBind6772[fmiBind8916][fmiBind20724] =
        fmiBind21692;
    }
    for (
      let fmiBind16235 = 0;
      fmiBind16235 < fmiBind6771;
      fmiBind16235 += 1
    ) {
      if (fmiBind16235 === fmiBind8916) continue;
      let fmiBind16979 =
        fmiBind6772[fmiBind16235]?.[fmiBind8916] ?? 0;
      if (fmiBind16979 !== 0)
        for (
          let fmiBind19691 = 0;
          fmiBind19691 < fmiBind9174;
          fmiBind19691 += 1
        ) {
          let fmiBind20606 =
            (fmiBind6772[fmiBind16235]?.[
              fmiBind19691
            ] ?? 0) -
            fmiBind16979 *
              (fmiBind6772[fmiBind8916]?.[
                fmiBind19691
              ] ?? 0);
          if (!Number.isFinite(fmiBind20606))
            return fmiH.numError;
          fmiBind6772[fmiBind16235][fmiBind19691] =
            fmiBind20606;
        }
    }
  }
  let fmiBind6773 = [];
  for (
    let fmiBind22867 = 0;
    fmiBind22867 < fmiBind6771;
    fmiBind22867 += 1
  )
    fmiBind6773.push(
      fmiBind6772[fmiBind22867].slice(fmiBind6771),
    );
  return fmiBind6773;
}

/** Legacy alias. */
export const Alt = invertMatrix;
