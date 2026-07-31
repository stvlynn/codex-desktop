// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-97: chart-scatter-scale boundary hooks.

export type ChartScatterScaleBoundaryHooks = {
  bh398: (...args: any[]) => any;
  bh400: (...args: any[]) => any;
  bh533: (...args: any[]) => any;
  bh535: (...args: any[]) => any;
  bh536: (...args: any[]) => any;
  bh537: (...args: any[]) => any;
  bh538: (...args: any[]) => any;
  bh539: (...args: any[]) => any;
  Oxe: (...args: any[]) => any;
  tickCounts: (...args: any[]) => any;
  niceAxisDomain: (...args: any[]) => any;
};

export const csscH: ChartScatterScaleBoundaryHooks =
  {} as ChartScatterScaleBoundaryHooks;

export function wireChartScatterScaleBoundaryHooks(
  next: ChartScatterScaleBoundaryHooks,
): void {
  Object.assign(csscH, next);
}
