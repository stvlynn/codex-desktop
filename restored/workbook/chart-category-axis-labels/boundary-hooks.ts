// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-98: chart-category-axis-labels boundary hooks.

export type ChartCategoryAxisLabelsBoundaryHooks = {
  bh427: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh431: (...args: any[]) => any;
  bh435: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh543: (...args: any[]) => any;
  /** Overlap epsilon (Binding1170). */
  overlapEpsilon: any;
  /** Chart font family (Binding837). */
  chartFontFamily: any;
};

export const calH: ChartCategoryAxisLabelsBoundaryHooks =
  {} as ChartCategoryAxisLabelsBoundaryHooks;

export function wireChartCategoryAxisLabelsBoundaryHooks(
  next: ChartCategoryAxisLabelsBoundaryHooks,
): void {
  Object.assign(calH, next);
}
