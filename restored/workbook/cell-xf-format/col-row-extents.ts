// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: column width / row height extent arrays (legacy Binding230–231 + Binding584).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  columnWidthPx,
  defaultCharWidth,
  lettersToColIndex,
  rowTokenToIndex,
  pointsToPixels,
  initAddressMetrics,
} from "../../utils/spreadsheet-address-utils";
export function computeColumnWidthsPx(xfIn1631: unknown, xfIn1632: unknown) {
  let xfBind7853 = columnWidthPx(
      typeof xfIn1631.defaultColWidth == "number" &&
        xfIn1631.defaultColWidth > 0
        ? xfIn1631.defaultColWidth
        : typeof xfIn1631.baseColWidth == "number" && xfIn1631.baseColWidth > 0
          ? xfIn1631.baseColWidth
          : defaultCharWidth,
      xfIn1632,
    ),
    xfBind7854 = [],
    xfBind7855 =
      xfIn1631.columns?.reduce(
        (xfIn14942, xfIn14943) =>
          Math.max(xfIn14942, (xfIn14943.max ?? xfIn14943.min ?? 1) - 1),
        0,
      ) ?? 0,
    xfBind7856 =
      xfIn1631.rows?.reduce((xfIn9813, xfIn9814) => {
        let xfBind20353 =
          xfIn9814.cells?.reduce(
            (xfIn15247, xfIn15248) =>
              Math.max(xfIn15247, lettersToColIndex(xfIn15248.address ?? "A1")),
            0,
          ) ?? 0;
        return Math.max(xfIn9813, xfBind20353);
      }, 0) ?? 0,
    xfBind7857 =
      xfIn1631.mergedCells?.reduce(
        (xfIn14146, xfIn14147) =>
          Math.max(
            xfIn14146,
            lettersToColIndex(xfIn14147.endAddress ?? xfIn14147.startAddress),
          ),
        0,
      ) ?? 0,
    xfBind7858 = Math.max(1, Math.max(xfBind7855, xfBind7856, xfBind7857) + 1);
  for (let xfBind23030 = 0; xfBind23030 < xfBind7858; xfBind23030++)
    xfBind7854.push(xfBind7853);
  for (let xfBind17850 of xfIn1631.columns ?? []) {
    let xfBind18738 = Math.max(0, (xfBind17850.min ?? 1) - 1),
      xfBind18739 = Math.max(
        xfBind18738,
        (xfBind17850.max ?? xfBind17850.min ?? 1) - 1,
      ),
      xfBind18740 = xfBind17850.hidden
        ? 0
        : columnWidthPx(xfBind17850.width, xfIn1632);
    for (
      let xfBind22801 = xfBind18738;
      xfBind22801 <= xfBind18739;
      xfBind22801++
    )
      xfBind22801 < xfBind7854.length &&
        (xfBind7854[xfBind22801] = xfBind18740);
  }
  return xfBind7854;
}
export function computeRowHeightsPx(xfIn2619: unknown) {
  let xfBind10067 =
      xfIn2619.defaultRowHeight && xfIn2619.defaultRowHeight !== 0
        ? xfIn2619.defaultRowHeight
        : 15,
    xfBind10068 = [],
    xfBind10069 =
      xfIn2619.rows?.reduce(
        (xfIn15487, xfIn15488) =>
          Math.max(xfIn15487, (xfIn15488.index ?? 1) - 1),
        0,
      ) ?? 0,
    xfBind10070 =
      xfIn2619.mergedCells?.reduce(
        (xfIn13713, xfIn13714) =>
          Math.max(
            xfIn13713,
            rowTokenToIndex(xfIn13714.endAddress ?? xfIn13714.startAddress) - 1,
          ),
        0,
      ) ?? 0,
    xfBind10071 = Math.max(1, Math.max(xfBind10069, xfBind10070) + 1);
  for (let xfBind22994 = 0; xfBind22994 < xfBind10071; xfBind22994++)
    xfBind10068.push(pointsToPixels(xfBind10067));
  for (let xfBind16627 of xfIn2619.rows ?? []) {
    let xfBind17335 = (xfBind16627.index ?? 1) - 1;
    if (!(xfBind17335 < 0 || xfBind17335 >= xfBind10068.length)) {
      if (xfBind16627.hidden) {
        xfBind10068[xfBind17335] = 0;
        continue;
      }
      (xfBind16627.customHeight || xfBind16627.height !== 0) &&
        xfBind16627.height != null &&
        (xfBind10068[xfBind17335] = pointsToPixels(xfBind16627.height));
    }
  }
  return xfBind10068;
}
export var ensureColRowExtentsInit = esmInit(() => {
  initAddressMetrics();
});
