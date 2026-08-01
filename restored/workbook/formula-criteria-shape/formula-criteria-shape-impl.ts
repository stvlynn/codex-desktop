// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: array-shape guards + AVERAGEIFS/MAXIFS/SKEWP wrappers.
// Stage-3 wave-125. Owns preferred a3e + sameArrayShapeOrError + h6e/f4e nest.

import { isArrayValue } from "../formula-array";
import { isFormulaErrorToken } from "../formula-average-a";
import { collectNumericSamples as s4e } from "../formula-skew";
import { nQe, oQe, bQe } from "../formula-scalar-funcs";
import { fcsH } from "./boundary-hooks";

export function firstArrayError(fcsIn11440: any) {
  for (let fcsBind22697 of fcsIn11440) {
    let fcsBind22951 = coerceCellErrorToken(fcsBind22697);
    if (fcsBind22951) return fcsBind22951;
  }
  return null;
}
export function coerceCellErrorToken(fcsIn6477: any) {
  if (fcsIn6477 === undefined) return null;
  if (Array.isArray(fcsIn6477)) {
    for (let fcsBind20103 of fcsIn6477)
      if (fcsBind20103)
        for (let fcsBind21280 of fcsBind20103) {
          if (fcsBind21280 === undefined) continue;
          let fcsBind21813 = asFormulaErrorToken(fcsBind21280);
          if (fcsBind21813) return fcsBind21813;
        }
    return null;
  }
  return asFormulaErrorToken(fcsIn6477);
}
export function asFormulaErrorToken(fcsIn8612: any) {
  if (isFormulaErrorToken(fcsIn8612)) return fcsIn8612;
  if (fcsIn8612 instanceof Error) {
    let fcsBind21655 = fcsIn8612.message?.trim();
    return fcsBind21655 && fcsBind21655.startsWith("#")
      ? {
          kind: "Error",
          code: fcsBind21655,
        }
      : fcsH.VALUE_TOKEN;
  }
  return null;
}
export function arrayShapeOrError(fcsIn4330: any) {
  if (Array.isArray(fcsIn4330)) {
    let fcsBind18156 = fcsIn4330.length,
      fcsBind18157 = fcsIn4330.reduce(
        (accumulator, current) => Math.max(accumulator, current?.length ?? 0),
        0,
      );
    if (fcsBind18156 === 0 || fcsBind18157 === 0) return fcsH.VALUE_TOKEN;
    for (let fcsBind22828 of fcsIn4330)
      if ((fcsBind22828?.length ?? 0) !== fcsBind18157) return fcsH.VALUE_TOKEN;
    return {
      rows: fcsBind18156,
      cols: fcsBind18157,
    };
  }
  if (fcsIn4330 === undefined) return fcsH.VALUE_TOKEN;
  let fcsBind13453 = fcsIn4330;
  return isArrayValue(fcsBind13453)
    ? fcsBind13453.rows < 1 || fcsBind13453.cols < 1
      ? fcsH.VALUE_TOKEN
      : {
          rows: fcsBind13453.rows,
          cols: fcsBind13453.cols,
        }
    : {
        rows: 1,
        cols: 1,
      };
}
export function sameArrayShapeOrError(fcsIn7317: any, fcsIn7318: any) {
  let fcsBind17698 = arrayShapeOrError(fcsIn7317);
  if (isFormulaErrorToken(fcsBind17698)) return fcsBind17698;
  for (let fcsBind20019 of fcsIn7318) {
    if (fcsBind20019 === undefined) return fcsH.VALUE_TOKEN;
    let fcsBind20547 = arrayShapeOrError(fcsBind20019);
    if (isFormulaErrorToken(fcsBind20547)) return fcsBind20547;
    if (
      fcsBind20547.rows !== fcsBind17698.rows ||
      fcsBind20547.cols !== fcsBind17698.cols
    )
      return fcsH.VALUE_TOKEN;
  }
  return null;
}
export function sameArrayShapeArgsOrError(fcsIn11653: any) {
  if (fcsIn11653.length === 0) return null;
  let [fcsBind22032, ...fcsBind22033] = fcsIn11653;
  return sameArrayShapeOrError(fcsBind22032, fcsBind22033);
}
export function averageIfsShaped(
  fcsIn7123: any,
  fcsIn7124: any,
  fcsIn7125: any,
  ...fcsIn7126: any[]
) {
  let fcsBind17461 = [fcsIn7124];
  for (let fcsBind22892 = 0; fcsBind22892 < fcsIn7126.length; fcsBind22892 += 2)
    fcsBind17461.push(fcsIn7126[fcsBind22892]);
  let fcsBind17462 = sameArrayShapeOrError(fcsIn7123, fcsBind17461);
  if (fcsBind17462) return fcsBind17462;
  let fcsBind17463 = oQe(fcsIn7124, fcsIn7125, ...fcsIn7126);
  return (
    asFormulaErrorToken(fcsBind17463) ||
    (typeof fcsBind17463 == "number" && fcsBind17463 === 0
      ? fcsH.DIV0_TOKEN
      : nQe(fcsIn7123, fcsIn7124, fcsIn7125, ...fcsIn7126))
  );
}
export function ftestShaped(fcsIn9486: any, fcsIn9487: any) {
  let fcsBind20006 = arrayShapeOrError(fcsIn9486);
  if (isFormulaErrorToken(fcsBind20006)) return fcsBind20006;
  let fcsBind20007 = arrayShapeOrError(fcsIn9487);
  return isFormulaErrorToken(fcsBind20007)
    ? fcsBind20007
    : fcsBind20006.rows * fcsBind20006.cols ===
        fcsBind20007.rows * fcsBind20007.cols
      ? fcsBind1855.TEST(fcsIn9486, fcsIn9487)
      : fcsH.NA_TOKEN;
}
export function skewP(fcsIn3780: any, fcsIn3781: any, ...fcsIn3782: any[]) {
  let fcsBind12508 = s4e([fcsIn3780, fcsIn3781, ...fcsIn3782]);
  if (!Array.isArray(fcsBind12508)) return fcsBind12508;
  let fcsBind12509 = fcsBind12508;
  if (fcsBind12509.length === 0) return fcsH.DIV0_TOKEN;
  let fcsBind12510 =
      fcsBind12509.reduce((accumulator, current) => accumulator + current, 0) /
      fcsBind12509.length,
    fcsBind12511 = 0,
    fcsBind12512 = 0;
  for (let fcsBind22429 of fcsBind12509) {
    let fcsBind22707 = fcsBind22429 - fcsBind12510;
    fcsBind12511 += fcsBind22707 * fcsBind22707;
    fcsBind12512 += fcsBind22707 * fcsBind22707 * fcsBind22707;
  }
  if (fcsBind12511 === 0) return fcsH.DIV0_TOKEN;
  let fcsBind12513 = fcsBind12509.length,
    fcsBind12514 = fcsBind12511 / fcsBind12513;
  if (fcsBind12514 === 0) return fcsH.DIV0_TOKEN;
  let fcsBind12515 = Math.sqrt(fcsBind12514) ** 3;
  if (fcsBind12515 === 0) return fcsH.DIV0_TOKEN;
  let fcsBind12516 = fcsBind12512 / fcsBind12513 / fcsBind12515;
  return Number.isFinite(fcsBind12516) ? fcsBind12516 : fcsH.DIV0_TOKEN;
}
export function coerceNumericMatrix(fcsIn6376: any, fcsIn6377: any) {
  if (Array.isArray(fcsIn6376))
    return fcsIn6376.map((item) =>
      item
        ? item.map((_item) => coerceNumericCell(_item, fcsIn6377) ?? null)
        : [],
    );
  if (fcsIn6376 === undefined) return;
  let fcsBind16536 = fcsIn6376;
  if (isArrayValue(fcsBind16536)) {
    let fcsBind22034 = fcsBind16536.values.map((item) =>
      item.map((_item) => coerceNumericCell(_item, fcsIn6377)),
    );
    return {
      ...fcsBind16536,
      values: fcsBind22034,
    };
  }
  return coerceNumericCell(fcsBind16536, fcsIn6377);
}
export function coerceNumericCell(fcsIn6515: any, fcsIn6516: any) {
  if (fcsIn6515 == null) return fcsIn6515;
  if (typeof fcsIn6515 == "string") {
    let fcsBind19210 = fcsIn6515.trim();
    if (fcsBind19210 === "")
      return fcsIn6516?.blankNonNumeric ? null : fcsIn6515;
    let fcsBind19211 = Number(fcsBind19210);
    if (Number.isFinite(fcsBind19211)) return fcsBind19211;
    if (fcsIn6516?.blankNonNumeric) return null;
  }
  return fcsIn6515;
}
export function maxIfsShaped(
  fcsIn4800: any,
  fcsIn4801: any,
  fcsIn4802: any,
  ...fcsIn4803: any[]
) {
  let fcsBind14159 = [fcsIn4801];
  for (let fcsBind22893 = 0; fcsBind22893 < fcsIn4803.length; fcsBind22893 += 2)
    fcsBind14159.push(fcsIn4803[fcsBind22893]);
  let fcsBind14160 = sameArrayShapeOrError(fcsIn4800, fcsBind14159);
  if (fcsBind14160) return fcsBind14160;
  let fcsBind14161 = coerceNumericMatrix(fcsIn4800, {
      blankNonNumeric: true,
    }),
    fcsBind14162 = coerceNumericMatrix(fcsIn4801),
    fcsBind14163 = [];
  for (
    let fcsBind20105 = 0;
    fcsBind20105 < fcsIn4803.length;
    fcsBind20105 += 2
  ) {
    let fcsBind21283 = fcsIn4803[fcsBind20105],
      fcsBind21284 = fcsIn4803[fcsBind20105 + 1];
    fcsBind21283 === undefined
      ? fcsBind14163.push(fcsBind21283)
      : fcsBind14163.push(coerceNumericMatrix(fcsBind21283));
    fcsBind21284 !== undefined && fcsBind14163.push(fcsBind21284);
  }
  return bQe(fcsBind14161, fcsBind14162, fcsIn4802, ...fcsBind14163);
}

/** Legacy aliases (wave-125). */
export const e4e = coerceCellErrorToken;
export const f4e = sameArrayShapeArgsOrError;
export const a3e = averageIfsShaped;
export const d3e = ftestShaped;
export const d6e = skewP;
export const h6e = maxIfsShaped;
