// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches leaf peels (pivot-num-fmt-map.ts).

import { parseA1Range } from "../../utils/spreadsheet-address-utils";

// Stage-3 wave-47: peeled PivotCaches helper.
export function collectPivotSourceNumFmtIds(
  worksheet: any,
  address: unknown,
  fieldCount: number,
): any {
  let pivotBind9772 = parseA1Range(address);
  if (!pivotBind9772 || fieldCount <= 0) return new Map();
  let pivotBind9773 = new Map(),
    pivotBind9774 = worksheet.workbook.getStyleRegistry(),
    pivotBind9775 = pivotBind9772.bounds.startRow + 1,
    pivotBind9776 = pivotBind9772.bounds.endRow;
  for (let pivotBind12863 = 0; pivotBind12863 < fieldCount; pivotBind12863++) {
    let pivotBind13315 = pivotBind9772.bounds.startCol + pivotBind12863;
    for (
      let pivotBind14621 = pivotBind9775;
      pivotBind14621 <= pivotBind9776;
      pivotBind14621++
    ) {
      let pivotBind15266 =
        worksheet.__getLogicalStyleIndex(pivotBind14621, pivotBind13315) ??
        worksheet.__getCell(pivotBind14621, pivotBind13315)?.styleIndex;
      if (typeof pivotBind15266 != "number") continue;
      let pivotBind15267 =
        pivotBind9774.describe(pivotBind15266).numberFormatId;
      if (typeof pivotBind15267 == "number" && pivotBind15267 !== 0) {
        pivotBind9773.set(pivotBind12863, pivotBind15267);
        break;
      }
    }
  }
  return pivotBind9773;
}
