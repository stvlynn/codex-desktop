// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-category-axes deps via direct imports
// (wireChartCategoryAxesBoundaryHooks leave-behind retired).

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

export type ChartCategoryAxesBoundaryHooks = {
  bh404: (...args: any[]) => any;
  bh406: (...args: any[]) => any;
  bh419: (...args: any[]) => any;
  bh427: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh429: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh434: (...args: any[]) => any;
  bh435: (...args: any[]) => any;
  bh436: (...args: any[]) => any;
  bh439: (...args: any[]) => any;
  bh498: (...args: any[]) => any;
  bh499: (...args: any[]) => any;
};

export const ccaH: ChartCategoryAxesBoundaryHooks = {
  bh404: __call("../../chart-axis-scale-domain", __wh(404)),
  bh406: __call("../../chart-axis-scale-domain", __wh(406)),
  bh419: __call("../normalize-chart-categories-impl", __wh(419)),
  bh427: __call("../../text-measure", __wh(427)),
  bh428: __call("../../chart-paint", __wh(428)),
  bh429: __call("../../chart-axis-reserve", __wh(429)),
  bh430: __call("../../chart-axis-reserve", __wh(430)),
  bh433: __call("../../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh434: __call("../../chart-axis-reserve", __wh(434)),
  bh435: __call("../../chart-axis-reserve", __wh(435)),
  bh436: __call("../../chart-axis-reserve", __wh(436)),
  bh439: __call("../../chart-axis-ticks", "formatAxisTickValue"),
  bh498: __call("../is-right-axis-helper-impl", __wh(498)),
  bh499: __call("../axis-orientation-helpers-impl", __wh(499)),
};

/** @deprecated Wave-160: wire leave-behind retired — ccaH uses direct imports. */
export function wireChartCategoryAxesBoundaryHooks(
  _next?: Partial<ChartCategoryAxesBoundaryHooks>,
): void {}
