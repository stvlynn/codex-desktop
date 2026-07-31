// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-95: chart-radar boundary hooks.

export type ChartRadarBoundaryHooks = {
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  prepareRadarSeries: (...args: any[]) => any;
};

export const crH: ChartRadarBoundaryHooks = {} as ChartRadarBoundaryHooks;

export function wireChartRadarBoundaryHooks(next: ChartRadarBoundaryHooks): void {
  Object.assign(crH, next);
}
