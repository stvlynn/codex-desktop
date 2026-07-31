// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: write pivot layout to sheet (jne…Rne).
import {
  boundsSize,
  formatA1,
  formatA1Range,
} from "../../utils/spreadsheet-address-utils";
import { comparePivotKeys } from "./pivot-layout-helpers";

export function writePivotLayoutToSheet(pivotIn2798: any, pivotIn2799: any) {
  let { pivot, startRow, startCol } = pivotIn2798,
    { matrix, headerRows, headerCols } = pivotIn2799,
    pivotBind10494 = matrix.length,
    pivotBind10495 = matrix[0]?.length ?? 0;
  if (pivotBind10494 === 0 || pivotBind10495 === 0) return;
  let pivotBind10496 = {
      startRow,
      startCol,
      endRow: startRow + pivotBind10494 - 1,
      endCol: startCol + pivotBind10495 - 1,
    },
    pivotBind10497 = formatA1Range(pivotBind10496);
  pivot.__updateLocation({
    reference: pivotBind10497,
    firstHeaderRow: Math.max(0, headerRows - 1),
    firstDataRow: headerRows,
    firstHeaderColumn: Math.max(0, headerCols - 1),
    firstDataColumn: headerCols,
  });
  let pivotBind10498 = pivot.worksheet,
    pivotBind10499 = pivotBind10498.getRange(pivotBind10497);
  pivotBind10499.values = matrix;
  paintPivotHeaderRow(pivotIn2798, pivotIn2799, pivotBind10496);
  paintPivotColumnHeaders(pivotIn2798, pivotBind10496);
  writePivotGrandTotalRow(pivotIn2798, pivotIn2799, pivotBind10496);
  let pivotBind10500 = boundsSize(pivotBind10496);
  for (
    let pivotBind22583 = 0;
    pivotBind22583 < pivotBind10500.rows;
    pivotBind22583++
  )
    pivotBind10498.__getOrCreateRow(pivotBind10496.startRow + pivotBind22583);
}
export function paintPivotHeaderRow(
  pivotIn2002: any,
  pivotIn2003: any,
  pivotIn2004: any,
) {
  let pivotBind8819 = pivotIn2002.pivot,
    pivotBind8820 = pivotIn2004.startRow + pivotIn2003.headerRows - 1,
    pivotBind8821 =
      pivotIn2004.startCol + Math.max(0, pivotIn2003.headerCols - 1);
  for (
    let pivotBind19804 = pivotIn2004.startRow;
    pivotBind19804 <= pivotBind8820;
    pivotBind19804++
  )
    for (
      let pivotBind21092 = pivotIn2004.startCol;
      pivotBind21092 <= pivotIn2004.endCol;
      pivotBind21092++
    )
      pivotBind8819.__setPivotCellRenderHint(pivotBind19804, pivotBind21092, {
        type: "headerRow",
        indentLevel: 0,
      });
  let pivotBind8822 = pivotIn2004.startRow + pivotIn2003.headerRows;
  for (
    let pivotBind15884 = 0;
    pivotBind15884 < pivotIn2003.rows.length;
    pivotBind15884++
  ) {
    let pivotBind16841 = pivotBind8822 + pivotBind15884,
      pivotBind16842 = pivotIn2003.rows[pivotBind15884]?.values.length ?? 1,
      pivotBind16843 = pivotHeaderDepth(pivotBind16842),
      pivotBind16844 = Math.max(0, pivotBind16842 - 1);
    for (
      let pivotBind20220 = pivotIn2004.startCol;
      pivotBind20220 <= pivotIn2004.endCol;
      pivotBind20220++
    ) {
      let pivotBind21613 = pivotBind20220 <= pivotBind8821;
      pivotBind8819.__setPivotCellRenderHint(pivotBind16841, pivotBind20220, {
        type: pivotBind16843,
        indentLevel: pivotBind21613 ? pivotBind16844 : 0,
      });
    }
  }
  if (pivotIn2002.rowGrandTotals && pivotIn2003.rows.length > 0) {
    let pivotBind19865 = pivotBind8822 + pivotIn2003.rows.length;
    for (
      let pivotBind21123 = pivotIn2004.startCol;
      pivotBind21123 <= pivotIn2004.endCol;
      pivotBind21123++
    )
      pivotBind8819.__setPivotCellRenderHint(pivotBind19865, pivotBind21123, {
        type: "totalRow",
        indentLevel: 0,
      });
  }
}
export function pivotHeaderDepth(pivotIn10511: any) {
  return pivotIn10511 <= 1
    ? "firstSubtotalRow"
    : pivotIn10511 === 2
      ? "secondRowSubheading"
      : "wholeTable";
}
export function paintPivotColumnHeaders(pivotIn1384: any, pivotIn1385: any) {
  let pivotBind7165 = Array.isArray(pivotIn1384.pivotProto.pageFields)
    ? pivotIn1384.pivotProto.pageFields
    : [];
  if (pivotBind7165.length === 0) return;
  let pivotBind7166 = pivotIn1384.pivot.worksheet,
    pivotBind7167 = pivotBind7165.length + 1,
    pivotBind7168 = Math.max(0, pivotIn1385.startRow - pivotBind7167);
  for (
    let pivotBind10346 = 0;
    pivotBind10346 < pivotBind7165.length;
    pivotBind10346++
  ) {
    let pivotBind10704 = pivotBind7165[pivotBind10346],
      pivotBind10705 = pivotBind10704?.field;
    if (typeof pivotBind10705 != "number") continue;
    let pivotBind10706 = pivotBind10704?.name,
      pivotBind10707 = pivotIn1384.pivotFields[pivotBind10705],
      pivotBind10708 =
        pivotIn1384.cacheProto.fields?.[
          pivotBind10707?.index ?? pivotBind10705
        ],
      pivotBind10709 = flattenPivotValues(
        pivotBind10706,
        pivotBind10707?.name,
        pivotBind10708?.name,
        `Field ${pivotBind10705 + 1}`,
      ),
      pivotBind10710 = writePivotMatrixCells(pivotIn1384, pivotBind10705) ?? "",
      pivotBind10711 = pivotBind7168 + pivotBind10346,
      pivotBind10712 = pivotIn1385.startCol,
      pivotBind10713 = pivotIn1385.startCol + 1;
    pivotBind7166.getRange(formatA1(pivotBind10711, pivotBind10712)).values = [
      [pivotBind10709],
    ];
    pivotBind7166.getRange(formatA1(pivotBind10711, pivotBind10713)).values = [
      [pivotBind10710],
    ];
    pivotIn1384.pivot.__setPivotCellRenderHint(pivotBind10711, pivotBind10712, {
      type: "pageFieldLabels",
      indentLevel: 0,
    });
    pivotIn1384.pivot.__setPivotCellRenderHint(pivotBind10711, pivotBind10713, {
      type: "pageFieldValues",
      indentLevel: 0,
    });
  }
  let pivotBind7169 = pivotBind7168 + pivotBind7165.length;
  if (pivotBind7169 < pivotIn1385.startRow) {
    let pivotBind19181 = formatA1Range({
      startRow: pivotBind7169,
      endRow: pivotBind7169,
      startCol: pivotIn1385.startCol,
      endCol: Math.max(pivotIn1385.startCol, pivotIn1385.startCol + 1),
    });
    pivotBind7166.getRange(pivotBind19181).values = [["", ""]];
  }
}
export function flattenPivotValues(...pivotIn10679: any[]) {
  for (let pivotBind22374 of pivotIn10679) {
    let pivotBind22639 = pivotBind22374?.trim();
    if (pivotBind22639 && pivotBind22639.length > 0) return pivotBind22639;
  }
  return "";
}
export function writePivotMatrixCells(pivotIn1975: any, pivotIn1976: any) {
  for (let pivotBind16486 of pivotIn1975.filters) {
    if (pivotBind16486?.field !== pivotIn1976) continue;
    let pivotBind17118 = comparePivotKeys(pivotBind16486);
    if (pivotBind17118?.kind === "manualFilter") {
      let pivotBind19866 = pivotBind17118.payload.selectedItems;
      if (Array.isArray(pivotBind19866) && pivotBind19866.length > 0) {
        let pivotBind22528 = pivotBind19866[0];
        if (pivotBind22528 != null) return String(pivotBind22528);
      }
    }
  }
  let pivotBind8732 = pivotIn1975.pivotFields[pivotIn1976];
  if (!pivotBind8732) return null;
  let pivotBind8733 = Array.isArray(pivotBind8732.items)
    ? pivotBind8732.items
    : [];
  if (pivotBind8733.length === 0) return null;
  let pivotBind8734 =
      pivotIn1975.cacheProto.fields?.[pivotBind8732.index ?? pivotIn1976],
    pivotBind8735 = Array.isArray(pivotBind8734?.sharedItems?.values)
      ? pivotBind8734?.sharedItems?.values
      : [],
    pivotBind8736 = pivotBind8733.filter(
      (item) => item?.hidden !== true && typeof item?.index == "number",
    );
  if (
    pivotBind8736.length === 0 ||
    (pivotBind8736.length > 1 && pivotBind8732.showAll !== false)
  )
    return null;
  let pivotBind8737 = pivotBind8736[0];
  if (!pivotBind8737) return null;
  if (pivotBind8737.name != null && pivotBind8737.name !== "")
    return pivotBind8737.name;
  let pivotBind8738 = pivotBind8735[pivotBind8737.index];
  return pivotBind8738 == null ? null : String(pivotBind8738);
}
export function writePivotGrandTotalRow(
  pivotIn3713: any,
  pivotIn3714: any,
  pivotIn3715: any,
) {
  let pivotBind12381 = pivotIn3715.startRow + pivotIn3714.headerRows;
  if (pivotBind12381 > pivotIn3715.endRow) return;
  let pivotBind12382 = pivotIn3713.pivot.worksheet;
  for (
    let pivotBind14437 = 0;
    pivotBind14437 < pivotIn3714.columnSegments.length;
    pivotBind14437++
  ) {
    let pivotBind15485 = pivotIn3714.columnSegments[pivotBind14437];
    if (!pivotBind15485) continue;
    let pivotBind15486 =
        pivotIn3713.dataFields[pivotBind15485.dataFieldIndex]?.proto
          .numberFormatId,
      pivotBind15487 = writePivotGrandTotalCol(pivotIn3713, pivotBind15486);
    if (!pivotBind15487) continue;
    let pivotBind15488 =
        pivotIn3715.startCol + pivotIn3714.headerCols + pivotBind14437,
      pivotBind15489 = formatA1Range({
        startRow: pivotBind12381,
        endRow: pivotIn3715.endRow,
        startCol: pivotBind15488,
        endCol: pivotBind15488,
      });
    pivotBind12382.getRange(pivotBind15489).format.numberFormat =
      pivotBind15487;
  }
}
export function writePivotGrandTotalCol(pivotIn5345: any, pivotIn5346: any) {
  if (pivotIn5346 == null) return null;
  switch (pivotIn5346) {
    case 10:
      return "0.00%";
    case 164:
      return "$#,##0.00";
    case 165:
      return "0.0";
    case 166:
      return "yyyy-mm-dd";
    default:
      return (
        pivotIn5345.pivot.worksheet.workbook
          .getStyleRegistry()
          .getNumberFormatCode(pivotIn5346) ?? null
      );
  }
}
