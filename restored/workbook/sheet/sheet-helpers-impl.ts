// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Sheet address/layout helpers cluster (legacy GYe…gXe / aXe).
// Stage-3 wave-65 cohesive helper impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressMetrics,
  initAddressUtils,
  cellPaddingForFontSize,
} from "../../utils/spreadsheet-address-utils";
import { j, Jn } from "../presentation-protobuf";
import { d } from "../spreadsheet-protobuf";
import { layoutTextElement } from "../text-box";
import {
  formatCellValueWithNumFmt,
  stripFontFaceStyleSuffixes,
} from "../cell-xf-format";
import {
  ensureQt,
  ensureWr,
  ensureWorkbookZ,
  ensureWorkbookBinding583,
  ensureWorkbookBinding586,
  ensureWorkbookBinding1238,
  shiftSharedFormulaRefs,
} from "./boundary-hooks";
import { sheet } from "./sheet-bag";

export function GYe(props: any): any {
  if (!props) return null;
  let shBind10946 = 0;
  props[shBind10946] === "$" && (shBind10946 += 1);
  let shBind10947 = 0,
    shBind10948 = false;
  for (; shBind10946 < props.length; ) {
    let shBind18971 = props.charCodeAt(shBind10946),
      shBind18972 = 0;
    if (shBind18971 >= 65 && shBind18971 <= 90) shBind18972 = shBind18971 - 64;
    else if (shBind18971 >= 97 && shBind18971 <= 122)
      shBind18972 = shBind18971 - 96;
    else break;
    shBind10947 = shBind10947 * 26 + shBind18972;
    shBind10948 = true;
    shBind10946 += 1;
  }
  if (!shBind10948) return null;
  props[shBind10946] === "$" && (shBind10946 += 1);
  let shBind10949 = 0,
    shBind10950 = false;
  for (; shBind10946 < props.length; ) {
    let shBind21079 = props.charCodeAt(shBind10946);
    if (shBind21079 < 48 || shBind21079 > 57) return null;
    shBind10949 = shBind10949 * 10 + (shBind21079 - 48);
    shBind10950 = true;
    shBind10946 += 1;
  }
  return !shBind10950 || shBind10949 <= 0 || shBind10947 <= 0
    ? null
    : {
        row: shBind10949 - 1,
        col: shBind10947 - 1,
      };
}
export function parseSheetColWidth(shIn10191: any): any {
  if (sheet.sheetColWidthCache.has(shIn10191))
    return sheet.sheetColWidthCache.get(shIn10191) ?? null;
  let shBind20650 = GYe(shIn10191);
  return (
    sheet.sheetColWidthCache.size >= sheet.KYe &&
      sheet.sheetColWidthCache.clear(),
    sheet.sheetColWidthCache.set(shIn10191, shBind20650),
    shBind20650
  );
}
export const ensureSheetAutoHeightInit = esmInit(() => {
  sheet.KYe = 5e4;
  sheet.sheetColWidthCache = new Map();
});
export function qYe(shIn1028: any): any {
  let shBind6233 = new Map(),
    shBind6234 = new Map();
  for (let shBind6459 of shIn1028.rows) {
    let shBind6527 = (shBind6459.index ?? 1) - 1;
    if (
      shBind6527 < 0 ||
      shBind6527 >= shIn1028.maxRows ||
      shBind6459.hidden ||
      shBind6459.customHeight === true
    )
      continue;
    let shBind6528 = shBind6459.cells;
    if (!shBind6528 || shBind6528.length === 0) continue;
    let shBind6529 = shIn1028.rowHeightsPx[shBind6527] ?? 0;
    if (shBind6529 <= 0) continue;
    let shBind6530 = shBind6529,
      shBind6531 = shBind6459.styleIndex;
    for (let shBind8148 of shBind6528) {
      let shBind8291 = shBind8148.address;
      if (!shBind8291) continue;
      let shBind8292 = parseSheetColWidth(shBind8291);
      if (
        !shBind8292 ||
        shBind8292.row !== shBind6527 ||
        shBind8292.col < 0 ||
        shBind8292.col >= shIn1028.colWidthsPx.length
      )
        continue;
      let shBind8293 = shIn1028.mergedRangeIndex.findBoundsForCell(
        shBind6527,
        shBind8292.col,
      );
      if (
        shBind8293 &&
        (shBind8293.rowMin !== shBind8293.rowMax ||
          shBind6527 !== shBind8293.rowMin ||
          shBind8292.col !== shBind8293.colMin)
      )
        continue;
      let shBind8294 =
          shBind8148.styleIndex ??
          shBind6531 ??
          shIn1028.colStyleIndices[shBind8292.col] ??
          0,
        shBind8295 = shIn1028.styleInfos[shBind8294] ?? {},
        shBind8296 = ZYe({
          cell: shBind8148,
          effectiveStyleIdx: shBind8294,
          formattedCellCache: shBind6234,
          sharedFormulaMap: shIn1028.sharedFormulaMap,
          showFormulas: shIn1028.showFormulas,
          styleInfos: shIn1028.styleInfos,
        });
      if (
        !YYe(shBind8148, shBind8296) ||
        !XYe(shBind8148, shBind8296, shBind8295)
      )
        continue;
      let shBind8297 = JYe(
          shIn1028.colWidthsPx,
          shBind8292.col,
          shBind8293?.colMax,
        ),
        shBind8298 = QYe({
          cell: shBind8148,
          displayText: shBind8296,
          style: shBind8295,
          themeMap: shIn1028.themeMap,
          widthPx: shBind8297,
        });
      shBind8298 > shBind6530 && (shBind6530 = shBind8298);
    }
    shBind6530 > shBind6529 + 0.5 && shBind6233.set(shBind6527, shBind6530);
  }
  return shBind6233;
}
export function JYe(
  shIn11205: any,
  shIn11206: any,
  shIn11207: any = shIn11206,
): any {
  let shBind21688 = 0;
  for (let shBind22944 = shIn11206; shBind22944 <= shIn11207; shBind22944 += 1)
    shBind21688 += shIn11205[shBind22944] ?? 0;
  return shBind21688;
}
export function YYe(shIn8930: any, shIn8931: any): any {
  if (shIn8931.length > 0) return true;
  for (let shBind21601 of shIn8930.paragraphs ?? [])
    for (let shBind22577 of shBind21601.runs ?? [])
      if ((shBind22577.text ?? "").length > 0) return true;
  return false;
}
export function XYe(shIn6121: any, shIn6122: any, shIn6123: any): any {
  if (shIn6123.wrapText === true || shIn6122.includes("\n")) return true;
  let shBind16191 = shIn6121.paragraphs ?? [];
  if (shBind16191.length > 1) return true;
  for (let shBind21108 of shBind16191)
    for (let shBind21766 of shBind21108.runs ?? [])
      if ((shBind21766.text ?? "").includes("\n")) return true;
  return false;
}

