// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-102/103: chart-funnel-segments boundary hooks.

export type ChartFunnelSegmentsBoundaryHooks = {
  /** Category labels for series (helper348). */
  seriesCategories: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
};

export const cfsH: ChartFunnelSegmentsBoundaryHooks =
  {} as ChartFunnelSegmentsBoundaryHooks;

export function wireChartFunnelSegmentsBoundaryHooks(
  next: ChartFunnelSegmentsBoundaryHooks,
): void {
  Object.assign(cfsH, next);
}
