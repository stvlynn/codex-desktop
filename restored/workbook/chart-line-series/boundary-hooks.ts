// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99/103: chart-line-series boundary hooks.

export type ChartLineSeriesBoundaryHooks = {
  bh425: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh479: (...args: any[]) => any;
  bh480: (...args: any[]) => any;
  bh481: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh527: (...args: any[]) => any;
};

export const clnH: ChartLineSeriesBoundaryHooks =
  {} as ChartLineSeriesBoundaryHooks;

export function wireChartLineSeriesBoundaryHooks(
  next: ChartLineSeriesBoundaryHooks,
): void {
  Object.assign(clnH, next);
}
