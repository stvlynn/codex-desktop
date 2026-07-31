// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-98: chart-data-labels boundary hooks.

export type ChartDataLabelsBoundaryHooks = {
  En: any;
  formatFallback: (...args: any[]) => any;
  formatNumber: (...args: any[]) => any;
  bh152: (...args: any[]) => any;
  /** Color resolve (workbookSt). */
  resolveColor: (...args: any[]) => any;
  /** Default muted fill (legacy $D). */
  defaultMuted: any;
  /** Chart font family (Binding837). */
  chartFontFamily: any;
};

export const cdlH: ChartDataLabelsBoundaryHooks =
  {} as ChartDataLabelsBoundaryHooks;

export function wireChartDataLabelsBoundaryHooks(
  next: ChartDataLabelsBoundaryHooks,
): void {
  Object.assign(cdlH, next);
}
