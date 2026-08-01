// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-89/160: chart-paint barrel (direct imports; wire retired).
// (legacy chart canvas paint cluster).

export { ensureChartPaintInit } from "./ensure-chart-paint-init";
export { wireChartPaintBoundaryHooks, cpH } from "./boundary-hooks";

export {
  chartCornerRadiusPx,
  pathRoundedRect,
  fillChartBackground,
  strokeChartBorder,
  strokePlotAreaBorder,
  paintChartChrome,
  axisCrossesZero,
  doughnutHoleLayout,
  ensureChartPaintConsts,
  workbookBinding1224,
  workbookBinding1225,
} from "./chart-paint-prelude-impl";

export {
  paintChartElement,
  paintChartFromProto,
} from "./chart-paint-entry-impl";
export { paintChart } from "./paint-chart-impl";

export { paintAxisTitleText } from "./paint-axis-title-text-impl";

export {
  resolveAxisTextStyle,
  layoutCategoryLabels,
  RCe,
} from "./layout-category-labels-impl";

export { paintRadialGridlines, KSe } from "./paint-radial-gridlines-impl";

export {
  workbookHelper426,
  workbookHelper552,
  workbookHelper556,
} from "./chart-paint-wire-helpers-impl";

export { workbookHelper485 } from "./filter-hidden-indices-helper-impl";
