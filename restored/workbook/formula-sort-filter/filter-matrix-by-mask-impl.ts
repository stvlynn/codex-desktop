// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: FILTER rows by boolean mask vector (legacy Lst).
// Stage-3 wave-123.

import { createArrayValue, isErrorValue } from "../formula-array";
import {
  coerceMatrixRows,
  coerceNumberVector,
  fallbackIfEmpty,
  Rst,
} from "./sort-filter-helpers-impl";

export function filterMatrixByMask(
  ffmIn3900: any,
  ffmIn3901: any,
  ffmIn3902: any,
) {
  let ffmBind12781 = coerceMatrixRows(ffmIn3900),
    ffmBind12782 = coerceNumberVector(ffmIn3901);
  if (ffmBind12782 === null)
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let ffmBind12783 = [];
  for (
    let ffmBind17901 = 0;
    ffmBind17901 < ffmBind12781.length;
    ffmBind17901 += 1
  ) {
    let ffmBind19011 = Rst(
      (ffmBind12782.length > 1
        ? (ffmBind12782[ffmBind17901] ?? ffmBind12782[ffmBind12782.length - 1])
        : (ffmBind12782[0] ?? 0)) ?? null,
    );
    if (isErrorValue(ffmBind19011)) return ffmBind19011;
    if (ffmBind19011) {
      let ffmBind22830 = ffmBind12781[ffmBind17901] ?? [];
      ffmBind12783.push([...ffmBind22830]);
    }
  }
  return ffmBind12783.length === 0
    ? ffmIn3902 === undefined
      ? {
          kind: "Error",
          code: "#CALC!",
        }
      : fallbackIfEmpty(ffmIn3902)
    : createArrayValue(ffmBind12783);
}

/** Legacy alias (wave-123). */
export const Lst = filterMatrixByMask;
