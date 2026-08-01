// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-127: chart-label-overflow hooks.

export type ChartLabelOverflowHooks = {
  isNonEmptyCategory: (...args: any[]) => any;
  measureCategoryAdvance: (...args: any[]) => any;
};

export const cloH: ChartLabelOverflowHooks = {} as ChartLabelOverflowHooks;

export function wireChartLabelOverflowBoundaryHooks(
  next: ChartLabelOverflowHooks,
): void {
  Object.assign(cloH, next);
}
