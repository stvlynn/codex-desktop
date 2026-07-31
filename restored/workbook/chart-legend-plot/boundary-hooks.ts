// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-98/104: chart-legend-plot boundary hooks.

export type ChartLegendPlotBoundaryHooks = {
  /** Legend gap px (Binding1164). */
  legendGapPx: any;
  /** Legend max fraction helpers (Binding1167). */
  legendMaxFraction: any;
  /** Measure legend box (obe). */
  measureLegend: (...args: any[]) => any;
  /** Title text extractor (helper548). */
  titleText: (...args: any[]) => any;
  /** Manual layout rect (helper458). */
  applyManualLayout: (...args: any[]) => any;
  /** Layout title element (lSe). */
  layoutTitleElement: (...args: any[]) => any;
  /** Title height pad (Binding1182). */
  titlePadPx: any;
  /** Default title height fraction (Binding1183). */
  titleHeightFrac: any;
};

export const clpH: ChartLegendPlotBoundaryHooks =
  {} as ChartLegendPlotBoundaryHooks;

export function wireChartLegendPlotBoundaryHooks(
  next: ChartLegendPlotBoundaryHooks,
): void {
  Object.assign(clpH, next);
}
