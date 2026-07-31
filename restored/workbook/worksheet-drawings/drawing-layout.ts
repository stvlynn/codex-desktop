// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: worksheet drawing-layout helpers (legacy Lve + Binding790–803 / Rve).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressUtils,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import { ensureWorksheetDrawingsInit } from "./ensure-worksheet-drawings-init";
import { worksheetDrawings } from "./drawing-bindings";

export const drawingLayout: Record<string, any> = Object.create(null);

function getChartDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.ChartDrawing;
}
function getWorksheetImageDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.WorksheetImageDrawing;
}

export function applyWorksheetDrawingLayout(
  wlIn2800: any,
  wlIn2801: any,
  wlIn2802: any = {},
): void {
  ensureDrawingLayoutInit();
  if (wlIn2801.length === 0) return;
  let wlBind10503 = wlIn2800.__getViewportLayout(),
    wlBind10504 = drawingLayout.resolveFrame(wlBind10503, wlIn2802.frame),
    wlBind10505 = Number.isFinite(wlIn2802.gap)
      ? wlIn2802.gap
      : drawingLayout.defaultGap,
    wlBind10506 = Number.isFinite(wlIn2802.padding)
      ? wlIn2802.padding
      : drawingLayout.defaultPadding,
    wlBind10507 = wlIn2802.direction ?? "vertical",
    wlBind10508 = wlIn2802.align ?? "start";
  drawingLayout
    .layoutItems(wlIn2801, {
      frame: wlBind10504,
      gap: wlBind10505,
      padding: wlBind10506,
      direction: wlBind10507,
      align: wlBind10508,
      columns: wlIn2802.columns,
      layout: wlBind10503,
    })
    .forEach((item, index) => {
      let wlBind17417 = wlIn2801[index];
      if (!wlBind17417) return;
      let { left, top, width, height, hasToAnchor } = item,
        wlBind17418 = drawingLayout.pxToAnchor(wlBind10503, left, top);
      if (((wlBind17417.anchor.from = wlBind17418), hasToAnchor)) {
        let wlBind22645 = drawingLayout.pxToAnchor(
          wlBind10503,
          left + width,
          top + height,
        );
        wlBind17417.anchor.to = wlBind22645;
      }
    });
}

