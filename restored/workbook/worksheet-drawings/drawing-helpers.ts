// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: anchor/px helpers Binding740–752.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { j as presentationElementType } from "../presentation-protobuf";
import { ShapeGeometry, ensureShapeGeometryInit } from "../shape-geometry";
import {
  chartTypeNameToProto,
  shapeGeometryNameToProto,
  ensureChartProtoNameMapsInit,
} from "../chart-proto-name-maps";
import {
  ensureTextStyleInit,
  workbookGt,
  applyTextStylePatch,
} from "../text-style";
import { ensureRangeInit } from "../range";
import {
  ensureStableIdConstantsInit,
  ensureStableIdClusterInit,
  hashToBase36Id,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  initAddressMetrics,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import {
  buildChartAddOp,
  buildChartSetOp,
  buildChartSelector,
  buildShapeAddOp,
  buildShapeSetOp,
  buildShapeSelector,
  buildImageAddOp,
  buildImageSetOp,
} from "../mutation-ops";
import {
  ensureWorkbookEt,
  ensureWorkbookKt,
  ensureBinding662,
  ensureJge,
  ensureBinding712,
  ensureBinding722,
  ensureBinding739,
  getShapeElementClass,
  getChartAssetClass,
  getImageAssetClass,
} from "./boundary-hooks";
import { worksheetDrawings } from "./drawing-bindings";

export const ensureDrawingHelpersInit = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureChartProtoNameMapsInit();
  ensureTextStyleInit();
  ensureWorkbookKt();
  ensureBinding722();
  ensureBinding712();
  ensureJge();
  ensureBinding739();
  ensureWorkbookEt();
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureBinding662();
  initAddressUtils();
  ensureRangeInit();
  initAddressMetrics();
  worksheetDrawings.wdBind740 = (wdIn13599) =>
    Math.max(0, Math.floor(Number.isFinite(wdIn13599 ?? 0) ? wdIn13599 : 0));
  worksheetDrawings.wdBind741 = (wdIn10837) => {
    let wdBind21357 = Number.parseInt(wdIn10837 ?? "", 10);
    return Number.isFinite(wdBind21357) && wdBind21357 >= 0 ? wdBind21357 : 0;
  };
  worksheetDrawings.wdBind742 = (wdIn10560) => {
    let wdBind21023 = Number.parseFloat(wdIn10560 ?? "");
    return Number.isFinite(wdBind21023) && wdBind21023 >= 0
      ? Math.round(wdBind21023)
      : 0;
  };
  worksheetDrawings.wdBind743 = (wdIn8564, wdIn8565, wdIn8566) =>
    Number.isFinite(wdIn8564)
      ? Math.max(0, Math.round(wdIn8564))
      : Number.isFinite(wdIn8565)
        ? Math.max(0, Math.round(wdIn8565 * (1 / workbookGt)))
        : Math.max(0, wdIn8566 ?? 0);
  worksheetDrawings.wdBind744 = (wdIn7973) => {
    if (wdIn7973)
      return {
        row: worksheetDrawings.wdBind741(wdIn7973.rowId),
        col: worksheetDrawings.wdBind741(wdIn7973.colId),
        rowOffsetEmu: worksheetDrawings.wdBind742(wdIn7973.rowOffset),
        colOffsetEmu: worksheetDrawings.wdBind742(wdIn7973.colOffset),
      };
  };
  worksheetDrawings.wdBind745 = (wdIn4861, wdIn4862) => {
    let wdBind14257 = wdIn4862 ?? {
      row: 0,
      col: 0,
      rowOffsetEmu: 0,
      colOffsetEmu: 0,
    };
    return wdIn4861
      ? {
          row: worksheetDrawings.wdBind740(wdIn4861.row ?? wdBind14257.row),
          col: worksheetDrawings.wdBind740(wdIn4861.col ?? wdBind14257.col),
          rowOffsetEmu: worksheetDrawings.wdBind743(
            wdIn4861.rowOffsetEmu,
            wdIn4861.rowOffsetPx,
            wdBind14257.rowOffsetEmu,
          ),
          colOffsetEmu: worksheetDrawings.wdBind743(
            wdIn4861.colOffsetEmu,
            wdIn4861.colOffsetPx,
            wdBind14257.colOffsetEmu,
          ),
        }
      : wdBind14257;
  };
  worksheetDrawings.wdBind746 = (wdIn9277) => ({
    rowId: String(wdIn9277.row),
    colId: String(wdIn9277.col),
    rowOffset: String(wdIn9277.rowOffsetEmu),
    colOffset: String(wdIn9277.colOffsetEmu),
  });
  worksheetDrawings.snapshotAnchorPoint = (wdIn7178) => ({
    row: wdIn7178.row,
    col: wdIn7178.col,
    rowOffsetEmu: wdIn7178.rowOffsetEmu,
    colOffsetEmu: wdIn7178.colOffsetEmu,
    rowOffsetPx: Math.round(wdIn7178.rowOffsetEmu * workbookGt),
    colOffsetPx: Math.round(wdIn7178.colOffsetEmu * workbookGt),
  });
  worksheetDrawings.wdBind747 = (wdIn7510) => {
    let wdBind17992 = wdIn7510?.extentCx
        ? worksheetDrawings.wdBind742(wdIn7510.extentCx)
        : undefined,
      wdBind17993 = wdIn7510?.extentCy
        ? worksheetDrawings.wdBind742(wdIn7510.extentCy)
        : undefined;
    return wdBind17992 === undefined && wdBind17993 === undefined
      ? {}
      : {
          widthEmu: wdBind17992,
          heightEmu: wdBind17993,
        };
  };
  worksheetDrawings.wdBind748 = (wdIn4141, wdIn4142) => {
    let wdBind13136 =
        wdIn4141?.widthEmu !== undefined || wdIn4141?.widthPx !== undefined
          ? worksheetDrawings.wdBind743(
              wdIn4141?.widthEmu,
              wdIn4141?.widthPx,
              wdIn4142?.widthEmu,
            )
          : wdIn4142?.widthEmu,
      wdBind13137 =
        wdIn4141?.heightEmu !== undefined || wdIn4141?.heightPx !== undefined
          ? worksheetDrawings.wdBind743(
              wdIn4141?.heightEmu,
              wdIn4141?.heightPx,
              wdIn4142?.heightEmu,
            )
          : wdIn4142?.heightEmu;
    return wdBind13136 === undefined && wdBind13137 === undefined
      ? {}
      : {
          widthEmu: wdBind13136,
          heightEmu: wdBind13137,
        };
  };
  worksheetDrawings.wdBind749 = (wdIn5405) => {
    if (!wdIn5405) return;
    let { widthEmu, heightEmu } = wdIn5405;
    if (!(widthEmu === undefined && heightEmu === undefined))
      return {
        widthEmu,
        heightEmu,
        widthPx:
          widthEmu === undefined
            ? undefined
            : Math.round(widthEmu * workbookGt),
        heightPx:
          heightEmu === undefined
            ? undefined
            : Math.round(heightEmu * workbookGt),
      };
  };
  worksheetDrawings.Cve = (props) => {
    let wdBind20304 = [0];
    for (let wdBind22293 = 0; wdBind22293 < props.length; wdBind22293 += 1)
      wdBind20304[wdBind22293 + 1] =
        (wdBind20304[wdBind22293] ?? 0) + (props[wdBind22293] ?? 0);
    return wdBind20304;
  };
  worksheetDrawings.wdBind750 = (wdIn11122) =>
    wdIn11122.offsets && wdIn11122.offsets.length > 0
      ? [...wdIn11122.offsets]
      : worksheetDrawings.Cve(wdIn11122.sizes ?? []);
  worksheetDrawings.wdBind751 = (wdIn4957, wdIn4958) => {
    if (wdIn4957.length === 0)
      return {
        index: 0,
        offset: 0,
      };
    let wdBind14372 = Math.max(0, wdIn4958),
      wdBind14373 = 0;
    for (; wdBind14373 + 1 < wdIn4957.length; ) {
      let wdBind21896 = wdIn4957[wdBind14373 + 1];
      if (wdBind21896 == null || wdBind21896 > wdBind14372) break;
      wdBind14373 += 1;
    }
    return {
      index: Math.min(wdBind14373, Math.max(0, wdIn4957.length - 2)),
      offset: wdBind14372 - (wdIn4957[wdBind14373] ?? 0),
    };
  };
  worksheetDrawings.wve = (wdIn14016) =>
    wdIn14016?.widthEmu === undefined
      ? undefined
      : wdIn14016.widthEmu * workbookGt;
  worksheetDrawings.Tve = (props) =>
    props?.heightEmu === undefined ? undefined : props.heightEmu * workbookGt;
  worksheetDrawings.Eve = (props) => {
    let wdBind8176 = worksheetDrawings.wdBind750({
        sizes: props.layout.columnWidths,
        offsets: props.layout.columnOffsets,
      }),
      wdBind8177 = worksheetDrawings.wdBind750({
        sizes: props.layout.rowHeights,
        offsets: props.layout.rowOffsets,
      }),
      wdBind8178 = wdBind8176[props.from.col],
      wdBind8179 = wdBind8177[props.from.row];
    if (wdBind8178 == null || wdBind8179 == null) return null;
    let wdBind8180 = worksheetDrawings.snapshotAnchorPoint(props.from),
      wdBind8181 = wdBind8178 + wdBind8180.colOffsetPx,
      wdBind8182 = wdBind8179 + wdBind8180.rowOffsetPx;
    if (props.to) {
      let wdBind15462 = wdBind8176[props.to.col],
        wdBind15463 = wdBind8177[props.to.row];
      if (wdBind15462 == null || wdBind15463 == null) return null;
      let wdBind15464 = worksheetDrawings.snapshotAnchorPoint(props.to);
      return {
        x: wdBind8181,
        y: wdBind8182,
        width: Math.max(1, wdBind15462 + wdBind15464.colOffsetPx - wdBind8181),
        height: Math.max(1, wdBind15463 + wdBind15464.rowOffsetPx - wdBind8182),
      };
    }
    let wdBind8183 = worksheetDrawings.wve(props.extent),
      wdBind8184 = worksheetDrawings.Tve(props.extent);
    return wdBind8183 == null || wdBind8184 == null
      ? null
      : {
          x: wdBind8181,
          y: wdBind8182,
          width: Math.max(1, wdBind8183),
          height: Math.max(1, wdBind8184),
        };
  };
  worksheetDrawings.wdBind752 = (wdIn1401) => {
    let wdBind7207 = Math.max(0, wdIn1401.bounds.x),
      wdBind7208 = Math.max(0, wdIn1401.bounds.y),
      wdBind7209 = Math.max(
        wdBind7207,
        wdIn1401.bounds.x + wdIn1401.bounds.width,
      ),
      wdBind7210 = Math.max(
        wdBind7208,
        wdIn1401.bounds.y + wdIn1401.bounds.height,
      ),
      wdBind7211 = worksheetDrawings.wdBind750({
        sizes: wdIn1401.layout.columnWidths,
        offsets: wdIn1401.layout.columnOffsets,
      }),
      wdBind7212 = worksheetDrawings.wdBind750({
        sizes: wdIn1401.layout.rowHeights,
        offsets: wdIn1401.layout.rowOffsets,
      }),
      wdBind7213 = worksheetDrawings.wdBind751(wdBind7211, wdBind7207),
      wdBind7214 = worksheetDrawings.wdBind751(wdBind7212, wdBind7208),
      wdBind7215 = worksheetDrawings.wdBind745({
        row: wdBind7214.index,
        col: wdBind7213.index,
        rowOffsetPx: wdBind7214.offset,
        colOffsetPx: wdBind7213.offset,
      });
    if (!wdIn1401.usesTwoCellAnchor)
      return {
        from: wdBind7215,
        extent: worksheetDrawings.wdBind748({
          widthPx: Math.max(1, wdIn1401.bounds.width),
          heightPx: Math.max(1, wdIn1401.bounds.height),
        }),
      };
    let wdBind7216 = worksheetDrawings.wdBind751(wdBind7211, wdBind7209),
      wdBind7217 = worksheetDrawings.wdBind751(wdBind7212, wdBind7210);
    return {
      from: wdBind7215,
      to: worksheetDrawings.wdBind745({
        row: wdBind7217.index,
        col: wdBind7216.index,
        rowOffsetPx: wdBind7217.offset,
        colOffsetPx: wdBind7216.offset,
      }),
      extent: undefined,
    };
  };
});
