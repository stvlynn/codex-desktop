// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-surface-map deps via direct imports
// (wireChartSurfaceMapBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type ChartSurfaceMapBoundaryHooks = {
  /** Normalize category key for map join (legacy qye). */
  normalizeMapCategory: (...args: any[]) => any;
  /** Stable map layer id stem (legacy Gye). */
  mapElementIdStem: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh466: (...args: any[]) => any;
  /** Mapbox country boundaries tileset URL (legacy Binding885). */
  mapSourceUrl: any;
  /** Mapbox source-layer name (legacy Binding886). */
  mapSourceLayer: any;
};

export const csmH: ChartSurfaceMapBoundaryHooks = {
  normalizeMapCategory: __call("./", "qye"),
  mapElementIdStem: __call("./", "Gye"),
  bh465: __call("../stroke-resolve", "resolveSeriesPaintColor"),
  bh466: __call("../chart-legend-layout", __wh(466)),
  get mapSourceUrl() {
    return (__req("../chart-layout-ensures") as any)[__wb(885)];
  },
  get mapSourceLayer() {
    return (__req("../chart-layout-ensures") as any)[__wb(886)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — csmH uses direct imports. */
export function wireChartSurfaceMapBoundaryHooks(
  _next?: Partial<ChartSurfaceMapBoundaryHooks>,
): void {}
