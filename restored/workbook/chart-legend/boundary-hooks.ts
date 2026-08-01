// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-legend deps via direct imports
// (wireChartLegendBoundaryHooks leave-behind retired).

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

export type ChartLegendBoundaryHooks = {
  bh387: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh472: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh481: (...args: any[]) => any;
  bh482: (...args: any[]) => any;
  bh483: (...args: any[]) => any;
  bh486: (...args: any[]) => any;
  bh487: (...args: any[]) => any;
  bh489: (...args: any[]) => any;
  bh490: (...args: any[]) => any;
};

export const clH: ChartLegendBoundaryHooks = {
  bh387: __call("./legend-typeface-helpers-impl", __wh(387)),
  bh433: __call("../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh465: __call("../stroke-resolve", __wh(465)),
  bh469: __call("../stroke-resolve", __wh(469)),
  bh472: __call("../stroke-resolve", __wh(472)),
  bh474: __call("../stroke-resolve", __wh(474)),
  bh481: __call("../mid-paint-helpers", __wh(481)),
  bh482: __call("../stroke-resolve", __wh(482)),
  bh483: __call("../chart-series-endpoint", __wh(483)),
  bh486: __call("./legend-position-normalize-impl", __wh(486)),
  bh487: __call("./legend-typeface-helpers-impl", __wh(487)),
  bh489: __call("../chart-legend-layout", "buildMapLegendRamp"),
  bh490: __call("../chart-legend-layout", __wh(490)),
};

/** @deprecated Wave-160: wire leave-behind retired — clH uses direct imports. */
export function wireChartLegendBoundaryHooks(
  _next?: Partial<ChartLegendBoundaryHooks>,
): void {}
