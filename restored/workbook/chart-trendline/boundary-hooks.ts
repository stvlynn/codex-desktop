// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-97: chart-trendline boundary hooks.

export type ChartTrendlineBoundaryHooks = {
  bh352: (...args: any[]) => any;
  bh523: (...args: any[]) => any;
  bh524: (...args: any[]) => any;
};

export const ctlH: ChartTrendlineBoundaryHooks =
  {} as ChartTrendlineBoundaryHooks;

export function wireChartTrendlineBoundaryHooks(
  next: ChartTrendlineBoundaryHooks,
): void {
  Object.assign(ctlH, next);
}
