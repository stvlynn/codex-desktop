// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-histogram-bars boundary hooks.

export type ChartHistogramBarsBoundaryHooks = {
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
};

export const chbH: ChartHistogramBarsBoundaryHooks =
  {} as ChartHistogramBarsBoundaryHooks;

export function wireChartHistogramBarsBoundaryHooks(
  next: ChartHistogramBarsBoundaryHooks,
): void {
  Object.assign(chbH, next);
}
