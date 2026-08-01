// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-legend-layout boundary hooks.

export type ChartLegendLayoutBoundaryHooks = {
  seriesGap: any;
  rampHeight: any;
  labelGap: any;
  swatchSize: any;
  CHART_TYPE_WATERFALL: any;
  CHART_TYPE_TREEMAP: any;
  ChartAsset: any;
  reverseLegend: (...args: any[]) => any;
  seriesChartTypes: (...args: any[]) => any;
  waterfallEntries: (...args: any[]) => any;
  treemapEntries: (...args: any[]) => any;
  filterDeleted: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  isPieLike: (...args: any[]) => any;
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
  bh465: (...args: any[]) => any;
  bh466: (...args: any[]) => any;
  bh489: (...args: any[]) => any;
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
