// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map sheet A1 ranges to cells (legacy helper587 nest).
// Stage-3 wave-129.

import { parseSheetRangeRef } from "../chart-data-table";

export function normalizeSheetNameKey(srmIn11478: any) {
  if (!srmIn11478) return null;
  let srmBind21902 = srmIn11478.trim();
  return srmBind21902 ? srmBind21902.toLowerCase() : null;
}
export function mapSeriesNumericCells(
  srmIn5282: any,
  srmIn5283: any,
  srmIn5284: any,
) {
  return mapSheetRangeCells(srmIn5282, srmIn5283, srmIn5284, (srmIn5900) => {
    if (!srmIn5900 || srmIn5900.value == null || srmIn5900.value === "")
      return NaN;
    if (typeof srmIn5900.value == "number") return srmIn5900.value;
    if (typeof srmIn5900.value == "string") {
      let srmBind20824 = srmIn5900.value.trim();
      if (!srmBind20824) return NaN;
      let srmBind20825 = Number(srmBind20824);
      return Number.isFinite(srmBind20825) ? srmBind20825 : NaN;
    }
    return NaN;
  });
}
export function mapCategoryTextCells(
  srmIn7464: any,
  srmIn7465: any,
  srmIn7466: any,
) {
  return mapSheetRangeCells(srmIn7464, srmIn7465, srmIn7466, (srmIn8925) =>
    !srmIn8925 || srmIn8925.value == null
      ? ""
      : typeof srmIn8925.value == "string"
        ? srmIn8925.value
        : typeof srmIn8925.value == "number"
          ? String(srmIn8925.value)
          : "",
  );
}
export function mapSheetRangeCells(
  srmIn7111: any,
  srmIn7112: any,
  srmIn7113: any,
  srmIn7114: any,
) {
  let srmBind17449 = parseSheetRangeRef(srmIn7111);
  if (!srmBind17449) return [];
  let srmBind17450 = resolveSheetByName(
      srmIn7112,
      srmBind17449.sheetName,
      srmIn7113,
    ),
    srmBind17451 = [];
  for (
    let srmBind21270 = srmBind17449.startRow;
    srmBind21270 <= srmBind17449.endRow;
    srmBind21270++
  )
    for (
      let srmBind22574 = srmBind17449.startCol;
      srmBind22574 <= srmBind17449.endCol;
      srmBind22574++
    )
      srmBind17451.push(
        srmIn7114(getSheetCell(srmBind17450, srmBind21270, srmBind22574)),
      );
  return srmBind17451;
}
export function resolveSheetByName(
  srmIn10183: any,
  srmIn10184: any,
  srmIn10185: any,
) {
  if (srmIn10184) {
    let srmBind22150 = normalizeSheetNameKey(srmIn10184);
    if (srmBind22150) {
      let srmBind22843 = srmIn10183.get(srmBind22150);
      if (srmBind22843) return srmBind22843;
    }
  }
  return srmIn10185;
}
export function getSheetCell(
  srmIn14536: any,
  srmIn14537: any,
  srmIn14538: any,
) {
  return srmIn14536.__getCell(srmIn14537, srmIn14538);
}

export const _z = normalizeSheetNameKey;
export const GCe = resolveSheetByName;
export const KCe = getSheetCell;
export const HCe = mapSeriesNumericCells;
export const workbookHelper586 = mapCategoryTextCells;
export const workbookHelper587 = mapSheetRangeCells;
