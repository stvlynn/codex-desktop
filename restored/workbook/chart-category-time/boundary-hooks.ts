// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-127: chart-category-time hooks (presentation N enums + label fmt).

export type ChartCategoryTimeHooks = {
  presentationN: any;
  formatCategoryLabel: (...args: any[]) => any;
  excelSerialToUtcDate: (...args: any[]) => any;
  utcDateToExcelSerial: (...args: any[]) => any;
};

export const cctH: ChartCategoryTimeHooks = {} as ChartCategoryTimeHooks;

export function wireChartCategoryTimeBoundaryHooks(
  next: ChartCategoryTimeHooks,
): void {
  Object.assign(cctH, next);
}
