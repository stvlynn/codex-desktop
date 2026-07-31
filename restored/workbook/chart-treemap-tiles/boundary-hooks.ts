// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-105: chart-treemap-tiles boundary hooks.

export type ChartTreemapTilesBoundaryHooks = {
  bh475: (...args: any[]) => any;
  bh476: (...args: any[]) => any;
  bh477: (...args: any[]) => any;
  /** Flatten category paths (legacy Zye). */
  flattenCategoryPaths: (...args: any[]) => any;
};

export const cttH: ChartTreemapTilesBoundaryHooks =
  {} as ChartTreemapTilesBoundaryHooks;

export function wireChartTreemapTilesBoundaryHooks(
  next: ChartTreemapTilesBoundaryHooks,
): void {
  Object.assign(cttH, next);
}
