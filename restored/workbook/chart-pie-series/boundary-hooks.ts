// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101: chart-pie-series boundary hooks.

export type ChartPieSeriesBoundaryHooks = {
  /** Slice mid-angle helpers (legacy dbe). */
  sliceMid: (...args: any[]) => any;
  /** Pie data-label paint (legacy fbe). */
  paintPieLabels: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh482: (...args: any[]) => any;
};

export const cpsH: ChartPieSeriesBoundaryHooks =
  {} as ChartPieSeriesBoundaryHooks;

export function wireChartPieSeriesBoundaryHooks(
  next: ChartPieSeriesBoundaryHooks,
): void {
  Object.assign(cpsH, next);
}
