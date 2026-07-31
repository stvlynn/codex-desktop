// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101: chart-bubble-series boundary hooks.

export type ChartBubbleSeriesBoundaryHooks = {
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh533: (...args: any[]) => any;
  bh534: (...args: any[]) => any;
};

export const cbbH: ChartBubbleSeriesBoundaryHooks =
  {} as ChartBubbleSeriesBoundaryHooks;

export function wireChartBubbleSeriesBoundaryHooks(
  next: ChartBubbleSeriesBoundaryHooks,
): void {
  Object.assign(cbbH, next);
}
