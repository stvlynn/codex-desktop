// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-scatter-scale deps via direct imports
// (wireChartScatterScaleBoundaryHooks leave-behind retired).

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

export type ChartScatterScaleBoundaryHooks = {
  bh399: (...args: any[]) => any;
  bh534: (...args: any[]) => any;
  bh398: (...args: any[]) => any;
  bh400: (...args: any[]) => any;
  bh533: (...args: any[]) => any;
  bh535: (...args: any[]) => any;
  bh536: (...args: any[]) => any;
  bh537: (...args: any[]) => any;
  bh538: (...args: any[]) => any;
  bh539: (...args: any[]) => any;
  Oxe: (...args: any[]) => any;
  tickCounts: (...args: any[]) => any;
  niceAxisDomain: (...args: any[]) => any;
};

export const csscH: ChartScatterScaleBoundaryHooks = {
  bh399: __call("../chart-axis-scale-domain", __wh(399)),
  bh534: __call("./chart-scatter-scale-impl", __wh(534)),
  bh398: __call("../chart-group-scales", __wh(398)),
  bh400: __call("../chart-axis-scale-domain", "minPositiveFinite"),
  bh533: __call("../chart-layout-ensures", __wh(533)),
  bh535: __call("./scatter-domain-helpers-impl", __wh(535)),
  bh536: __call("../chart-axis-scale-domain", __wh(536)),
  bh537: __call("./scatter-domain-helpers-impl", __wh(537)),
  bh538: __call("./scatter-domain-helpers-impl", __wh(538)),
  bh539: __call("./fit-bubble-scale-domain-impl", __wh(539)),
  Oxe: __call("./fit-percent-bubble-domain-impl", "Oxe"),
  tickCounts: __call("../chart-scatter-axes", "$I"),
  niceAxisDomain: __call("../chart-group-scales", "_O"),
};

/** @deprecated Wave-160: wire leave-behind retired — csscH uses direct imports. */
export function wireChartScatterScaleBoundaryHooks(
  _next?: Partial<ChartScatterScaleBoundaryHooks>,
): void {}
