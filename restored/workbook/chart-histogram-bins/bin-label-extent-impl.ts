// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram bin label + value extent (legacy helper #553/hSe).
// Stage-3 wave-133.

import { format as d3Format } from "../../vendor/d3-format";
import { min as d3Min } from "../../vendor/d3-array-min";
import { Jn } from "../presentation-protobuf";
import { workbookHelper554 } from "../chart-bin-width";

export function binLabel(
  chbIn5170: any,
  chbIn5171: any,
  chbIn5172: any,
  chbIn5173: any,
  chbIn5174: any,
) {
  let chbBind14676 = Math.abs(chbIn5171 - chbIn5170),
    chbBind14677 = d3Format(
      `.${Number.isFinite(chbBind14676) && chbBind14676 > 0 ? Math.max(1, 2 - Math.floor(Math.log10(chbBind14676))) : 2}~f`,
    ),
    chbBind14678 = chbIn5174 === Jn.INTERVAL_CLOSED_LEFT,
    chbBind14679 = chbBind14678 || chbIn5172 === 0 ? "[" : "(",
    chbBind14680 = chbBind14678 && chbIn5172 !== chbIn5173 - 1 ? ")" : "]";
  return `${chbBind14679}${Number.isFinite(chbIn5170) ? chbBind14677(chbIn5170) : ""}, ${Number.isFinite(chbIn5171) ? chbBind14677(chbIn5171) : ""}${chbBind14680}`;
}
export function hSe(chbIn6509: any, chbIn6510: any) {
  let [chbBind16720, chbBind16721] = d3Min(chbIn6509),
    chbBind16722 =
      workbookHelper554(chbIn6510?.underflow) ??
      (chbBind16720 !== undefined && Number.isFinite(chbBind16720)
        ? chbBind16720
        : 0),
    chbBind16723 =
      workbookHelper554(chbIn6510?.overflow) ??
      (chbBind16721 !== undefined && Number.isFinite(chbBind16721)
        ? chbBind16721
        : chbBind16722 + 1);
  return chbBind16722 === chbBind16723
    ? [Math.floor(chbBind16722), Math.ceil(chbBind16722 + 1)]
    : chbBind16722 < chbBind16723
      ? [chbBind16722, chbBind16723]
      : [chbBind16723, chbBind16722];
}


export const valueExtent = hSe;
/** Compat alias for barrels. */
export const workbookHelper553 = binLabel;
