// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-109: chart-sunburst-layout boundary hooks.

export type ChartSunburstLayoutBoundaryHooks = {
  bh347: (...args: any[]) => any;
  pathSep: any;
  palette: any;
  scaleOrdinal: (...args: any[]) => any;
};

export const cslH: ChartSunburstLayoutBoundaryHooks =
  {} as ChartSunburstLayoutBoundaryHooks;

export function wireChartSunburstLayoutBoundaryHooks(
  next: ChartSunburstLayoutBoundaryHooks,
): void {
  Object.assign(cslH, next);
}
