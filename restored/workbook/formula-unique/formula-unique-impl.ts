// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: unique columns / cell fingerprint (legacy Ost/kst/Ast).
// Stage-3 wave-110.

import { isErrorValue } from "../formula-array";

void isErrorValue;

export function uniqueColumns(fuIn2654: any, fuIn2655: any) {
  let fuBind10148 = fuIn2654.reduce(
    (accumulator, current) => Math.max(accumulator, current.length),
    0,
  );
  if (fuBind10148 === 0) return [];
  let fuBind10149 = new Map(),
    fuBind10150 = [];
  for (let fuBind17780 = 0; fuBind17780 < fuBind10148; fuBind17780 += 1) {
    let fuBind18667 = [];
    for (let fuBind22681 = 0; fuBind22681 < fuIn2654.length; fuBind22681 += 1)
      fuBind18667.push(fuIn2654[fuBind22681]?.[fuBind17780] ?? null);
    let fuBind18668 = columnFingerprintKey(fuBind18667),
      fuBind18669 = fuBind10149.get(fuBind18668);
    fuBind18669
      ? (fuBind18669.count += 1)
      : (fuBind10149.set(fuBind18668, {
          column: fuBind18667,
          count: 1,
        }),
        fuBind10150.push(fuBind18668));
  }
  let fuBind10151 = [];
  for (let fuBind21418 of fuBind10150) {
    let fuBind21973 = fuBind10149.get(fuBind21418);
    fuBind21973 &&
      (fuIn2655
        ? fuBind21973.count === 1 && fuBind10151.push(fuBind21973.column)
        : fuBind10151.push(fuBind21973.column));
  }
  if (fuBind10151.length === 0) return [[null]];
  let fuBind10152 = fuIn2654.length,
    fuBind10153 = [];
  for (let fuBind21527 = 0; fuBind21527 < fuBind10152; fuBind21527 += 1) {
    let fuBind22430 = [];
    for (let fuBind23039 of fuBind10151)
      fuBind22430.push(fuBind23039[fuBind21527] ?? null);
    fuBind10153.push(fuBind22430);
  }
  return fuBind10153;
}
export function columnFingerprintKey(fuIn13701: any) {
  return fuIn13701.map((item) => cellFingerprint(item)).join("|#|");
}
export function cellFingerprint(event: any) {
  return event == null
    ? "null"
    : typeof event == "number"
      ? Number.isFinite(event)
        ? `number:${event.toPrecision(15)}`
        : `number:${event}`
      : typeof event == "string"
        ? `string:${event}`
        : typeof event == "boolean"
          ? `boolean:${event ? "true" : "false"}`
          : event instanceof Date
            ? `date:${event.toISOString()}`
            : isErrorValue(event)
              ? `error:${event.code}`
              : JSON.stringify(event);
}

/** Legacy aliases. */
export const Ost = uniqueColumns;
export const kst = columnFingerprintKey;
export const Ast = cellFingerprint;
