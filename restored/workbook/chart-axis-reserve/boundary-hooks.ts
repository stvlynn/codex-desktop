// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-125: chart-axis-reserve layout padding hooks.

export type ChartAxisReserveHooks = {
  /** Legacy Binding837 — Carlito presentation stack. */
  chartFontStack: string;
  /** Legacy Binding917 — title gap px. */
  titleGapPx: number;
  /** Legacy Binding918 — label gap px. */
  labelGapPx: number;
  /** Legacy Binding919 — tick mark reserve px. */
  tickMarkReservePx: number;
  /** Legacy Binding863 — points-per-inch. */
  pointsPerInch: number;
  /** Legacy Binding864 — pixels-per-inch. */
  pixelsPerInch: number;
  resolveAxisTextStyle: (...args: any[]) => any;
  paintAxisTitleText: (...args: any[]) => any;
  resolveCssFontStack: (...args: any[]) => any;
};

export const carH: ChartAxisReserveHooks = {} as ChartAxisReserveHooks;

export function wireChartAxisReserveBoundaryHooks(
  next: Partial<ChartAxisReserveHooks>,
): void {
  Object.assign(carH, next);
}
