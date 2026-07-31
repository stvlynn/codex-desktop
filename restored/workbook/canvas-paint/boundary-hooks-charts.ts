// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-106: paintCharts leave-behind hooks (HCe / helper586 / paintChartFromProto).

export type PaintChartsBoundaryHooks = {
  evalSeriesFormula: (...args: any[]) => any;
  evalCategoryFormula: (...args: any[]) => any;
  paintChartFromProto: (...args: any[]) => any;
};

export const pchH: PaintChartsBoundaryHooks = {} as PaintChartsBoundaryHooks;

export function wirePaintChartsBoundaryHooks(
  next: PaintChartsBoundaryHooks,
): void {
  Object.assign(pchH, next);
}
