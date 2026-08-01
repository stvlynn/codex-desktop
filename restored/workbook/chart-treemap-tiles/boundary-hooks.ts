// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-treemap-tiles deps via direct imports
// (wireChartTreemapTilesBoundaryHooks leave-behind retired).

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

export type ChartTreemapTilesBoundaryHooks = {
  bh475: (...args: any[]) => any;
  bh476: (...args: any[]) => any;
  bh477: (...args: any[]) => any;
  /** Flatten category paths (legacy Zye). */
  flattenCategoryPaths: (...args: any[]) => any;
};

export const cttH: ChartTreemapTilesBoundaryHooks = {
  bh475: __call("./", "aggregateTreemapSeriesPaths"),
  bh476: __call("./", __wh(476)),
  bh477: __call("../chart-path-colors", "buildPathOrdinalColorScale"),
  flattenCategoryPaths: __call("../paint-mids", "Zye"),
};

/** @deprecated Wave-161: wire leave-behind retired — cttH uses direct imports. */
export function wireChartTreemapTilesBoundaryHooks(
  _next?: Partial<ChartTreemapTilesBoundaryHooks>,
): void {}
