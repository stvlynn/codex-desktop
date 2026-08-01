// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: chart-group-scales deps via direct imports
// (wireChartGroupScalesBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { $O } from "../chart-category-axes";
import { Eye } from "../chart-axis-scale-domain";
import { workbookBinding857 } from "../chart-layout-ensures";
import { scaleLog } from "../../vendor/d3-scale-linear";

export type ChartGroupScalesBoundaryHooks = {
  expandForecastCategories: (...args: any[]) => any;
  isMaxMinOrientation: (...args: any[]) => any;
  waterfallForceZero: (...args: any[]) => any;
  buildContinuousScale: (...args: any[]) => any;
  categoryPaddingFallback: any;
  bh388: (...args: any[]) => any;
  bh391: (...args: any[]) => any;
  bh395: (...args: any[]) => any;
  bh396: (...args: any[]) => any;
  bh397: (...args: any[]) => any;
  bh400: (...args: any[]) => any;
  bh402: (...args: any[]) => any;
  bh403: (...args: any[]) => any;
  bh419: (...args: any[]) => any;
  bh422: (...args: any[]) => any;
  scaleLog: (...args: any[]) => any;
};

export const cgsH: ChartGroupScalesBoundaryHooks = {
  expandForecastCategories: __call("./scale-domain-helpers-impl", "Mye"),
  isMaxMinOrientation: (...args: any[]) => $O(...args),
  waterfallForceZero: (...args: any[]) => Eye(...args),
  buildContinuousScale: __call("./build-continuous-scale-impl", "_O"),
  get categoryPaddingFallback() {
    return workbookBinding857;
  },
  bh388: __call("./scale-domain-helpers-impl", "planComboValueDomains"),
  bh391: __call("./scale-domain-helpers-impl", "stackSeriesExtents"),
  bh395: __call("./gap-visible-count-impl", __wh(395)),
  bh396: __call("./gap-visible-count-impl", __wh(396)),
  bh397: __call("../chart-layout-ensures", __wh(397)),
  bh400: __call("../chart-axis-scale-domain", "minPositiveFinite"),
  bh402: __call("../chart-axis-scale-domain", "buildContinuousDomain"),
  bh403: __call("./scale-domain-helpers-impl", "applyNiceContinuousDomain"),
  bh419: __call("../chart-category-axes", "normalizeChartCategories"),
  bh422: __call("./axis-reserve-for-bar-impl", __wh(422)),
  scaleLog: (...args: any[]) => scaleLog(...args),
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireChartGroupScalesBoundaryHooks(
  _next?: Partial<ChartGroupScalesBoundaryHooks>,
): void {}
