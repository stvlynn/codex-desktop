// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: used-range A1 + format→proto (legacy bgt/vgt).
// Stage-3 wave-133.

import {
  lettersToColIndex,
  rowTokenToIndex,
  colIndexToLetters,
} from "../../utils/spreadsheet-address-utils";
import { SpreadsheetFont } from "../stylesheet";

export function vgt(eqIn3866: any) {
  let eqBind12704 = eqIn3866.format,
    eqBind12705 = eqBind12704.fill?.toProto(),
    eqBind12706 = new SpreadsheetFont();
  return (
    (eqBind12706.bold = eqBind12704.font.bold),
    (eqBind12706.italic = eqBind12704.font.italic),
    (eqBind12706.size = eqBind12704.font.size),
    (eqBind12706.name = eqBind12704.font.name),
    (eqBind12706.color = eqBind12704.font.color ?? undefined),
    {
      fill: eqBind12705,
      font: eqBind12706.toProto(),
      border: eqBind12704.borders.toProto(),
      numberFormat: eqBind12704.numberFormat,
      wrapText: eqBind12704.wrapText,
      horizontalAlignment: eqBind12704.horizontalAlignment,
      styleId: eqBind12704.styleId,
    }
  );
}
export function bgt(eqIn5278: any) {
  let eqBind14875 = -1,
    eqBind14876 = -1;
  for (let eqBind17230 of eqIn5278.rows ?? [])
    for (let eqBind18096 of eqBind17230.cells ?? [])
      if (eqBind18096.value !== "" && eqBind18096.value != null) {
        if (!eqBind18096.address) continue;
        let eqBind20328 = lettersToColIndex(eqBind18096.address),
          eqBind20329 = rowTokenToIndex(eqBind18096.address);
        eqBind20328 > eqBind14875 && (eqBind14875 = eqBind20328);
        eqBind20329 > eqBind14876 && (eqBind14876 = eqBind20329);
      }
  return eqBind14875 < 0 || eqBind14876 < 0
    ? null
    : `A1:${colIndexToLetters(eqBind14875)}${eqBind14876 + 1}`;
}

export const computeUsedRangeA1 = bgt;
export const formatToCellStyleProto = vgt;
