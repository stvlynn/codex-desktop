// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-95/103: chart-bar-series boundary hooks.

export type ChartBarSeriesBoundaryHooks = {
  bh393: (...args: any[]) => any;
  bh394: (...args: any[]) => any;
  bh404: (...args: any[]) => any;
  bh419: (...args: any[]) => any;
  bh420: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
};

export const cbsH: ChartBarSeriesBoundaryHooks =
  {} as ChartBarSeriesBoundaryHooks;

export function wireChartBarSeriesBoundaryHooks(
  next: ChartBarSeriesBoundaryHooks,
): void {
  Object.assign(cbsH, next);
}
