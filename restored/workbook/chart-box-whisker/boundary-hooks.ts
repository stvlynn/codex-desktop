// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-98: chart-box-whisker boundary hooks.

export type ChartBoxWhiskerBoundaryHooks = {
  bh347: (...args: any[]) => any;
  bh348: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
};

export const cbwH: ChartBoxWhiskerBoundaryHooks =
  {} as ChartBoxWhiskerBoundaryHooks;

export function wireChartBoxWhiskerBoundaryHooks(
  next: ChartBoxWhiskerBoundaryHooks,
): void {
  Object.assign(cbwH, next);
}
