// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-95: chart-bar-direction boundary hooks.

export type ChartBarDirectionBoundaryHooks = {
  bh393: (...args: any[]) => any;
  bh394: (...args: any[]) => any;
  bh404: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
};

export const cbdH: ChartBarDirectionBoundaryHooks =
  {} as ChartBarDirectionBoundaryHooks;

export function wireChartBarDirectionBoundaryHooks(
  next: ChartBarDirectionBoundaryHooks,
): void {
  Object.assign(cbdH, next);
}
