// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table style band helpers (region fill / borders / dyes).
// Stage-3 wave-112.

import { resolveTableCellStyleBands } from "./resolve-cell-style-bands-impl";
import { resolveTableStyleByName } from "./resolve-helpers";
import { tableHeaderRowCount, tableTotalsRowCount } from "../table-vo";
import {
  lettersToColIndex,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { resolveColorToCssRgba as workbookSt } from "../color-resolve";
import { tr } from "../presentation-protobuf";

const SPREADSHEET_ML_COLOR = { colorSpace: "spreadsheetml" };

void resolveTableCellStyleBands;
void resolveTableStyleByName;
void tableHeaderRowCount;
void tableTotalsRowCount;
void lettersToColIndex;
void rowTokenToIndex;
void workbookSt;
void tr;
void SPREADSHEET_ML_COLOR;

export function resolveTableRegionStyle(tsbIn12180: any, tsbIn12181: any) {
  let tsbBind22317 = tsbIn12180.tableStyles[tsbIn12181];
  if (tsbBind22317 != null) return tsbIn12180.dxfs[tsbBind22317];
}
export function lookupTableStyleByName(tsbIn13670: any) {
  return (
    resolveTableStyleByName(tsbIn13670) ??
    resolveTableStyleByName("TableStyleMedium2")
  );
}
export function tableBandFillHints(tsbIn5349: any) {
  let [tsbBind15038, tsbBind15039] = (tsbIn5349.ref ?? "").split(":"),
    tsbBind15040 = lettersToColIndex(tsbBind15038 || "A1"),
    tsbBind15041 = rowTokenToIndex(tsbBind15038 || "A1"),
    tsbBind15042 = tsbBind15039
      ? lettersToColIndex(tsbBind15039)
      : tsbBind15040,
    tsbBind15043 = tsbBind15039 ? rowTokenToIndex(tsbBind15039) : tsbBind15041,
    tsbBind15044 = tableHeaderRowCount(tsbIn5349),
    tsbBind15045 = tableTotalsRowCount(tsbIn5349);
  return {
    startRow: Math.min(tsbBind15041, tsbBind15043),
    endRow: Math.max(tsbBind15041, tsbBind15043),
    startCol: Math.min(tsbBind15040, tsbBind15042),
    endCol: Math.max(tsbBind15040, tsbBind15042),
    headerRows: tsbBind15044,
    totalRows: tsbBind15045,
  };
}
export function resolveBandFillCss(tsbIn11014: any, tsbIn11015: any) {
  if (
    !(
      !tsbIn11014 ||
      tsbIn11014.type !== tr.FILL_TYPE_SOLID ||
      !tsbIn11014.color
    )
  )
    return workbookSt(tsbIn11014.color, tsbIn11015, SPREADSHEET_ML_COLOR);
}
export function resolveBorderStroke(tsbIn9845: any, tsbIn9846: any) {
  if (tsbIn9845?.style)
    return {
      style: tsbIn9845.style,
      colorCss: workbookSt(tsbIn9845.color, tsbIn9846, {
        ...SPREADSHEET_ML_COLOR,
        defaultFill: "#cccccc",
      }),
    };
}
export function pickStripeStyle(
  tsbIn10613: any,
  tsbIn10614: any,
  tsbIn10615: any,
) {
  if (tsbIn10614 && tsbIn10615)
    return tsbIn10613 % 2 == 0 ? tsbIn10614 : tsbIn10615;
  if (!(!tsbIn10614 && !tsbIn10615))
    return tsbIn10613 % 2 == 0 ? (tsbIn10614 ?? tsbIn10615) : undefined;
}
export function mergeBandFont(tsbIn7227: any, tsbIn7228: any) {
  let tsbBind17588 = tsbIn7228?.font;
  if (!tsbBind17588) return tsbIn7227;
  let tsbBind17589 = tsbIn7227
    ? {
        ...tsbIn7227,
      }
    : {};
  return (
    tsbBind17588.bold != null && (tsbBind17589.bold = tsbBind17588.bold),
    tsbBind17588.fill?.color && (tsbBind17589.color = tsbBind17588.fill.color),
    tsbBind17589.bold === undefined && !tsbBind17589.color
      ? undefined
      : tsbBind17589
  );
}
export function applyOuterBorders(
  tsbIn9189: any,
  tsbIn9190: any,
  tsbIn9191: any,
) {
  let tsbBind19761 = tsbIn9190?.border;
  if (tsbBind19761)
    for (let tsbBind21590 of ["top", "bottom", "left", "right"]) {
      let tsbBind22789 = resolveBorderStroke(
        tsbBind19761[tsbBind21590],
        tsbIn9191,
      );
      tsbBind22789 && (tsbIn9189[tsbBind21590] = tsbBind22789);
    }
}
export function applyTableBandBorders(
  tsbIn3271: any,
  tsbIn3272: any,
  tsbIn3273: any,
  tsbIn3274: any,
  tsbIn3275: any,
  tsbIn3276: any,
) {
  let tsbBind11513 = tsbIn3275?.border;
  if (tsbBind11513) {
    if (tsbIn3273 === tsbIn3272.startRow) {
      let tsbBind22754 = resolveBorderStroke(tsbBind11513.top, tsbIn3276);
      tsbBind22754 && (tsbIn3271.top = tsbBind22754);
    } else {
      let tsbBind22615 = resolveBorderStroke(
        tsbBind11513.horizontal,
        tsbIn3276,
      );
      tsbBind22615 && (tsbIn3271.top = tsbBind22615);
    }
    if (tsbIn3273 === tsbIn3272.endRow) {
      let tsbBind22647 = resolveBorderStroke(tsbBind11513.bottom, tsbIn3276);
      tsbBind22647 && (tsbIn3271.bottom = tsbBind22647);
    }
    if (tsbIn3274 === tsbIn3272.startCol) {
      let tsbBind22724 = resolveBorderStroke(tsbBind11513.left, tsbIn3276);
      tsbBind22724 && (tsbIn3271.left = tsbBind22724);
    } else {
      let tsbBind22648 = resolveBorderStroke(tsbBind11513.vertical, tsbIn3276);
      tsbBind22648 && (tsbIn3271.left = tsbBind22648);
    }
    if (tsbIn3274 === tsbIn3272.endCol) {
      let tsbBind22690 = resolveBorderStroke(tsbBind11513.right, tsbIn3276);
      tsbBind22690 && (tsbIn3271.right = tsbBind22690);
    }
  }
}
export function resolveTableBandFills(tsbIn1570: any, tsbIn1571: any) {
  return !tsbIn1570 || tsbIn1570.length === 0
    ? []
    : tsbIn1570
        .map((item) => {
          let tsbBind9589 = lookupTableStyleByName(item.style?.name);
          if (!tsbBind9589) return;
          let tsbBind9590 = tableBandFillHints(item),
            tsbBind9591 = resolveTableRegionStyle(tsbBind9589, "headerRow"),
            tsbBind9592 = resolveTableRegionStyle(
              tsbBind9589,
              "firstRowStripe",
            ),
            tsbBind9593 = resolveTableRegionStyle(
              tsbBind9589,
              "firstColumnStripe",
            ),
            tsbBind9594 = resolveTableRegionStyle(tsbBind9589, "totalRow");
          return {
            ...tsbBind9590,
            showRowStripes: !!item.style?.showRowStripes,
            showColumnStripes: !!item.style?.showColumnStripes,
            showFirstColumn: !!item.style?.showFirstColumn,
            showLastColumn: !!item.style?.showLastColumn,
            tableStyle: tsbBind9589,
            fills: {
              header: resolveBandFillCss(tsbBind9591?.fill, tsbIn1571),
              rowStripe: resolveBandFillCss(tsbBind9592?.fill, tsbIn1571),
              columnStripe: resolveBandFillCss(tsbBind9593?.fill, tsbIn1571),
              total: resolveBandFillCss(tsbBind9594?.fill, tsbIn1571),
            },
          };
        })
        .filter(
          (item) =>
            !!item &&
            item.startCol <= item.endCol &&
            item.startRow <= item.endRow &&
            (item.headerRows > 0 || item.endRow >= item.startRow),
        );
}
export function mergeTableBandFonts(
  tsbIn4257: any,
  tsbIn4258: any,
  tsbIn4259: any,
  tsbIn4260: any,
) {
  let tsbBind13316 = resolveTableCellStyleBands(
    tsbIn4257,
    tsbIn4258,
    tsbIn4259,
  );
  if (!tsbBind13316) return;
  let tsbBind13317 = resolveBandFillCss(tsbBind13316.whole?.fill, tsbIn4260),
    tsbBind13318 = mergeBandFont(undefined, tsbBind13316.whole),
    tsbBind13319 = {};
  applyTableBandBorders(
    tsbBind13319,
    tsbIn4257,
    tsbIn4258,
    tsbIn4259,
    tsbBind13316.whole,
    tsbIn4260,
  );
  let tsbBind13320 = [
    tsbBind13316.rowStripe,
    tsbBind13316.columnStripe,
    tsbBind13316.firstColumn,
    tsbBind13316.lastColumn,
    tsbBind13316.header,
    tsbBind13316.total,
  ];
  for (let tsbBind21838 of tsbBind13320) {
    let tsbBind22347 = resolveBandFillCss(tsbBind21838?.fill, tsbIn4260);
    tsbBind22347 && (tsbBind13317 = tsbBind22347);
    tsbBind13318 = mergeBandFont(tsbBind13318, tsbBind21838);
    applyOuterBorders(tsbBind13319, tsbBind21838, tsbIn4260);
  }
  return {
    fillCss: tsbBind13317,
    font: tsbBind13318,
    borders: tsbBind13319,
  };
}
export function mergeAllBandFonts(
  tsbIn6072: any,
  tsbIn6073: any,
  tsbIn6074: any,
) {
  let tsbBind16123 = resolveTableCellStyleBands(
    tsbIn6072,
    tsbIn6073,
    tsbIn6074,
  );
  if (!tsbBind16123) return;
  let tsbBind16124 = mergeBandFont(undefined, tsbBind16123.whole);
  return (
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.rowStripe)),
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.columnStripe)),
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.firstColumn)),
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.lastColumn)),
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.header)),
    (tsbBind16124 = mergeBandFont(tsbBind16124, tsbBind16123.total)),
    tsbBind16124
  );
}
export function tableBandBorderMap(
  tsbIn13165: any,
  tsbIn13166: any,
  tsbIn13167: any,
  tsbIn13168: any,
) {
  return (
    mergeTableBandFonts(tsbIn13165, tsbIn13166, tsbIn13167, tsbIn13168)
      ?.borders ?? {}
  );
}

export const cye = lookupTableStyleByName;
export const lye = tableBandFillHints;
export const uye = applyOuterBorders;
export const dye = applyTableBandBorders;
export const fye = resolveTableBandFills;
export const mye = mergeAllBandFonts;
export const hye = tableBandBorderMap;
