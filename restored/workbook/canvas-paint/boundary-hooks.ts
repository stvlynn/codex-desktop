// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66/105/106: boundary deps for canvas-paint cluster.

import { fillCellBackground as fillCellBackgroundImpl } from "./fill-cell-background-impl";
import { clipPaintRect as clipPaintRectImpl } from "./clip-paint-rect-impl";
import { paintCharts as paintChartsImpl } from "./paint-charts-impl";
import { prepareDiagonalStroke as prepareDiagonalStrokeImpl } from "./prepare-diagonal-stroke-impl";

export type CanvasPaintBoundaryHooks = {
  ensureWorkbookZ: () => void;
  ensureWorkbookT: () => void;
  ensureWorkbookXt: () => void;
  ensureWr: () => void;
  ensureWorkbookBinding1252: () => void;
  ensureWorkbookBinding1266: () => void;
  ensureWorkbookS: () => void;
  ensureDollarX: () => void;
  ensureQCe: () => void;
  ensureDollarCe: () => void;
  ensureNwe: () => void;
  ensureSpreadsheetVn: () => void;
  ensureWorkbookBinding583: () => void;
  ensureWorkbookBinding1238: () => void;
  ensureQt: () => void;
  ensureIwe: () => void;
  ensureCwe: () => void;
  ensureWwe: () => void;
  ensureTwe: () => void;
  ensureEwe: () => void;
  ensureWorkbookBinding586: () => void;
  ensureWorkbookBinding588: () => void;
  ensureWorkbookBinding587: () => void;
  ensureWorkbookBinding362: () => void;
  ensureWorkbookBinding834: () => void;
  ensureWorkbookBinding699: () => any;
  ensureU: () => void;
  paintImages: (...args: any[]) => any;
  paintSparklines: (...args: any[]) => any;
  paintCharts: (...args: any[]) => any;
  checkboxHitTest: (...args: any[]) => any;
  paintCheckboxBox: (...args: any[]) => any;
  paintDataBarFill: (...args: any[]) => any;
  paintIconSetGlyph: (...args: any[]) => any;
  paintUnsupportedBadge: (...args: any[]) => any;
  layoutTextBox: (...args: any[]) => any;
  drawCheckboxControl: (...args: any[]) => any;
  paintCellTextRuns: (...args: any[]) => any;
  measurePaintTextWidth: (...args: any[]) => any;
  dropdownChevronInset: (...args: any[]) => any;
  strokeCellBorderSide: (...args: any[]) => any;
  prepareDiagonalStroke: (...args: any[]) => any;
  fillCellBackground: (...args: any[]) => any;
  clipPaintRect: (...args: any[]) => any;
  resolveShapeFillBitmap: (...args: any[]) => any;
  layoutPaintedText: (...args: any[]) => any;
  emuToCssPx: (...args: any[]) => any;
  cssPxToEmu: (...args: any[]) => any;
  matchPivotStyleName: (...args: any[]) => any;
  pivotStyleElementOf: (...args: any[]) => any;
  renderDrawingShape: (...args: any[]) => any;
  getWorkbookO: () => any;
  indexedExcelColor: (...args: any[]) => any;
  hre: (...args: any[]) => any;
  workbookSt: (...args: any[]) => any;
};

let hooks: CanvasPaintBoundaryHooks | null = null;

export function wireCanvasPaintBoundaryHooks(
  next: CanvasPaintBoundaryHooks,
): void {
  hooks = next;
}

function requirePaintHooks(): CanvasPaintBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "canvas-paint hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export const ensureWorkbookZ = () => requirePaintHooks().ensureWorkbookZ();
export const ensureWorkbookT = () => requirePaintHooks().ensureWorkbookT();
export const ensureWorkbookXt = () => requirePaintHooks().ensureWorkbookXt();
export const ensureWr = () => requirePaintHooks().ensureWr();
export const ensureWorkbookBinding1252 = () =>
  requirePaintHooks().ensureWorkbookBinding1252();
export const ensureWorkbookBinding1266 = () =>
  requirePaintHooks().ensureWorkbookBinding1266();
export const ensureWorkbookS = () => requirePaintHooks().ensureWorkbookS();
export const ensureDollarX = () => requirePaintHooks().ensureDollarX();
export const ensureQCe = () => requirePaintHooks().ensureQCe();
export const ensureDollarCe = () => requirePaintHooks().ensureDollarCe();
export const ensureNwe = () => requirePaintHooks().ensureNwe();
export const ensureSpreadsheetVn = () =>
  requirePaintHooks().ensureSpreadsheetVn();
