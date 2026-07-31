// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-103: chart-axis-auto-domain boundary hooks.

export type ChartAxisAutoDomainBoundaryHooks = {
  /** Max auto major increments (Binding844). */
  maxAutoIncrements: any;
  /** Narrow-range increment cap (Binding845). */
  narrowIncrementCap: any;
  /** Domain expand threshold (Binding846). */
  expandThreshold: any;
  /** Narrow-toward-zero ratio (Binding847). */
  narrowTowardZeroRatio: any;
};

export const cadH: ChartAxisAutoDomainBoundaryHooks =
  {} as ChartAxisAutoDomainBoundaryHooks;

export function wireChartAxisAutoDomainBoundaryHooks(
  next: ChartAxisAutoDomainBoundaryHooks,
): void {
  Object.assign(cadH, next);
}