export function ZYe(props: any): any {
  let { cell } = props;
  if (props.showFormulas) {
    if (cell.formula) return `= ${cell.formula}`;
    if (cell.sharedFormulaSi !== undefined) {
      let shBind20651 = props.sharedFormulaMap.get(cell.sharedFormulaSi);
      if (shBind20651 && cell.address)
        return `= ${shiftSharedFormulaRefs(shBind20651.base, shBind20651.anchor, cell.address)}`;
    }
  }
  return formatCellValueWithNumFmt(
    cell,
    props.styleInfos,
    props.formattedCellCache,
    props.effectiveStyleIdx,
  );
}

export function QYe(props: any): any {
  let shBind10918 = props.style.wrapText === true,
    shBind10919 = shBind10918 ? Math.max(1, props.widthPx) : sheet.rXe,
    { padLr, padTb } = cellPaddingForFontSize(
      props.style.font?.size ?? 14.666666666666666,
    );
  return (
    layoutTextElement(
      tXe({
        paragraphs: $Ye(props.cell, props.displayText),
        style: props.style,
        widthPx: shBind10919,
      }),
      props.themeMap,
      {
        resolvedStyle: {
          alignment: Jn.ALIGNMENT_TYPE_LEFT,
        },
        bboxPx: {
          x: 0,
          y: 0,
          width: shBind10919,
          height: 1,
        },
        paddingPx: {
          left: padLr,
          right: padLr,
          top: padTb,
          bottom: padTb,
        },
        wrap: shBind10918,
        layoutProfile: "spreadsheet",
      },
    )?.lines?.reduce(
      (shIn16189, shIn16190) => shIn16189 + shIn16190.heightPx,
      0,
    ) ?? 0
  );
}