export const ensureWorkbookBinding583 = () =>
  requirePaintHooks().ensureWorkbookBinding583();
export const ensureWorkbookBinding1238 = () =>
  requirePaintHooks().ensureWorkbookBinding1238();
export const ensureQt = () => requirePaintHooks().ensureQt();
export const ensureIwe = () => requirePaintHooks().ensureIwe();
export const ensureCwe = () => requirePaintHooks().ensureCwe();
export const ensureWwe = () => requirePaintHooks().ensureWwe();
export const ensureTwe = () => requirePaintHooks().ensureTwe();
export const ensureEwe = () => requirePaintHooks().ensureEwe();
export const ensureWorkbookBinding586 = () =>
  requirePaintHooks().ensureWorkbookBinding586();
export const ensureWorkbookBinding588 = () =>
  requirePaintHooks().ensureWorkbookBinding588();
export const ensureWorkbookBinding587 = () =>
  requirePaintHooks().ensureWorkbookBinding587();
export const ensureWorkbookBinding362 = () =>
  requirePaintHooks().ensureWorkbookBinding362();
export const ensureWorkbookBinding834 = () =>
  requirePaintHooks().ensureWorkbookBinding834();
export const ensureWorkbookBinding699 = () =>
  requirePaintHooks().ensureWorkbookBinding699();
export const ensureU = () => requirePaintHooks().ensureU();
export const paintImages = (...args: any[]) =>
  requirePaintHooks().paintImages(...args);
export const paintSparklines = (...args: any[]) =>
  requirePaintHooks().paintSparklines(...args);
export const paintCharts = (...args: any[]) => paintChartsImpl(...args);
export const checkboxHitTest = (...args: any[]) =>
  requirePaintHooks().checkboxHitTest(...args);
export const paintCheckboxBox = (...args: any[]) =>
  requirePaintHooks().paintCheckboxBox(...args);
export const paintDataBarFill = (...args: any[]) =>
  requirePaintHooks().paintDataBarFill(...args);
export const paintIconSetGlyph = (...args: any[]) =>
  requirePaintHooks().paintIconSetGlyph(...args);
export const paintUnsupportedBadge = (...args: any[]) =>
  requirePaintHooks().paintUnsupportedBadge(...args);
export const layoutTextBox = (...args: any[]) =>
  requirePaintHooks().layoutTextBox(...args);
export const drawCheckboxControl = (...args: any[]) =>
  requirePaintHooks().drawCheckboxControl(...args);
export const paintCellTextRuns = (...args: any[]) =>
  requirePaintHooks().paintCellTextRuns(...args);
export const measurePaintTextWidth = (...args: any[]) =>
  requirePaintHooks().measurePaintTextWidth(...args);
export const dropdownChevronInset = (...args: any[]) =>
  requirePaintHooks().dropdownChevronInset(...args);
export const strokeCellBorderSide = (...args: any[]) =>
  requirePaintHooks().strokeCellBorderSide(...args);
export const prepareDiagonalStroke = (...args: any[]) =>
  prepareDiagonalStrokeImpl(...args);
export const fillCellBackground = (...args: any[]) =>
  fillCellBackgroundImpl(...args);
export const clipPaintRect = (...args: any[]) => clipPaintRectImpl(...args);
export const resolveShapeFillBitmap = (...args: any[]) =>
  requirePaintHooks().resolveShapeFillBitmap(...args);
export const layoutPaintedText = (...args: any[]) =>
  requirePaintHooks().layoutPaintedText(...args);
export const emuToCssPx = (...args: any[]) =>
  requirePaintHooks().emuToCssPx(...args);
export const cssPxToEmu = (...args: any[]) =>
  requirePaintHooks().cssPxToEmu(...args);
export const matchPivotStyleName = (...args: any[]) =>
  requirePaintHooks().matchPivotStyleName(...args);
export const pivotStyleElementOf = (...args: any[]) =>
  requirePaintHooks().pivotStyleElementOf(...args);
export const renderDrawingShape = (...args: any[]) =>
  requirePaintHooks().renderDrawingShape(...args);
export const getWorkbookO = () => requirePaintHooks().getWorkbookO();
export const indexedExcelColor = (...args: any[]) =>
  requirePaintHooks().indexedExcelColor(...args);
export const hre = (...args: any[]) => requirePaintHooks().hre(...args);
export const workbookSt = (...args: any[]) =>
  requirePaintHooks().workbookSt(...args);
