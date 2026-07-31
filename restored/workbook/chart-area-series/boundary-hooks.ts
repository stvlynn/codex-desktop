// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-area-series boundary hooks.

export type ChartAreaSeriesBoundaryHooks = {
  /** Stack/standard area layers (legacy hxe). */
  stackAreaLayers: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh464: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
};

export const casH: ChartAreaSeriesBoundaryHooks =
  {} as ChartAreaSeriesBoundaryHooks;

export function wireChartAreaSeriesBoundaryHooks(
  next: ChartAreaSeriesBoundaryHooks,
): void {
  Object.assign(casH, next);
}
