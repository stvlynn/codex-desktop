// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-102: chart-treemap-plot-layout boundary hooks.

export type ChartTreemapPlotLayoutBoundaryHooks = {
  maxLeftFrac: any;
  maxRightFrac: any;
  maxBottomFrac: any;
  labelPad: any;
  layoutCatAxis: (...args: any[]) => any;
  layoutValAxisRight: (...args: any[]) => any;
  crossingRatio: (...args: any[]) => any;
  shiftForCrossing: (...args: any[]) => any;
  layoutValAxisBottom: (...args: any[]) => any;
  categoryLabelInset: (...args: any[]) => any;
  isFlippedX: (...args: any[]) => any;
  isFlippedY: (...args: any[]) => any;
  axisLabelReserve: (...args: any[]) => any;
};

export const ctlH: ChartTreemapPlotLayoutBoundaryHooks =
  {} as ChartTreemapPlotLayoutBoundaryHooks;

export function wireChartTreemapPlotLayoutBoundaryHooks(
  next: ChartTreemapPlotLayoutBoundaryHooks,
): void {
  Object.assign(ctlH, next);
}
