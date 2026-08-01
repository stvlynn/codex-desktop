// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel BYROW / BYCOL (legacy Yot / Jot nest).
// Stage-3 wave-127.

import { createArrayValue, isArrayValue, isErrorValue } from "../formula-array";
import { fbyH } from "./boundary-hooks";

export function byCol(fbyIn5687: any, fbyIn5688: any) {
  let fbyBind15579 = coerceByrowArray(fbyIn5687);
  if (isErrorValue(fbyBind15579)) return fbyBind15579;
  let fbyBind15580 = coerceByrowLambda(fbyIn5688);
  if (isErrorValue(fbyBind15580)) return fbyBind15580;
  let fbyBind15581 = fbyH.getEvalContext();
  if (!fbyBind15581) return fbyH.VALUE_ERROR;
  if (fbyBind15579.length === 0) return createArrayValue([]);
  let fbyBind15582 = [];
  for (let fbyBind21387 of fbyBind15579) {
    let fbyBind21943 = [fbyBind21387],
      fbyBind21944 = unwrapByrowResult(
        fbyBind15580.invoke([fbyBind21943], fbyBind15581),
      );
    if (isErrorValue(fbyBind21944)) return fbyBind21944;
    fbyBind15582.push([fbyBind21944]);
  }
  return createArrayValue(fbyBind15582);
}
export function byRow(fbyIn3852: any, fbyIn3853: any) {
  let fbyBind12675 = coerceByrowArray(fbyIn3852);
  if (isErrorValue(fbyBind12675)) return fbyBind12675;
  let fbyBind12676 = coerceByrowLambda(fbyIn3853);
  if (isErrorValue(fbyBind12676)) return fbyBind12676;
  let fbyBind12677 = fbyH.getEvalContext();
  if (!fbyBind12677) return fbyH.VALUE_ERROR;
  if (fbyBind12675.length === 0) return createArrayValue([[]]);
  let fbyBind12678 = fbyBind12675.reduce(
    (accumulator, current) => Math.max(accumulator, current.length),
    0,
  );
  if (fbyBind12678 === 0) return createArrayValue([[]]);
  let fbyBind12679 = [];
  for (let fbyBind19360 = 0; fbyBind19360 < fbyBind12678; fbyBind19360 += 1) {
    let fbyBind20281 = fbyBind12675
        .map((item) => (fbyBind19360 < item.length ? item[fbyBind19360] : null))
        .map((item) => [item]),
      fbyBind20282 = unwrapByrowResult(
        fbyBind12676.invoke([fbyBind20281], fbyBind12677),
      );
    if (isErrorValue(fbyBind20282)) return fbyBind20282;
    fbyBind12679.push(fbyBind20282);
  }
  return createArrayValue([fbyBind12679]);
}
export function coerceByrowArray(props: any) {
  return props === undefined
    ? fbyH.VALUE_ERROR
    : Array.isArray(props)
      ? props.map((item) =>
          (item ?? []).map((_item) => normalizeByrowCell(_item ?? null)),
        )
      : isArrayValue(props)
        ? mapArrayValueCells(props)
        : [[normalizeByrowCell(props)]];
}
export function mapArrayValueCells(props: any) {
  return props.values.map((item) =>
    item.map((_item) => normalizeByrowCell(_item)),
  );
}
export function normalizeByrowCell(fbyIn12778: any) {
  return fbyIn12778 === undefined
    ? null
    : isArrayValue(fbyIn12778) || isByrowLambda(fbyIn12778)
      ? fbyH.VALUE_ERROR
      : fbyIn12778;
}
export function coerceByrowLambda(fbyIn10632: any) {
  if (fbyIn10632 === undefined) return fbyH.VALUE_ERROR;
  let fbyBind21114 = firstCellOrValue(fbyIn10632);
  return fbyBind21114 === undefined
    ? fbyH.VALUE_ERROR
    : isErrorValue(fbyBind21114) || isByrowLambda(fbyBind21114)
      ? fbyBind21114
      : fbyH.VALUE_ERROR;
}
export function firstCellOrValue(fbyIn7915: any) {
  if (Array.isArray(fbyIn7915)) {
    let fbyBind21945 = fbyIn7915[0];
    return !Array.isArray(fbyBind21945) || fbyBind21945.length === 0
      ? undefined
      : (fbyBind21945[0] ?? null);
  }
  return isArrayValue(fbyIn7915)
    ? (fbyIn7915.values[0]?.[0] ?? null)
    : fbyIn7915 === undefined
      ? null
      : fbyIn7915;
}
export function unwrapByrowResult(fbyIn8017: any) {
  return isErrorValue(fbyIn8017)
    ? fbyIn8017
    : isArrayValue(fbyIn8017)
      ? fbyIn8017.rows === 0 || fbyIn8017.cols === 0
        ? null
        : fbyIn8017.rows !== 1 || fbyIn8017.cols !== 1
          ? fbyH.VALUE_ERROR
          : normalizeByrowCell(fbyIn8017.values[0]?.[0])
      : normalizeByrowCell(fbyIn8017);
}
export function isByrowLambda(fbyIn12466: any) {
  return (
    typeof fbyIn12466 == "object" &&
    !!fbyIn12466 &&
    fbyIn12466.kind === "Lambda"
  );
}

/** Legacy aliases. */
export const Yot = byRow;
export const Jot = byCol;
export const Xot = coerceByrowArray;
export const Zot = mapArrayValueCells;
export const workbookHelper964 = normalizeByrowCell;
export const Qot = coerceByrowLambda;
export const $ot = firstCellOrValue;
export const est = unwrapByrowResult;
export const tst = isByrowLambda;
