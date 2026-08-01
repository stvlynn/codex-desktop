// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-128: chart-bin-width hooks.

export type ChartBinWidthHooks = {
  coerceBinNumber: (...args: any[]) => any;
};

export const cbwH: ChartBinWidthHooks = {} as ChartBinWidthHooks;

export function wireChartBinWidthBoundaryHooks(next: ChartBinWidthHooks): void {
  Object.assign(cbwH, next);
}
