// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-92: chart-legend boundary hooks
// (leave-behind chart helpers still on the mega boundary).

export type ChartLegendBoundaryHooks = {
  bh387: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh472: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh481: (...args: any[]) => any;
  bh482: (...args: any[]) => any;
  bh483: (...args: any[]) => any;
  bh484: (...args: any[]) => any;
  bh486: (...args: any[]) => any;
  bh487: (...args: any[]) => any;
  bh488: (...args: any[]) => any;
  bh489: (...args: any[]) => any;
  bh490: (...args: any[]) => any;
};

/** Live bag — wired from workbook-runtime after peel. */
export const clH: ChartLegendBoundaryHooks = {} as ChartLegendBoundaryHooks;

export function wireChartLegendBoundaryHooks(
  next: ChartLegendBoundaryHooks,
): void {
  Object.assign(clH, next);
}
