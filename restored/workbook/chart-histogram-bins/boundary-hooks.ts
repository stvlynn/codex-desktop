// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-102: chart-histogram-bins boundary hooks.

export type ChartHistogramBinsBoundaryHooks = {
  parseBinLabel: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  coerceNumber: (...args: any[]) => any;
  valueExtent: (...args: any[]) => any;
  binWidth: (...args: any[]) => any;
  binLabel: (...args: any[]) => any;
  INTERVAL_CLOSED_LEFT: any;
};

export const chbinH: ChartHistogramBinsBoundaryHooks =
  {} as ChartHistogramBinsBoundaryHooks;

export function wireChartHistogramBinsBoundaryHooks(
  next: ChartHistogramBinsBoundaryHooks,
): void {
  Object.assign(chbinH, next);
}
