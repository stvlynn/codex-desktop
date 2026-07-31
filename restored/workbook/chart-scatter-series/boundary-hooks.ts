// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-96: chart-scatter-series boundary hooks.

export type ChartScatterSeriesBoundaryHooks = {
  bh352: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
  bh523: (...args: any[]) => any;
  bh524: (...args: any[]) => any;
  bh527: (...args: any[]) => any;
  bh556: (...args: any[]) => any;
};

export const cssH: ChartScatterSeriesBoundaryHooks =
  {} as ChartScatterSeriesBoundaryHooks;

export function wireChartScatterSeriesBoundaryHooks(
  next: ChartScatterSeriesBoundaryHooks,
): void {
  Object.assign(cssH, next);
}
