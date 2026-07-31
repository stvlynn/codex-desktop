// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: BYe setup / nested helpers / prep.

import { paint } from "./paint-bag";
import { clampDropdownInsetPx } from "../worksheet-autofit/dropdown-padding";
import {
  lettersToColIndex,
  colIndexToLetters,
  rowTokenToIndex,
  cellPaddingForFontSize,
} from "../../utils/spreadsheet-address-utils";
import { d } from "../spreadsheet-protobuf";
import { j } from "../spreadsheet-protobuf";
import { Jn, Zn, tr } from "../presentation-protobuf";
import { stripFontFaceStyleSuffixes } from "../cell-xf-format";
import { paintTextElement } from "../text-box";
import {
  paintImages,
  paintSparklines,
  paintCharts,
  checkboxHitTest,
  paintCheckboxBox,
  paintDataBarFill,
  paintIconSetGlyph,
  paintUnsupportedBadge,
  layoutTextBox,
  drawCheckboxControl,
  paintCellTextRuns,
  measurePaintTextWidth,
  dropdownChevronInset,
  strokeCellBorderSide,
  prepareDiagonalStroke,
  fillCellBackground,
  clipPaintRect,
} from "./boundary-hooks";
import {
  buildPivotCellHintMap,
  lookupPivotHint,
  resolvePaintFillCss,
  createPixelAlignedCtx,
  sheetTextMetricsBag,
  cellKey,
  rangesIntersecting,
  nextNonEmptyCol,
  resolveCellDisplay,
  fillRectTransformed,
  strokeDiagonalBorder,
  paintCheckboxGlyph,
  paintDataBar,
  paintIconSet,
  parseHexColorChannels,
  mergeCssColor,
  rgbaFromChannels,
  drawHeaderLabel,
  buildPaintFillState,
  notifyRowHeights,
} from "./paint-helpers-impl";
import { paintSheetShapes } from "./paint-shapes";
import {
  PAINT_ACCENT_DEFAULT,
  PAINT_FONT_SCALE,
  PAINT_MAX_SCROLL,
  PAINT_MAX_EXTENT,
} from "./paint-consts";
void d;
void j;
void Jn;
void Zn;
void tr;
void stripFontFaceStyleSuffixes;
void paintTextElement;

