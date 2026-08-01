// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-158: canvas-paint deps via direct imports
// (wireCanvasPaintBoundaryHooks leave-behind retired).
// Twe/Ewe/Binding1252/362/1266 are empty no-ops (shell-mid stubs).

import { fillCellBackground as fillCellBackgroundImpl } from "./fill-cell-background-impl";
import { clipPaintRect as clipPaintRectImpl } from "./clip-paint-rect-impl";
import { paintCharts as paintChartsImpl } from "./paint-charts-impl";
import { prepareDiagonalStroke as prepareDiagonalStrokeImpl } from "./prepare-diagonal-stroke-impl";
import { JCe as paintSparklinesImpl } from "./paint-sparklines-impl";
import { workbookHelper602 as parseRgbCss } from "./parse-rgb-css-impl";
import {
  ensureTextBoxClusterInit,
  layoutTextElement,
  renderTextLayout,
} from "../text-box";
import {
  ensureStyleResolveInit,
  resolvePlaceholderTextStyle,
} from "../text-style";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { wr, Qt } from "../presentation-protobuf";
import { _workbookS, _workbookO } from "../presentation-doc";
import {
  ensureRotationScaleInit,
  rotationEmuToDegrees,
  rotationEmuToRadians,
} from "../geometry-transform";
import { qCe, $Ce } from "../chart-layout-ensures";
import { Nwe, Iwe, paintImages as paintImagesImpl } from "../paint-images";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import {
  ensureSsfFormatInit,
  ensureStripFontFaceNameInit,
  formatCellValueWithNumFmt,
} from "../cell-xf-format";
import { workbookBinding1238 } from "../guide-layout-consts";
import { wwe } from "../cf-traffic-colors";
import { cwe, awe } from "../paint-mids";
import {
  ensureDropdownPaddingInit,
  ensureMergeCellTextStyleInit,
  mergeCellTextStyleOverrides,
  dropdownExtraWidthForRowHeight,
} from "../worksheet-autofit";
import { ahe, workbookBinding699 } from "../table-styles";
import { _u } from "../binding662-gate";
import { owe } from "../paint-checkbox";
import { twe } from "../sheet-hidden-boundaries";
import {
  paintIconSetGlyph as paintIconSetGlyphImpl,
  layoutUnsupportedIconBadge,
} from "../icon-set-paint";
import { workbookHelper592 as strokeCellBorderSideImpl } from "../formula-shared-refs";
import { applyShapeGeometryPaint } from "../shape-geometry-apply";
import {
  cellHintKey,
  getPivotTableProto,
  parseCellHintKey,
} from "../pivot-table";
import { indexedExcelColor } from "../../utils/spreadsheet-address-utils";
import { resolveColorToCssRgba as workbookSt } from "../color-resolve";

export type CanvasPaintBoundaryHooks = Record<string, never>;

export function wireCanvasPaintBoundaryHooks(
  _next?: CanvasPaintBoundaryHooks,
): void {}

export const ensureWorkbookZ = () => ensureTextBoxClusterInit();
export const ensureWorkbookT = () => ensureStyleResolveInit();
export const ensureWorkbookXt = () => ensureCssNamedColorsInit();
export const ensureWr = () => wr();
export const ensureWorkbookBinding1252 = () => {};
export const ensureWorkbookBinding1266 = () => {};
export const ensureWorkbookS = () => _workbookS();
export const ensureDollarX = () => ensureRotationScaleInit();
export const ensureQCe = () => qCe();
export const ensureDollarCe = () => $Ce();
export const ensureNwe = () => Nwe();
export const ensureSpreadsheetVn = () => spreadsheetVn();
export const ensureWorkbookBinding583 = () => ensureSsfFormatInit();
export const ensureWorkbookBinding1238 = () => workbookBinding1238();
export const ensureQt = () => Qt();
export const ensureIwe = () => Iwe();
export const ensureCwe = () => cwe();
export const ensureWwe = () => wwe();
export const ensureTwe = () => {};
export const ensureEwe = () => {};
export const ensureWorkbookBinding586 = () => ensureStripFontFaceNameInit();
export const ensureWorkbookBinding588 = () => ensureDropdownPaddingInit();
export const ensureWorkbookBinding587 = () => ensureMergeCellTextStyleInit();
export const ensureWorkbookBinding362 = () => {};
export const ensureWorkbookBinding834 = () => ahe();
export const ensureWorkbookBinding699 = () => workbookBinding699;
export const ensureU = () => _u();
export const paintImages = (...args: any[]) => paintImagesImpl(...args);
export const paintSparklines = (...args: any[]) => paintSparklinesImpl(...args);
export const paintCharts = (...args: any[]) => paintChartsImpl(...args);
export const checkboxHitTest = (...args: any[]) => awe(...args);
export const paintCheckboxBox = (...args: any[]) => owe(...args);
export const paintDataBarFill = (...args: any[]) => twe(...args);
export const paintIconSetGlyph = (...args: any[]) =>
  paintIconSetGlyphImpl(...args);
export const paintUnsupportedBadge = (...args: any[]) =>
  layoutUnsupportedIconBadge(...args);
export const layoutTextBox = (...args: any[]) => layoutTextElement(...args);
export const drawCheckboxControl = (...args: any[]) =>
  renderTextLayout(...args);
export const paintCellTextRuns = (...args: any[]) =>
  formatCellValueWithNumFmt(...args);
export const measurePaintTextWidth = (...args: any[]) =>
  mergeCellTextStyleOverrides(...args);
export const dropdownChevronInset = (...args: any[]) =>
  dropdownExtraWidthForRowHeight(...args);
export const strokeCellBorderSide = (...args: any[]) =>
  strokeCellBorderSideImpl(...args);
export const prepareDiagonalStroke = (...args: any[]) =>
  prepareDiagonalStrokeImpl(...args);
export const fillCellBackground = (...args: any[]) =>
  fillCellBackgroundImpl(...args);
export const clipPaintRect = (...args: any[]) => clipPaintRectImpl(...args);
export const resolveShapeFillBitmap = (...args: any[]) => parseRgbCss(...args);
export const layoutPaintedText = (...args: any[]) =>
  resolvePlaceholderTextStyle(...args);
export const emuToCssPx = (...args: any[]) => rotationEmuToDegrees(...args);
export const cssPxToEmu = (...args: any[]) => rotationEmuToRadians(...args);
export const matchPivotStyleName = (...args: any[]) => cellHintKey(...args);
export const pivotStyleElementOf = (...args: any[]) =>
  getPivotTableProto(...args);
export const renderDrawingShape = (...args: any[]) =>
  applyShapeGeometryPaint(...args);
export const getWorkbookO = () => _workbookO;
export { indexedExcelColor };
export const hre = (...args: any[]) => parseCellHintKey(...args);
export { workbookSt };