export function $Ye(shIn6662: any, shIn6663: any): any {
  let shBind16952 = shIn6662.paragraphs;
  return shBind16952 && shBind16952.length > 0
    ? shBind16952.map((item) => ({
        ...item,
        runs: (item.runs ?? []).map(eXe),
      }))
    : [
        {
          runs: [
            {
              text: shIn6663,
              citations: [],
              reviewMarkIds: [],
            },
          ],
          inlineNodes: [],
        },
      ];
}
export function eXe(shIn11753: any): any {
  return {
    ...shIn11753,
    textStyle: shIn11753.textStyle
      ? {
          ...shIn11753.textStyle,
        }
      : undefined,
  };
}
export function tXe(shIn4710: any): any {
  let shBind13997 = {
    paragraphs: shIn4710.paragraphs,
    textStyle: {
      alignment: Jn.ALIGNMENT_TYPE_LEFT,
    },
    bbox: {
      xEmu: 0,
      yEmu: 0,
      widthEmu: Math.round(Math.max(1, shIn4710.widthPx) * 9525),
      heightEmu: 9525,
    },
    type: j.ELEMENT_TYPE_TEXT,
    effects: [],
    children: [],
    levelsStyles: [],
    id: "",
    citations: [],
  };
  return (nXe(shBind13997, shIn4710.style), shBind13997);
}
export function nXe(shIn1741: any, shIn1742: any): any {
  for (let shBind8340 of shIn1741.paragraphs ?? [])
    for (let shBind8571 of shBind8340.runs ?? []) {
      shBind8571.textStyle = shBind8571.textStyle ?? {};
      let shBind8730 = shBind8571.textStyle.fontSize;
      shBind8730 !== undefined &&
        shBind8730 > 0 &&
        shBind8730 < 100 &&
        (shBind8571.textStyle.fontSize = Math.round(shBind8730 * 100));
      let shBind8731 = shBind8571.textStyle.fontSize;
      if (shBind8731 === undefined || shBind8731 <= 0) {
        let shBind20316 = shIn1742.font?.size,
          shBind20317 =
            shBind20316 !== undefined && shBind20316 > 0
              ? (shBind20316 * 72) / 96
              : 11;
        shBind8571.textStyle.fontSize = Math.round(shBind20317 * 100);
      }
      shBind8571.textStyle.italic == null &&
        shIn1742.font?.italic != null &&
        (shBind8571.textStyle.italic = shIn1742.font.italic);
      shBind8571.textStyle.bold == null &&
        shIn1742.font?.bold != null &&
        (shBind8571.textStyle.bold = shIn1742.font.bold);
      shBind8571.textStyle.name ??
        (shBind8571.textStyle.name = stripFontFaceStyleSuffixes(
          shIn1742.font?.family,
        ));
      shBind8571.textStyle.underline == null &&
        shIn1742.font?.underline != null &&
        (shBind8571.textStyle.underline = shIn1742.font.underline
          ? "single"
          : "none");
    }
}
// rXe lives on sheet bag, iXe;
export const ensureAutoHeightCacheInit = esmInit(() => {
  ensureQt();
  ensureWr();
  ensureWorkbookZ();
  ensureWorkbookBinding583();
  initAddressMetrics();
  ensureWorkbookBinding586();
  ensureWorkbookBinding1238();
  ensureSheetAutoHeightInit();
  sheet.rXe = 1e6;
  sheet.iXe = class {
    _e;
    _t;
    reset() {
      this._e = undefined;
      this._t = undefined;
    }
    getAutoHeights(shIn1092) {
      let shBind6460 = this._e;
      if (
        shBind6460 &&
        this._t &&
        shBind6460.rowsRef === shIn1092.rows &&
        shBind6460.rowsLength === shIn1092.rows.length &&
        shBind6460.colWidthsRef === shIn1092.colWidthsPx &&
        shBind6460.rowHeightsRef === shIn1092.rowHeightsPx &&
        shBind6460.maxRows === shIn1092.maxRows &&
        shBind6460.showFormulas === shIn1092.showFormulas &&
        shBind6460.styleInfos === shIn1092.styleInfos &&
        shBind6460.themeMap === shIn1092.themeMap &&
        shBind6460.colStyleIndicesRef === shIn1092.colStyleIndices &&
        shBind6460.sharedFormulaMapRef === shIn1092.sharedFormulaMap &&
        shBind6460.mergedRangeIndexRef === shIn1092.mergedRangeIndex
      )
        return this._t;
      let shBind6461 = qYe(shIn1092);
      return (
        (this._e = {
          rowsRef: shIn1092.rows,
          rowsLength: shIn1092.rows.length,
          colWidthsRef: shIn1092.colWidthsPx,
          rowHeightsRef: shIn1092.rowHeightsPx,
          maxRows: shIn1092.maxRows,
          showFormulas: shIn1092.showFormulas,
          styleInfos: shIn1092.styleInfos,
          themeMap: shIn1092.themeMap,
          colStyleIndicesRef: shIn1092.colStyleIndices,
          sharedFormulaMapRef: shIn1092.sharedFormulaMap,
          mergedRangeIndexRef: shIn1092.mergedRangeIndex,
        }),
        (this._t = shBind6461),
        shBind6461
      );
    }
  };
});
export function clampNonNegInt(shIn12442: any): any {
  return Number.isFinite(shIn12442) ? Math.max(0, Math.trunc(shIn12442)) : 0;
}