export function runPaintSetup(): void {
  paint.cpBind2018 = Array.isArray(paint.cpIn9[0]);
  paint.cpBind2019 = undefined;
  paint.cpBind2020 = undefined;
  paint.cpBind2021 = undefined;
  paint.cpBind2022 = undefined;
  paint.cpBind2023 = undefined;
  paint.cpBind2024 = undefined;
  paint.cpBind2025 = undefined;
  paint.cpBind2026 = undefined;
  paint.cpBind2027 = undefined;
  paint.cpBind2028 = undefined;
  paint.cpBind2029 = undefined;
  paint.cpBind2030 = undefined;
  paint.cpBind2031 = undefined;
  paint.cpBind2032 = undefined;
  paint.cpBind2033 = undefined;
  paint.cpBind2034 = undefined;
  paint.cpBind2035 = undefined;
  paint.cpBind2036 = undefined;
  paint.cpBind2037 = undefined;
  paint.cpBind2038 = undefined;
  paint.cpBind2039 = undefined;
  paint.cpBind2040 = undefined;
  if (paint.cpBind2018)
    [
      paint.cpBind2019,
      paint.cpBind2020,
      paint.cpBind2021,
      paint.cpBind2022,
      paint.cpBind2023,
      paint.cpBind2024,
      paint.cpBind2025,
      paint.cpBind2026,
      paint.cpBind2027,
      paint.cpBind2028,
      paint.cpBind2029,
      paint.cpBind2030,
      paint.cpBind2031,
      paint.cpBind2032,
      paint.cpBind2033,
      paint.cpBind2034,
      paint.cpBind2035,
      paint.cpBind2036,
      paint.cpBind2037,
      paint.cpBind2038,
      paint.cpBind2039,
      paint.cpBind2040,
    ] = paint.cpIn9;
  else {
    [
      paint.cpBind2021,
      paint.cpBind2022,
      paint.cpBind2023,
      paint.cpBind2024,
      paint.cpBind2025,
      paint.cpBind2026,
      paint.cpBind2027,
      paint.cpBind2028,
      paint.cpBind2029,
      paint.cpBind2030,
      paint.cpBind2031,
      paint.cpBind2032,
      paint.cpBind2033,
      paint.cpBind2034,
      paint.cpBind2035,
      paint.cpBind2036,
      paint.cpBind2037,
      paint.cpBind2038,
      paint.cpBind2039,
      paint.cpBind2040,
    ] = paint.cpIn9;
    let cpBind13489 = paint.cpIn7.sheets.getItemOrNullObject(paint.cpIn8);
    if (cpBind13489.isNullObject) {
      paint.__earlyReturn = true;
      return;
    }
    let cpBind13490 = cpBind13489.__getViewportLayout({
      maxCols: paint.cpBind2038?.maxCols,
      maxRows: paint.cpBind2038?.maxRows,
      showFormulas: paint.cpBind2034,
      colWidthOverridesPx: paint.cpBind2038?.colWidthOverridesPx,
      rowHeightOverridesPx: paint.cpBind2038?.rowHeightOverridesPx,
    });
    paint.cpBind2019 = cpBind13490.viewColWidthsPx;
    paint.cpBind2020 = cpBind13490.rowHeightsPx;
  }
  ({
    darkMode: paint.darkMode = false,
    accentColor: paint.accentColor = PAINT_ACCENT_DEFAULT,
    showHeaders: paint.showHeaders = true,
    rowAutoHeight: paint.rowAutoHeight,
  } = paint.cpBind2038 ?? {});
  paint.cpBind2041 = paint.showHeaders ? 40 : 0;
  paint.cpBind2042 = paint.showHeaders ? 20 : 0;
  paint.cpBind2043 = paint.cpIn7.sheets.getItemOrNullObject(paint.cpIn8);
  if (paint.cpBind2043.isNullObject) {
    paint.__earlyReturn = true;
    return;
  }
  paint.cpBind2044 = paint.cpBind2043;
  paint.cpBind2045 = paint.cpBind2043.name;
  paint.cpBind2046 = paint.cpBind2043.__getRows();
  paint.cpBind2047 = paint.cpBind2043.__getMergedRangeIndex();
  paint.cpBind2048 = paint.cpBind2043.__getSpreadsheetRenderMetadata(
    paint.cpBind2033,
  );
  paint.cpBind2049 = paint.darkMode
    ? {
        background: "#202020",
        grid: "#4d4d4d",
        headerBg: "#1e1e1e",
        headerBorder: "#2b2b2b",
        headerText: "#f5f5f5",
        unsupportedFill: "#2b2b2b",
      }
    : {
        background: "#ffffff",
        grid: "#cccccc",
        headerBg: "#f5f5f5",
        headerBorder: "#cccccc",
        headerText: "#333333",
        unsupportedFill: "#eeeeee",
      };
  paint.cpBind2050 =
    paint.cpBind2038?.backgroundColor ?? paint.cpBind2049.background;
  paint.cpBind2051 = paint.cpBind2049.grid;
  paint.cpBind2052 = paint.cpBind2049.headerBg;
  paint.cpBind2053 = paint.cpBind2049.headerBorder;
  paint.cpBind2054 = paint.cpBind2049.headerText;
  paint.cpBind2055 = paint.cpBind2049.unsupportedFill;
  paint.cpBind2056 = paint.darkMode ? "FFFFFFFF" : "FF000000";
  paint.cpBind2057 = buildPivotCellHintMap(paint.cpBind2043, paint.cpBind2033);
  paint.cpBind2058 = paint.cpBind2027 || 1;
  paint.cpBind2059 = paint.cpBind2021 / paint.cpBind2058;
  paint.cpBind2060 = paint.cpBind2022 / paint.cpBind2058;
  paint.cpBind2061 = new Set();
  paint.cpBind2062 = paint.cpBind2048.sharedFormulaMap;
  paint.be = new Map();
  paint.cpBind2063 = new Map();
  paint.cpBind2064 = new Map();
  paint.cpBind2065 = (cpIn10249) => {
    if (paint.cpBind2063.has(cpIn10249))
      return paint.cpBind2063.get(cpIn10249) === true;
    let cpBind20715 = paint.cpIn7.__isCheckboxStyleIndex(cpIn10249);
    return (paint.cpBind2063.set(cpIn10249, cpBind20715), cpBind20715);
  };
  paint.cpBind2066 = (cpIn6232, cpIn6233) => {
    if (paint.cpBind2034) {
      if (cpIn6232.formula) return `= ${cpIn6232.formula}`;
      if (typeof cpIn6232.sharedFormulaSi == "number") {
        let cpBind21201 = paint.cpBind2062.get(cpIn6232.sharedFormulaSi);
        if (cpBind21201)
          return `= ${strokeCellBorderSide(cpBind21201.base, cpBind21201.anchor, cpIn6232.address)}`;
      }
    }
    return paintCellTextRuns(cpIn6232, paint.cpBind2028, paint.be, cpIn6233);
  };
  paint.cpBind2067 = (cpIn6553) => {
    if (
      paint.cpBind2034 &&
      (cpIn6553.formula ||
        (typeof cpIn6553.sharedFormulaSi == "number" &&
          paint.cpBind2062.has(cpIn6553.sharedFormulaSi)))
    )
      return false;
    let cpBind16799 = Number(cpIn6553.value);
    return (
      cpIn6553.dataType !== d.CELL_DATA_TYPE_STRING &&
      !Number.isNaN(cpBind16799)
    );
  };
  paint.cpBind2068 = (cpIn7414, cpIn7415) =>
    cpIn7414.paragraphs && cpIn7414.paragraphs.length > 0
      ? cpIn7414.paragraphs
      : [
          {
            runs: [
              {
                text: cpIn7415,
                citations: [],
                reviewMarkIds: [],
              },
            ],
            inlineNodes: [],
          },
        ];
  paint.cpBind2069 = ({
    paragraphs,
    resolvedTextStyle,
    widthPx,
    heightPx,
  }) => ({
    paragraphs,
    textStyle: resolvedTextStyle,
    bbox: {
      xEmu: 0,
      yEmu: 0,
      widthEmu: Math.round(Math.max(1, widthPx) * 9525),
      heightEmu: Math.round(Math.max(1, heightPx) * 9525),
    },
    type: j.ELEMENT_TYPE_TEXT,
    effects: [],
    children: [],
    levelsStyles: [],
    id: "",
    citations: [],
  });
  paint.cpBind2070 = (cpIn11204) =>
    !!cpIn11204.paragraphs?.some((cpIn13746) =>
      cpIn13746.runs?.some((cpIn15835) => (cpIn15835.text ?? "").length > 0),
    );
  paint.cpBind2071 = (cpIn9106) => {
    if (!cpIn9106) return "";
    let cpBind19690 = cpIn9106.transform
      ? JSON.stringify(cpIn9106.transform)
      : "";
    return `${cpIn9106.type}:${cpIn9106.value ?? ""}:${cpIn9106.lastColor ?? ""}:${cpBind19690}`;
  };
  paint.cpBind2072 = JSON.stringify(paint.cpBind2033.colorMap);
  paint.cpBind2073 = ({
    element,
    style,
    tableCellStyle,
    pivotFontColor,
    pivotBold,
    conditionalFormattingTextColor,
    numberFormatColorOverride,
  }) => {
    let cpBind4560 = style.font?.color
      ? rgbaFromChannels(style.font.color)
      : null;
    for (let cpBind5046 of element.paragraphs ?? [])
      for (let cpBind5130 of cpBind5046.runs ?? []) {
        if (
          ((cpBind5130.textStyle = cpBind5130.textStyle ?? {}),
          typeof cpBind5130.textStyle.fontSize == "number" &&
            cpBind5130.textStyle.fontSize > 0 &&
            cpBind5130.textStyle.fontSize < 100 &&
            (cpBind5130.textStyle.fontSize = Math.round(
              cpBind5130.textStyle.fontSize * 100,
            )),
          !(
            typeof cpBind5130.textStyle.fontSize == "number" &&
            cpBind5130.textStyle.fontSize > 0
          ))
        ) {
          let cpBind19565 = style.font?.size,
            cpBind19566 =
              typeof cpBind19565 == "number" && cpBind19565 > 0
                ? (cpBind19565 * 72) / 96
                : 11;
          cpBind5130.textStyle.fontSize = Math.round(cpBind19566 * 100);
        }
        cpBind5130.textStyle.italic == null &&
          style.font?.italic != null &&
          (cpBind5130.textStyle.italic = !!style.font.italic);
        cpBind5130.textStyle.name ??
          (cpBind5130.textStyle.name = stripFontFaceStyleSuffixes(
            style.font?.family,
          ));
        cpBind5130.textStyle.underline == null &&
          style.font?.underline != null &&
          (cpBind5130.textStyle.underline = style.font.underline
            ? "single"
            : "none");
        let cpBind5170 = measurePaintTextWidth({
          currentTextStyle: cpBind5130.textStyle,
          baseStyle: style,
          baseStyleFontColor: cpBind4560,
          tableCellStyle,
          pivotFontColor,
          pivotBold,
          conditionalFormattingTextColor,
          numberFormatColorOverride,
        });
        cpBind5170.bold != null &&
          (cpBind5130.textStyle.bold = cpBind5170.bold);
        cpBind5170.fill
          ? (cpBind5130.textStyle.fill = cpBind5170.fill)
          : cpBind5130.textStyle.fill ||
            (cpBind5130.textStyle.fill = {
              color: {
                type: Zn.COLOR_TYPE_RGB,
                value: paint.cpBind2056,
                transform: undefined,
                lastColor: paint.cpBind2056,
              },
              type: tr.FILL_TYPE_SOLID,
              gradientStops: [],
              pictureEffects: [],
            });
      }
  };
  paint.cpBind2074 = ({
    cell,
    displayText,
    widthPx,
    heightPx,
    paddingPx,
    wrapTextEnabled,
    style,
    tableCellStyle,
    pivotFontColor,
    pivotBold,
    numberFormatColorOverride,
  }) => {
    let cpBind7422 = wrapTextEnabled ? Math.max(1, widthPx) : PAINT_MAX_SCROLL,
      cpBind7423 = paint.cpBind2069({
        paragraphs: paint.cpBind2068(cell, displayText),
        resolvedTextStyle: {
          alignment: Jn.ALIGNMENT_TYPE_LEFT,
        },
        widthPx: cpBind7422,
        heightPx,
      });
    paint.cpBind2073({
      element: cpBind7423,
      style,
      tableCellStyle,
      pivotFontColor,
      pivotBold,
      conditionalFormattingTextColor: null,
      numberFormatColorOverride,
    });
    let cpBind7424 = layoutTextBox(cpBind7423, paint.cpBind2033, {
      resolvedStyle: {
        alignment: Jn.ALIGNMENT_TYPE_LEFT,
      },
      bboxPx: {
        x: 0,
        y: 0,
        width: cpBind7422,
        height: heightPx,
      },
      paddingPx,
      textScale: PAINT_FONT_SCALE,
      wrap: wrapTextEnabled,
      layoutProfile: "spreadsheet",
    });
    return {
      firstLineW: cpBind7424?.lines?.[0]?.widthPx ?? 0,
      contentHeight:
        cpBind7424?.lines?.reduce(
          (cpIn16185, cpIn16186) => cpIn16185 + cpIn16186.heightPx,
          0,
        ) ?? 0,
    };
  };
  paint.cpBind2075 = ({
    cell,
    displayText,
    resolvedTextStyle,
    widthPx,
    heightPx,
    paddingPx,
    wrapTextEnabled,
    style,
    tableCellStyle,
    pivotFontColor,
    pivotBold,
    conditionalFormattingTextColor,
    numberFormatColorOverride,
    styleIndex,
    rowIdx,
    colIdx,
    cacheable = true,
  }) => {
    let cpBind4514 =
      cacheable &&
      styleIndex !== undefined &&
      rowIdx !== undefined &&
      colIdx !== undefined
        ? [
            rangesIntersecting(rowIdx, colIdx),
            styleIndex,
            displayText,
            Math.round(widthPx * 100) / 100,
            Math.round(heightPx * 100) / 100,
            Math.round(paddingPx.left * 100) / 100,
            Math.round(paddingPx.right * 100) / 100,
            Math.round(paddingPx.top * 100) / 100,
            Math.round(paddingPx.bottom * 100) / 100,
            +!!wrapTextEnabled,
            resolvedTextStyle.anchor ?? "",
            resolvedTextStyle.alignment ?? "",
            paint.cpBind2056,
            paint.cpBind2072,
            style.font?.color ?? "",
            +!!pivotBold,
            +(tableCellStyle?.font?.bold === true),
            paint.cpBind2071(tableCellStyle?.font?.color),
            paint.cpBind2071(pivotFontColor),
            paint.cpBind2071(conditionalFormattingTextColor),
            paint.cpBind2071(numberFormatColorOverride),
          ].join("|")
        : null;
    if (cpBind4514) {
      let cpBind22425 = paint.cpBind2078.cellRenderLayouts.get(cpBind4514);
      if (cpBind22425) return cpBind22425;
    }
    let cpBind4515 = paint.cpBind2069({
      paragraphs: paint.cpBind2068(cell, displayText),
      resolvedTextStyle,
      widthPx,
      heightPx,
    });
    paint.cpBind2073({
      element: cpBind4515,
      style,
      tableCellStyle,
      pivotFontColor,
      pivotBold,
      conditionalFormattingTextColor,
      numberFormatColorOverride,
    });
    let cpBind4516 = {
      element: cpBind4515,
      layout: layoutTextBox(cpBind4515, paint.cpBind2033, {
        resolvedStyle: resolvedTextStyle,
        bboxPx: {
          x: 0,
          y: 0,
          width: Math.max(1, widthPx),
          height: heightPx,
        },
        paddingPx,
        textScale: PAINT_FONT_SCALE,
        wrap: wrapTextEnabled,
        layoutProfile: "spreadsheet",
      }),
    };
    if (cpBind4514 && cpBind4516.layout) {
      if (paint.cpBind2078.cellRenderLayouts.size >= PAINT_MAX_EXTENT) {
        let cpBind21279 = paint.cpBind2078.cellRenderLayouts
          .keys()
          .next().value;
        cpBind21279 && paint.cpBind2078.cellRenderLayouts.delete(cpBind21279);
      }
      paint.cpBind2078.cellRenderLayouts.set(cpBind4514, {
        element: cpBind4516.element,
        layout: cpBind4516.layout,
      });
    }
    return cpBind4516;
  };
  paint.colWidthForPaintRow = function (cpIn7262, cpIn7263) {
    if (paint.cpBind2091.get(cpIn7262) == null)
      return paint.cpBind2019[cpIn7263] ?? 0;
    paint.ensureRowCellIndex(cpIn7262);
    let cpBind17631 =
        sheetTextMetricsBag(paint.cpBind2044).rowNonEmptyCols.get(cpIn7262) ??
        [],
      cpBind17632 =
        cpBind17631[nextNonEmptyCol(cpBind17631, cpIn7263)] ??
        paint.cpBind2019.length,
      cpBind17633 = paint.cpBind2084[cpIn7263] ?? 0,
      cpBind17634 = paint.cpBind2084[cpBind17632] ?? cpBind17633;
    return Math.max(0, cpBind17634 - cpBind17633);
  };
  paint.textOverflowsIntoCol = function (cpIn2678, cpIn2679) {
    if (cpIn2679 < 0) return false;
    paint.ensureRowCellIndex(cpIn2678);
    let cpBind10219 =
        sheetTextMetricsBag(paint.cpBind2044).rowNonEmptyCols.get(cpIn2678) ??
        [],
      cpBind10220 = paint.cpBind2064.get(cpIn2678);
    for (
      (!cpBind10220 ||
        cpBind10220.nonEmpty !== cpBind10219 ||
        cpIn2679 < cpBind10220.lastBoundary) &&
      ((cpBind10220 = {
        nonEmpty: cpBind10219,
        lastBoundary: -1,
        pos: -1,
      }),
      paint.cpBind2064.set(cpIn2678, cpBind10220));
      cpBind10220.pos + 1 < cpBind10219.length &&
      (cpBind10219[cpBind10220.pos + 1] ?? 1 / 0) <= cpIn2679;
    )
      cpBind10220.pos += 1;
    if (((cpBind10220.lastBoundary = cpIn2679), cpBind10220.pos < 0))
      return false;
    let cpBind10221 = cpBind10219[cpBind10220.pos] ?? -1;
    if (cpBind10221 < 0) return false;
    let cpBind10222 = sheetTextMetricsBag(paint.cpBind2044).textMetrics.get(
      cellKey(cpIn2678, cpBind10221),
    );
    if (!cpBind10222 || cpBind10222.isNumeric) return false;
    let cpBind10223 = Math.max(
        0,
        (paint.cpBind2084[cpIn2679 + 1] ?? 0) -
          (paint.cpBind2084[cpBind10221] ?? 0),
      ),
      cpBind10224 = Math.max(
        0,
        cpBind10223 - (cpBind10222.padLeft + cpBind10222.padRight),
      );
    return cpBind10222.firstLineW + 0.001 >= cpBind10224;
  };
  paint.cellInMergedRange = function (cpIn6445, cpIn6446, cpIn6447) {
    let cpBind16652 = lettersToColIndex(cpIn6447.startAddress),
      cpBind16653 = rowTokenToIndex(cpIn6447.startAddress),
      cpBind16654 = lettersToColIndex(cpIn6447.endAddress),
      cpBind16655 = rowTokenToIndex(cpIn6447.endAddress);
    return (
      cpIn6445 >= Math.min(cpBind16653, cpBind16655) &&
      cpIn6445 <= Math.max(cpBind16653, cpBind16655) &&
      cpIn6446 >= Math.min(cpBind16652, cpBind16654) &&
      cpIn6446 <= Math.max(cpBind16652, cpBind16654)
    );
  };
  paint.numericCellValue = function (cpIn10902) {
    if (!cpIn10902) return null;
    let cpBind21412 = Number(cpIn10902.value);
    return Number.isNaN(cpBind21412) ? null : cpBind21412;
  };
  paint.cellHyperlinkUri = function (cpIn6049) {
    if (!cpIn6049) return null;
    let cpBind16081 = cpIn6049.hyperlink?.uri ?? cpIn6049.hyperlink?.target;
    if (cpBind16081) return cpBind16081;
    for (let cpBind19991 of cpIn6049.paragraphs ?? [])
      for (let cpBind21240 of cpBind19991.runs ?? []) {
        let cpBind22116 =
          cpBind21240.hyperlink?.uri ?? cpBind21240.hyperlink?.target;
        if (cpBind22116) return cpBind22116;
      }
    return null;
  };
  paint.cpBind2076 =
    paint.cpBind2045.trim() === ""
      ? null
      : paint.cpIn7.getConditionalFormattingRenderCache(paint.cpBind2045);
  paint.cpIn6.save();
  paint.cpIn6.scale(paint.cpBind2027, paint.cpBind2027);
  paint.cpBind2077 = createPixelAlignedCtx(
    paint.cpIn6,
    paint.cpBind2027,
    paint.cpBind2038?.devicePixelRatio,
  );
  paint.cpBind2078 = sheetTextMetricsBag(paint.cpBind2043);
  paint.rowCellAtCol = function (cpIn12570, cpIn12571) {
    return (
      paint.ensureRowCellIndex(cpIn12570),
      paint.cpBind2078.rowCellByColIdx.get(cpIn12570)?.get(cpIn12571)
    );
  };
  paint.cpBind2079 = (cpIn15654, cpIn15655) =>
    paint.cpBind2047.findBoundsForCell(cpIn15654, cpIn15655);
  paint.cpBind2080 = (cpIn15201, cpIn15202) =>
    paint.cpBind2047.boundaryCrossesHorizontally(cpIn15201, cpIn15202);
  paint.cpBind2081 = (cpIn15265, cpIn15266) =>
    paint.cpBind2047.boundaryCrossesVertically(cpIn15265, cpIn15266);
  paint.cpBind2082 = {
    thin: 1,
    dashed: 2,
    dashDot: 2,
    dashDotDot: 2,
    medium: 3,
    mediumDashed: 3,
    slantDashDot: 3,
    thick: 4,
    double: 5,
  };
  paint.cpBind2083 = (cpIn15920) =>
    cpIn15920 ? (paint.cpBind2082[cpIn15920] ?? 0) : 0;
  paint.cpBind2084 = [0];
  for (
    let cpBind22507 = 0;
    cpBind22507 < paint.cpBind2019.length;
    cpBind22507++
  )
    paint.cpBind2084[cpBind22507 + 1] =
      (paint.cpBind2084[cpBind22507] ?? 0) +
      (paint.cpBind2019[cpBind22507] ?? 0);
  paint.cpBind2085 = [0];
  for (
    let cpBind22508 = 0;
    cpBind22508 < paint.cpBind2020.length;
    cpBind22508++
  )
    paint.cpBind2085[cpBind22508 + 1] =
      (paint.cpBind2085[cpBind22508] ?? 0) +
      (paint.cpBind2020[cpBind22508] ?? 0);
  paint.cpBind2086 = Math.max(
    0,
    mergeCssColor(paint.cpBind2084, paint.cpBind2059) - 1,
  );
  paint.$e = Math.min(
    paint.cpBind2019.length - 1,
    mergeCssColor(
      paint.cpBind2084,
      paint.cpBind2059 + paint.cpBind2023 / paint.cpBind2027,
    ) + 1,
  );
  paint.cpBind2087 = Math.max(
    0,
    mergeCssColor(paint.cpBind2085, paint.cpBind2060) - 1,
  );
  paint.cpBind2088 = Math.min(
    paint.cpBind2020.length - 1,
    mergeCssColor(
      paint.cpBind2085,
      paint.cpBind2060 + paint.cpBind2024 / paint.cpBind2027,
    ) + 1,
  );
  paint.cpBind2089 = new Map();
  if (
    paint.cpBind2047.bounds.length > 0 &&
    paint.cpBind2087 <= paint.cpBind2088 &&
    paint.cpBind2086 <= paint.$e
  )
    for (let cpBind15100 of paint.cpBind2047.rangesIntersecting({
      rowMin: paint.cpBind2087,
      rowMax: paint.cpBind2088,
      colMin: paint.cpBind2086,
      colMax: paint.$e,
    })) {
      let cpBind17871 =
          cpBind15100.rowMin >= paint.cpBind2087 &&
          cpBind15100.rowMin <= paint.cpBind2088,
        cpBind17872 =
          cpBind15100.colMin >= paint.cpBind2086 &&
          cpBind15100.colMin <= paint.$e;
      if (cpBind17871 && cpBind17872) continue;
      let cpBind17873 = paint.cpBind2089.get(cpBind15100.rowMin);
      cpBind17873 ||
        ((cpBind17873 = new Set()),
        paint.cpBind2089.set(cpBind15100.rowMin, cpBind17873));
      cpBind17873.add(cpBind15100.colMin);
    }
  paint.cpIn6.clearRect(
    0,
    0,
    paint.cpBind2023 / paint.cpBind2027,
    paint.cpBind2024 / paint.cpBind2027,
  );
  paint.cpIn6.fillStyle = paint.cpBind2050;
  paint.cpIn6.fillRect(
    0,
    0,
    paint.cpBind2023 / paint.cpBind2027,
    paint.cpBind2024 / paint.cpBind2027,
  );
  paint.cpBind2090 = new Map();
  for (let cpBind23007 of paint.cpBind2046)
    paint.cpBind2090.set(cpBind23007.index - 1, cpBind23007);
  paint.cpBind2091 = new Map();
  if (paint.cpBind2035 && paint.cpBind2035.length > 0) {
    let cpBind20578 = paint.cpBind2020.length;
    for (let cpBind21577 = 0; cpBind21577 < cpBind20578; cpBind21577++) {
      let cpBind22413 = paint.cpBind2035[cpBind21577] ?? cpBind21577,
        cpBind22414 = paint.cpBind2090.get(cpBind22413);
      cpBind22414 && paint.cpBind2091.set(cpBind21577, cpBind22414);
    }
  } else
    for (let cpBind23008 of paint.cpBind2046)
      paint.cpBind2091.set(cpBind23008.index - 1, cpBind23008);
  paint.at = paint.cpBind2048.listValidationEntries;
  paint.cpBind2092 = (cpIn10967, cpIn10968) => {
    for (let cpBind22589 of paint.at)
      for (let cpBind22908 of cpBind22589.ranges)
        if (paint.cellInMergedRange(cpIn10967, cpIn10968, cpBind22908))
          return cpBind22589;
    return null;
  };
  paint.ensureRowCellIndex = function (cpIn2621) {
    if (
      paint.cpBind2078.rowCellByColIdx.has(cpIn2621) &&
      paint.cpBind2078.rowNonEmptyCols.has(cpIn2621)
    )
      return;
    let cpBind10088 = paint.cpBind2091.get(cpIn2621);
    if (!cpBind10088) {
      paint.cpBind2078.rowCellByColIdx.set(cpIn2621, new Map());
      paint.cpBind2078.rowNonEmptyCols.set(cpIn2621, []);
      return;
    }
    let cpBind10089 = new Map(),
      cpBind10090 = [];
    for (let cpBind15400 of cpBind10088.cells) {
      let cpBind15852 = lettersToColIndex(cpBind15400.address);
      cpBind10089.set(cpBind15852, cpBind15400);
      let cpBind15853 =
          cpBind15400.value != null && String(cpBind15400.value) !== "",
        cpBind15854 = !!cpBind15400.paragraphs?.some((cpIn13616) =>
          cpIn13616.runs?.some(
            (cpIn15836) => (cpIn15836.text ?? "").length > 0,
          ),
        );
      (cpBind15853 ||
        cpBind15854 ||
        cpBind15400.formula ||
        typeof cpBind15400.sharedFormulaSi == "number") &&
        cpBind10090.push(cpBind15852);
    }
    cpBind10090.sort((cpIn16542, cpIn16543) => cpIn16542 - cpIn16543);
    paint.cpBind2078.rowCellByColIdx.set(cpIn2621, cpBind10089);
    paint.cpBind2078.rowNonEmptyCols.set(cpIn2621, cpBind10090);
  };
  paint.cpBind2093 = paint.cpBind2048.colStyleIndices;
  paint.cpBind2094 = paint.cpBind2048.tableResolversByRow;
  paint.cpBind2095 = paint.cpBind2048.tableHorizontalBoundaries;
  paint.cpBind2096 = (cpIn15630) =>
    paint.cpBind2035 && paint.cpBind2035[cpIn15630] != null
      ? paint.cpBind2035[cpIn15630]
      : cpIn15630;
  paint.cpBind2097 = (cpIn10780, cpIn10781) => {
    let cpBind21308 = paint.cpBind2094.get(cpIn10780);
    if (!(!cpBind21308 || cpBind21308.length === 0))
      return cpBind21308.find((item) => item.contains(cpIn10780, cpIn10781));
  };
  paint.cpBind2098 = new Set();
  for (
    let cpBind22977 = paint.cpBind2087;
    cpBind22977 <= paint.cpBind2088;
    cpBind22977 += 1
  )
    paint.cpBind2098.add(cpBind22977);
  for (let cpBind23057 of paint.cpBind2089.keys())
    paint.cpBind2098.add(cpBind23057);
  paint.cpBind2099 = Array.from(paint.cpBind2098)
    .filter((item) => item >= 0 && item < paint.cpBind2020.length)
    .sort((cpIn16544, cpIn16545) => cpIn16544 - cpIn16545);
  paint.cpBind2100 = (cpIn6338) => {
    let cpBind16478 = new Set();
    if (cpIn6338 >= paint.cpBind2087 && cpIn6338 <= paint.cpBind2088)
      for (
        let cpBind22986 = paint.cpBind2086;
        cpBind22986 <= paint.$e;
        cpBind22986 += 1
      )
        cpBind16478.add(cpBind22986);
    let cpBind16479 = paint.cpBind2089.get(cpIn6338);
    if (cpBind16479)
      for (let cpBind23101 of cpBind16479) cpBind16478.add(cpBind23101);
    return Array.from(cpBind16478)
      .filter((item) => item >= 0 && item < paint.cpBind2019.length)
      .sort((cpIn16546, cpIn16547) => cpIn16546 - cpIn16547);
  };
  paint.cpBind2101 = paint.cpBind2043.sparklineGroups.renderContext;
  paint._t = paint.cpBind2039?.setChartHoverTargets ? [] : null;
  paint.cpBind2102 = (cpIn16548) => cpIn16548 / 9525;
  paint.cpBind2103 = paint.cpBind2043.charts.items;
}
