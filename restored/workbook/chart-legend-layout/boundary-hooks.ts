// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-legend-layout boundary hooks.

export type ChartLegendLayoutBoundaryHooks = {
  /** Map-legend size when chart type is MAP (legacy abe). */
  measureMapLegend: (...args: any[]) => any;
  /** Legend entry list from chart model (legacy ibe). */
  legendEntries: (...args: any[]) => any;
  /** Pack legend rows into max width (legacy sbe). */
  packLegendRows: (...args: any[]) => any;
  bh152: (...args: any[]) => any;
  bh387: (...args: any[]) => any;
  bh484: (...args: any[]) => any;
  bh486: (...args: any[]) => any;
  bh487: (...args: any[]) => any;
  bh488: (...args: any[]) => any;
  /** Marker→label gap (legacy _j). */
  markerLabelGap: any;
  /** Legend padding (legacy Binding905). */
  legendPad: any;
  /** Vertical entry gap when stacked (legacy Binding907). */
  entryGapStacked: any;
  /** Entry row height (legacy Binding908). */
  entryRowHeight: any;
  /** Row gap when packed (legacy Binding909). */
  packedRowGap: any;
};

export const cllH: ChartLegendLayoutBoundaryHooks =
  {} as ChartLegendLayoutBoundaryHooks;

export function wireChartLegendLayoutBoundaryHooks(
  next: ChartLegendLayoutBoundaryHooks,
): void {
  Object.assign(cllH, next);
}
