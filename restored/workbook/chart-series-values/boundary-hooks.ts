// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-104: chart-series-values boundary hooks.

export type ChartSeriesValuesBoundaryHooks = {
  /** Chart number coerce (helper347). */
  coerceChartNumber: (...args: any[]) => any;
  /** Finite number parse (helper550). */
  parseFiniteNumber: (...args: any[]) => any;
};

export const csvH: ChartSeriesValuesBoundaryHooks =
  {} as ChartSeriesValuesBoundaryHooks;

export function wireChartSeriesValuesBoundaryHooks(
  next: ChartSeriesValuesBoundaryHooks,
): void {
  Object.assign(csvH, next);
}