sheet.aXe = ensureAutoHeightCacheInit;
sheet.ensureSheetAutoHeightInit = ensureSheetAutoHeightInit;

/** Legacy aXe. */
export const aXe = ensureAutoHeightCacheInit;

export function oXe(shIn10395: any): any {
  let shBind20866 = shIn10395[sheet.FREEZE_PANES_KEY];
  return {
    rowCount: clampNonNegInt(shBind20866?.rowCount ?? 0),
    columnCount: clampNonNegInt(shBind20866?.columnCount ?? 0),
  };
}
export function sXe(shIn10546: any): any {
  let shBind20998 = shIn10546.trim(),
    shBind20999 = shBind20998.lastIndexOf("!");
  return (
    shBind20999 >= 0 ? shBind20998.slice(shBind20999 + 1) : shBind20998
  ).replace(/\$/g, "");
}
export function cXe(shIn6357: any): any {
  let shBind16511 = [],
    shBind16512 = shIn6357.trim().split(/\s+/);
  for (let shBind18662 of shBind16512) {
    if (!shBind18662) continue;
    let [shBind19175, shBind19176] = shBind18662.split(":");
    if (!shBind19175) continue;
    let shBind19177 = sXe(shBind19175),
      shBind19178 = sXe(shBind19176 || shBind19175);
    shBind16511.push({
      startAddress: shBind19177,
      endAddress: shBind19178,
      sheetName: "",
    });
  }
  return shBind16511;
}
export function asFiniteNumber(shIn15799: any): any {
  return parseSheetColWidth(shIn15799);
}
export function lXe(shIn11870: any): any {
  let shBind22155 = Number(shIn11870);
  if (!(!Number.isInteger(shBind22155) || shBind22155 < 0)) return shBind22155;
}
export function uXe(shIn10103: any, shIn10104: any): any {
  return (
    shIn10103?.height === shIn10104?.height &&
    shIn10103?.customHeight === shIn10104?.customHeight &&
    shIn10103?.hidden === shIn10104?.hidden
  );
}
export function dXe(shIn10225: any, shIn10226: any): any {
  return (
    shIn10225?.width === shIn10226?.width &&
    shIn10225?.customWidth === shIn10226?.customWidth &&
    shIn10225?.hidden === shIn10226?.hidden
  );
}
export function fXe(shIn11097: any): any {
  let { cells, height, customHeight, hidden, ...rest } = shIn11097;
  return {
    ...rest,
  };
}
export function pXe(shIn11607: any): any {
  let { width, customWidth, hidden, ...rest } = shIn11607;
  return {
    ...rest,
  };
}
export function mXe(shIn13189: any): any {
  return `${shIn13189.min ?? 0}:${shIn13189.max ?? shIn13189.min ?? 0}`;
}
export function hXe(shIn9266: any): any {
  let shBind19818 = shIn9266.formula ?? "";
  if (typeof shBind19818 == "string" && shBind19818.trim()) return true;
  let shBind19819 = shIn9266.value ?? "";
  return typeof shBind19819 == "string" && shBind19819 !== "";
}
export function gXe(shIn2338: any): any {
  if (!shIn2338 || shIn2338.value == null) return null;
  switch (shIn2338.dataType) {
    case d.CELL_DATA_TYPE_NUMBER:
      return Number(shIn2338.value);
    case d.CELL_DATA_TYPE_BOOLEAN:
      return shIn2338.value === "TRUE" || shIn2338.value === "1";
    case d.CELL_DATA_TYPE_DATE:
      if (typeof shIn2338.value == "string") {
        let shBind19535 = Number(shIn2338.value);
        return Number.isFinite(shBind19535)
          ? new Date(Date.UTC(1899, 11, 30) + 86400000 * shBind19535)
          : new Date(shIn2338.value);
      }
      return typeof shIn2338.value == "number" &&
        Number.isFinite(shIn2338.value)
        ? new Date(Date.UTC(1899, 11, 30) + shIn2338.value * 86400000)
        : new Date(String(shIn2338.value));
    case d.CELL_DATA_TYPE_ERROR:
      return {
        kind: "Error",
        code: shIn2338.value,
      };
    default:
      return shIn2338.value;
  }
}
