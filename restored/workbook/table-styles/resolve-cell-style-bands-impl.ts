// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table cell style-band resolver.
// Stage-3 wave-106 / wave-111.

import { tsbH } from "./boundary-hooks-cell-bands";

void tsbH;

/** Stripe alternation for odd/even band styles. */
function pickStripeBand(tsbIn10613: any, tsbIn10614: any, tsbIn10615: any) {
  if (tsbIn10614 && tsbIn10615)
    return tsbIn10613 % 2 == 0 ? tsbIn10614 : tsbIn10615;
  if (!(!tsbIn10614 && !tsbIn10615))
    return tsbIn10613 % 2 == 0 ? (tsbIn10614 ?? tsbIn10615) : undefined;
}

export function resolveTableCellStyleBands(
  tsbIn1663: any,
  tsbIn1664: any,
  tsbIn1665: any,
) {
  if (
    tsbIn1664 < tsbIn1663.startRow ||
    tsbIn1664 > tsbIn1663.endRow ||
    tsbIn1665 < tsbIn1663.startCol ||
    tsbIn1665 > tsbIn1663.endCol
  )
    return;
  let tsbBind7936 = tsbIn1663.tableStyle,
    tsbBind7937 = tsbH.regionStyle(tsbBind7936, "wholeTable"),
    tsbBind7938 = tsbH.regionStyle(tsbBind7936, "headerRow"),
    tsbBind7939 = tsbH.regionStyle(tsbBind7936, "totalRow"),
    tsbBind7940 = tsbH.regionStyle(tsbBind7936, "firstColumn"),
    tsbBind7941 = tsbH.regionStyle(tsbBind7936, "lastColumn"),
    tsbBind7942 = tsbH.regionStyle(tsbBind7936, "firstRowStripe"),
    tsbBind7943 = tsbH.regionStyle(tsbBind7936, "secondRowStripe"),
    tsbBind7944 = tsbH.regionStyle(tsbBind7936, "firstColumnStripe"),
    tsbBind7945 = tsbH.regionStyle(tsbBind7936, "secondColumnStripe"),
    tsbBind7946 = tsbIn1663.startRow + tsbIn1663.headerRows,
    tsbBind7947 = tsbIn1663.endRow - tsbIn1663.totalRows,
    tsbBind7948 =
      tsbIn1664 >= tsbIn1663.startRow &&
      tsbIn1664 < tsbIn1663.startRow + tsbIn1663.headerRows,
    tsbBind7949 =
      tsbIn1663.totalRows > 0 &&
      tsbIn1664 >= tsbIn1663.endRow - tsbIn1663.totalRows + 1,
    tsbBind7950 =
      !tsbBind7948 &&
      !tsbBind7949 &&
      tsbIn1664 >= tsbBind7946 &&
      tsbIn1664 <= tsbBind7947;
  return {
    whole: tsbBind7937,
    rowStripe:
      tsbBind7950 && tsbIn1663.showRowStripes
        ? pickStripeBand(tsbIn1664 - tsbBind7946, tsbBind7942, tsbBind7943)
        : undefined,
    columnStripe:
      tsbBind7950 && tsbIn1663.showColumnStripes
        ? pickStripeBand(
            tsbIn1665 - tsbIn1663.startCol,
            tsbBind7944,
            tsbBind7945,
          )
        : undefined,
    firstColumn:
      tsbIn1663.showFirstColumn && tsbIn1665 === tsbIn1663.startCol
        ? tsbBind7940
        : undefined,
    lastColumn:
      tsbIn1663.showLastColumn && tsbIn1665 === tsbIn1663.endCol
        ? tsbBind7941
        : undefined,
    header: tsbBind7948 ? tsbBind7938 : undefined,
    total: tsbBind7949 ? tsbBind7939 : undefined,
  };
}

/** Legacy alias. */
export const workbookHelper384 = resolveTableCellStyleBands;
