// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101/102: chart-pie-series boundary hooks.

export type ChartPieSeriesBoundaryHooks = {
  contrastPair: (...args: any[]) => any;
  measureText: (...args: any[]) => any;
  formatValue: (...args: any[]) => any;
  minArcLen: any;
  minRing: any;
  minValueArc: any;
  minValueRing: any;
  nameFont: any;
  valueFont: any;
  lineGap: any;
  /** Slice mid-angle helpers (legacy dbe). */
  sliceMid: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh482: (...args: any[]) => any;
  /** Font size (helper152). */
  bh152: (...args: any[]) => any;
  /** Color resolve (workbookSt). */
  resolveColor: (...args: any[]) => any;
  /** Fill resolve (helper212). */
  bh212: (...args: any[]) => any;
  /** Stroke apply (helper433). */
  bh433: (...args: any[]) => any;
  /** Default muted fill (legacy $D). */
  defaultMuted: any;
  /** Chart font family (Binding837). */
  chartFontFamily: any;
};

export const cpsH: ChartPieSeriesBoundaryHooks =
  {} as ChartPieSeriesBoundaryHooks;

export function wireChartPieSeriesBoundaryHooks(
  next: ChartPieSeriesBoundaryHooks,
): void {
  Object.assign(cpsH, next);
}
