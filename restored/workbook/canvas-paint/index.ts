// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66/106: canvas-paint barrel (legacy BYe cluster).

export {
  wireCanvasPaintBoundaryHooks,
  type CanvasPaintBoundaryHooks,
} from "./boundary-hooks";
export { paint } from "./paint-bag";
export {
  ensureCanvasPaintConstsInit,
  PAINT_FONT_SCALE,
  PAINT_MAX_SCROLL,
  PAINT_MAX_EXTENT,
  PAINT_ACCENT_DEFAULT,
} from "./paint-consts";
export {
  ensurePaintEmuMapsInit,
  buildPivotCellHintMap,
  notifyRowHeights,
} from "./paint-helpers-impl";
export { paintSheetShapes } from "./paint-shapes";
export { paintSpreadsheetCanvas, BYe } from "./paint-spreadsheet";
export { ensureCanvasPaintClusterInit } from "./ensure-canvas-paint-init";
export {
  fillCellBackground,
  workbookHelper600,
} from "./fill-cell-background-impl";
export {
  paintCharts,
  hydrateChartSeries,
  sheetMapByName,
  zCe,
  BCe,
  VCe,
} from "./paint-charts-impl";
export { wirePaintChartsBoundaryHooks, pchH } from "./boundary-hooks-charts";

export {
  paintSparklines as paintSparklinesImpl,
  JCe,
} from "./paint-sparklines-impl";
