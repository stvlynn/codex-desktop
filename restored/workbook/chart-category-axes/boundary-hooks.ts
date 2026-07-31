// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-96: chart-category-axes boundary hooks.

export type ChartCategoryAxesBoundaryHooks = {
  bh404: (...args: any[]) => any;
  bh406: (...args: any[]) => any;
  bh419: (...args: any[]) => any;
  bh427: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh429: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh434: (...args: any[]) => any;
  bh435: (...args: any[]) => any;
  bh436: (...args: any[]) => any;
  bh439: (...args: any[]) => any;
  bh498: (...args: any[]) => any;
  bh499: (...args: any[]) => any;
};

export const ccaH: ChartCategoryAxesBoundaryHooks =
  {} as ChartCategoryAxesBoundaryHooks;

export function wireChartCategoryAxesBoundaryHooks(
  next: ChartCategoryAxesBoundaryHooks,
): void {
  Object.assign(ccaH, next);
}
