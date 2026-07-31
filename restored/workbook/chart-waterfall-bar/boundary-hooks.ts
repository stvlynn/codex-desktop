// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-waterfall-bar boundary hooks.

export type ChartWaterfallBarBoundaryHooks = {
  paintBar: (...args: any[]) => any;
  paintConnector: (...args: any[]) => any;
  paintBridge: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  /** Per-point waterfall fill override (legacy lCe). */
  pointFillOverride: (...args: any[]) => any;
  bh463: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh575: (...args: any[]) => any;
};

export const cwbH: ChartWaterfallBarBoundaryHooks =
  {} as ChartWaterfallBarBoundaryHooks;

export function wireChartWaterfallBarBoundaryHooks(
  next: ChartWaterfallBarBoundaryHooks,
): void {
  Object.assign(cwbH, next);
}