export const ensureDrawingLayoutInit = esmInit(() => {
  initAddressUtils();
  ensureWorksheetDrawingsInit();
  drawingLayout.defaultGap = 16;
  drawingLayout.defaultPadding = 24;
  drawingLayout.chartDefaultSize = {
    width: 480,
    height: 280,
  };
  drawingLayout.shapeDefaultSize = {
    width: 260,
    height: 140,
  };
  drawingLayout.imageDefaultSize = {
    width: 120,
    height: 80,
  };
  drawingLayout.layoutItems = (wlIn679: any, wlIn680: any) => {
    let { frame, gap, padding, direction, align, columns, layout } = wlIn680,
      wlBind4929 = Math.max(0, frame.width - padding * 2),
      wlBind4930 = Math.max(0, frame.height - padding * 2),
      wlBind4931 = frame.left + padding,
      wlBind4932 = frame.top + padding;
    if (direction === "horizontal") {
      let wlBind13959 = wlBind4931;
      return wlIn679.map((item) => {
        let { rect, hasToAnchor } = drawingLayout.measureDrawing(item, layout),
          wlBind15155 =
            wlBind4932 +
            drawingLayout.alignOffset(wlBind4930, rect.height, align),
          wlBind15156 = {
            left: wlBind13959,
            top: wlBind15155,
            width: rect.width,
            height: rect.height,
            hasToAnchor,
          };
        return ((wlBind13959 += rect.width + gap), wlBind15156);
      });
    }
    if (direction === "grid") {
      let wlBind9513 =
          columns && Number.isFinite(columns) && columns > 0
            ? Math.floor(columns)
            : Math.max(1, Math.ceil(Math.sqrt(wlIn679.length))),
        wlBind9514 = Math.max(1, Math.ceil(wlIn679.length / wlBind9513)),
        wlBind9515 =
          wlBind9513 > 0
            ? (wlBind4929 - gap * (wlBind9513 - 1)) / wlBind9513
            : wlBind4929,
        wlBind9516 =
          wlBind9514 > 0
            ? (wlBind4930 - gap * (wlBind9514 - 1)) / wlBind9514
            : wlBind4930;
      return wlIn679.map((item, index) => {
        let { rect, hasToAnchor } = drawingLayout.measureDrawing(item, layout),
          wlBind13569 = index % wlBind9513,
          wlBind13570 = Math.floor(index / wlBind9513),
          wlBind13571 = wlBind4931 + wlBind13569 * (wlBind9515 + gap),
          wlBind13572 = wlBind4932 + wlBind13570 * (wlBind9516 + gap);
        return {
          left:
            wlBind13571 +
            drawingLayout.alignOffset(wlBind9515, rect.width, align),
          top:
            wlBind13572 +
            drawingLayout.alignOffset(wlBind9516, rect.height, align),
          width: rect.width,
          height: rect.height,
          hasToAnchor,
        };
      });
    }
    let wlBind4933 = wlBind4932;
    return wlIn679.map((item) => {
      let { rect, hasToAnchor } = drawingLayout.measureDrawing(item, layout),
        wlBind15982 = {
          left:
            wlBind4931 +
            drawingLayout.alignOffset(wlBind4929, rect.width, align),
          top: wlBind4933,
          width: rect.width,
          height: rect.height,
          hasToAnchor,
        };
      return ((wlBind4933 += rect.height + gap), wlBind15982);
    });
  };
  drawingLayout.measureDrawing = (wlIn2358: any, wlIn2359: any) => {
    let wlBind9528 = wlIn2358.anchor,
      wlBind9529 = wlBind9528.from,
      wlBind9530 = wlBind9528.to,
      wlBind9531 = !!wlBind9530,
      wlBind9532 =
        drawingLayout.offsetAt(wlIn2359.colOffsetsRawPx, wlBind9529.col) +
        (wlBind9529.colOffsetPx ?? 0),
      wlBind9533 =
        drawingLayout.offsetAt(wlIn2359.rowOffsetsPx, wlBind9529.row) +
        (wlBind9529.rowOffsetPx ?? 0),
      wlBind9534 = wlBind9528.extent?.widthPx,
      wlBind9535 = wlBind9528.extent?.heightPx;
    if ((wlBind9534 == null || wlBind9535 == null) && wlBind9530) {
      let wlBind19160 =
          drawingLayout.offsetAt(wlIn2359.colOffsetsRawPx, wlBind9530.col) +
          (wlBind9530.colOffsetPx ?? 0),
        wlBind19161 =
          drawingLayout.offsetAt(wlIn2359.rowOffsetsPx, wlBind9530.row) +
          (wlBind9530.rowOffsetPx ?? 0);
      wlBind9534 = wlBind19160 - wlBind9532;
      wlBind9535 = wlBind19161 - wlBind9533;
    }
    let wlBind9536 = drawingLayout.defaultSizeFor(wlIn2358);
    return {
      rect: {
        left: wlBind9532,
        top: wlBind9533,
        width: wlBind9534 && wlBind9534 > 0 ? wlBind9534 : wlBind9536.width,
        height: wlBind9535 && wlBind9535 > 0 ? wlBind9535 : wlBind9536.height,
      },
      hasToAnchor: wlBind9531,
    };
  };
  drawingLayout.defaultSizeFor = (wlIn15626: any) =>
    drawingLayout.isChartDrawing(wlIn15626)
      ? drawingLayout.chartDefaultSize
      : drawingLayout.isImageDrawing(wlIn15626)
        ? drawingLayout.imageDefaultSize
        : drawingLayout.shapeDefaultSize;
  drawingLayout.isChartDrawing = (wlIn16262: any) =>
    wlIn16262 instanceof (getChartDrawingClass() as any);
  drawingLayout.isImageDrawing = (wlIn16263: any) =>
    wlIn16263 instanceof (getWorksheetImageDrawingClass() as any);
  drawingLayout.resolveFrame = (wlIn3146: any, wlIn3147: any) => {
    if (!wlIn3147)
      return {
        left: 0,
        top: 0,
        width: wlIn3146.viewTotalWidthPx,
        height: wlIn3146.totalHeightPx,
      };
    if ("startCell" in wlIn3147) {
      let wlBind14927 = parseA1Range(wlIn3147.startCell);
      return wlBind14927
        ? {
            left: drawingLayout.offsetAt(
              wlIn3146.colOffsetsRawPx,
              wlBind14927.bounds.startCol,
            ),
            top: drawingLayout.offsetAt(
              wlIn3146.rowOffsetsPx,
              wlBind14927.bounds.startRow,
            ),
            width: wlIn3147.width,
            height: wlIn3147.height,
          }
        : {
            left: 0,
            top: 0,
            width: wlIn3147.width,
            height: wlIn3147.height,
          };
    }
    return wlIn3147;
  };
  drawingLayout.pxToAnchor = (wlIn7153, wlIn7154, wlIn7155) => {
    let wlBind17506 = drawingLayout.indexOffsetAt(
        wlIn7153.colOffsetsRawPx,
        wlIn7154,
      ),
      wlBind17507 = drawingLayout.indexOffsetAt(
        wlIn7153.rowOffsetsPx,
        wlIn7155,
      );
    return {
      row: wlBind17507.index,
      col: wlBind17506.index,
      rowOffsetPx: wlBind17507.offset,
      colOffsetPx: wlBind17506.offset,
    };
  };
  drawingLayout.alignOffset = (wlIn10711, wlIn10712, wlIn10713) => {
    let wlBind21221 = Math.max(0, wlIn10711 - wlIn10712);
    return wlIn10713 === "center"
      ? wlBind21221 / 2
      : wlIn10713 === "end"
        ? wlBind21221
        : 0;
  };
  drawingLayout.offsetAt = (wlIn9668: any, wlIn9669: any) => {
    if (wlIn9668.length === 0) return 0;
    let wlBind20204 = Math.max(0, wlIn9668.length - 2);
    return wlIn9668[Math.min(Math.max(wlIn9669, 0), wlBind20204)] ?? 0;
  };
  drawingLayout.indexOffsetAt = (wlIn4841: any, wlIn4842: any) => {
    if (wlIn4841.length === 0)
      return {
        index: 0,
        offset: 0,
      };
    let wlBind14224 = Math.max(0, wlIn4842),
      wlBind14225 = 0;
    for (; wlBind14225 + 1 < wlIn4841.length; ) {
      let wlBind21791 = wlIn4841[wlBind14225 + 1];
      if (wlBind21791 === undefined || wlBind21791 > wlBind14224) break;
      wlBind14225 += 1;
    }
    let wlBind14226 = wlBind14224 - (wlIn4841[wlBind14225] ?? 0),
      wlBind14227 = Math.max(0, wlIn4841.length - 2);
    return {
      index: Math.min(wlBind14225, wlBind14227),
      offset: wlBind14226,
    };
  };
});
