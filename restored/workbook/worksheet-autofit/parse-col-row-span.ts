// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: parse A:C / 1:10 span addresses (legacy Dle / Ole).

import { lettersToColIndex, parseA1Range } from "../../utils/spreadsheet-address-utils";
export function parseColumnSpanAddress(afIn4213: unknown, afIn4214: unknown) {
  let afBind13263 = /^([A-Z]+):([A-Z]+)$/i.exec(afIn4213.trim());
  if (afBind13263) {
    let afBind19637 = afBind13263[1],
      afBind19638 = afBind13263[2];
    if (!afBind19637 || !afBind19638) return null;
    let afBind19639 = lettersToColIndex(afBind19637),
      afBind19640 = lettersToColIndex(afBind19638);
    return {
      startCol: Math.min(afBind19639, afBind19640),
      endCol: Math.max(afBind19639, afBind19640)
    };
  }
  let afBind13264 = afIn4214 ?? parseA1Range(afIn4213)?.bounds ?? null;
  return afBind13264 ? {
    startCol: afBind13264.startCol,
    endCol: afBind13264.endCol,
    rowStart: afBind13264.startRow,
    rowEnd: afBind13264.endRow
  } : null;
}
export function parseRowSpanAddress(afIn4837: unknown, afIn4838: unknown) {
  let afBind14216 = /^(\d+):(\d+)$/i.exec(afIn4837.trim());
  if (afBind14216) {
    let afBind20922 = Number(afBind14216[1]) - 1,
      afBind20923 = Number(afBind14216[2]) - 1;
    return {
      startRow: Math.min(afBind20922, afBind20923),
      endRow: Math.max(afBind20922, afBind20923)
    };
  }
  let afBind14217 = afIn4838 ?? parseA1Range(afIn4837)?.bounds ?? null;
  return afBind14217 ? {
    startRow: afBind14217.startRow,
    endRow: afBind14217.endRow,
    colStart: afBind14217.startCol,
    colEnd: afBind14217.endCol
  } : null;
}
