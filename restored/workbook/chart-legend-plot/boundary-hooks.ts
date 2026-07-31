// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-98: chart-legend-plot boundary hooks.

export type ChartLegendPlotBoundaryHooks = {
  /** Legend gap px (Binding1164). */
  legendGapPx: any;
  /** Legend max fraction helpers (Binding1167). */
  legendMaxFraction: any;
  /** Measure legend box (obe). */
  measureLegend: (...args: any[]) => any;
  /** Reserve title band (uSe). */
  reserveTitleBand: (...args: any[]) => any;
};

export const clpH: ChartLegendPlotBoundaryHooks =
  {} as ChartLegendPlotBoundaryHooks;

export function wireChartLegendPlotBoundaryHooks(
  next: ChartLegendPlotBoundaryHooks,
): void {
  Object.assign(clpH, next);
}
