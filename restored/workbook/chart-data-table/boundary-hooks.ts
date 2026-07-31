// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-96: chart-data-table boundary hooks.

export type ChartDataTableBoundaryHooks = {
  bh433: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh478: (...args: any[]) => any;
};

export const cdtH: ChartDataTableBoundaryHooks =
  {} as ChartDataTableBoundaryHooks;

export function wireChartDataTableBoundaryHooks(
  next: ChartDataTableBoundaryHooks,
): void {
  Object.assign(cdtH, next);
}
