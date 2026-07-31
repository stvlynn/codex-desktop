// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-95: chart-plot-layout boundary hooks.

export type ChartPlotLayoutBoundaryHooks = {
  bh352: (...args: any[]) => any;
  bh388: (...args: any[]) => any;
  bh402: (...args: any[]) => any;
  bh403: (...args: any[]) => any;
  bh422: (...args: any[]) => any;
  bh423: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh438: (...args: any[]) => any;
  bh440: (...args: any[]) => any;
  bh459: (...args: any[]) => any;
  bh494: (...args: any[]) => any;
  paintCategoryAxisLabels: (...args: any[]) => any;
};

export const cplH: ChartPlotLayoutBoundaryHooks =
  {} as ChartPlotLayoutBoundaryHooks;

export function wireChartPlotLayoutBoundaryHooks(
  next: ChartPlotLayoutBoundaryHooks,
): void {
  Object.assign(cplH, next);
}
