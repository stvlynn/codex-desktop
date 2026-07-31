// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: chart-surface-map boundary hooks.

export type ChartSurfaceMapBoundaryHooks = {
  /** Normalize category key for map join (legacy qye). */
  normalizeMapCategory: (...args: any[]) => any;
  /** Stable map layer id stem (legacy Gye). */
  mapElementIdStem: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh466: (...args: any[]) => any;
  bh467: (...args: any[]) => any;
  /** Mapbox country boundaries tileset URL (legacy Binding885). */
  mapSourceUrl: any;
  /** Mapbox source-layer name (legacy Binding886). */
  mapSourceLayer: any;
};

export const csmH: ChartSurfaceMapBoundaryHooks =
  {} as ChartSurfaceMapBoundaryHooks;

export function wireChartSurfaceMapBoundaryHooks(
  next: ChartSurfaceMapBoundaryHooks,
): void {
  Object.assign(csmH, next);
}
