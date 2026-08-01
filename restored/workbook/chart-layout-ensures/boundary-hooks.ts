// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-154: chart-layout-ensures boundary hooks (residual host deps).

export type ChartLayoutEnsureHooks = {
  ensureInitAddressMetrics: () => void;
};

export const cleH: ChartLayoutEnsureHooks = {} as ChartLayoutEnsureHooks;

export function wireChartLayoutEnsureHooks(next: ChartLayoutEnsureHooks): void {
  Object.assign(cleH, next);
}
