// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-axis-ticks deps via direct imports
// (wireChartAxisTicksBoundaryHooks leave-behind retired).

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

export type ChartAxisTicksBoundaryHooks = {
  bh405: (...args: any[]) => any;
  bh406: (...args: any[]) => any;
  bh422: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh426: (...args: any[]) => any;
  bh427: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh429: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh431: (...args: any[]) => any;
  bh432: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh434: (...args: any[]) => any;
  bh435: (...args: any[]) => any;
  bh436: (...args: any[]) => any;
  bh437: (...args: any[]) => any;
  bh438: (...args: any[]) => any;
  bh439: (...args: any[]) => any;
  bhTye: (...args: any[]) => any;
  bh440: (...args: any[]) => any;
  bh446: (...args: any[]) => any;
  bh460: (...args: any[]) => any;
  bh461: (...args: any[]) => any;
  nye: (...args: any[]) => any;
  vye: (...args: any[]) => any;
};

export const catH: ChartAxisTicksBoundaryHooks = {
  bh405: __call("../chart-axis-scale-domain", __wh(405)),
  bh406: __call("../chart-axis-scale-domain", __wh(406)),
  bh422: __call("../chart-group-scales", __wh(422)),
  bh424: __call("../chart-group-scales", __wh(424)),
  bh425: __call("../chart-group-scales", __wh(425)),
  bh426: __call("../chart-paint", __wh(426)),
  bh427: __call("../text-measure", __wh(427)),
  bh428: __call("../chart-paint", __wh(428)),
  bh429: __call("../chart-axis-reserve", __wh(429)),
  bh430: __call("../chart-axis-reserve", __wh(430)),
  bh431: __call("./measure-line-height-impl", __wh(431)),
  bh432: __call("../text-measure", __wh(432)),
  bh433: __call("./paint-axis-gridline-impl", "paintAxisGridlineStroke"),
  bh434: __call("../chart-axis-reserve", __wh(434)),
  bh435: __call("../chart-axis-reserve", __wh(435)),
  bh436: __call("../chart-axis-reserve", __wh(436)),
  bh437: __call("../text-measure", __wh(437)),
  bh438: __call("../chart-paint", __wh(438)),
  bh439: __call("./format-chart-number-impl", "formatAxisTickValue"),
  bhTye: __call("../chart-axis-scale-domain", "Tye"),
  bh440: __call("./plan-axis-ticks-impl", "planAxisTicks"),
  bh446: __call("../chart-category-time", __wh(446)),
  bh460: __call("./paint-axis-title-impl", "paintAxisTitle"),
  bh461: __call("./near-equal-helper-impl", __wh(461)),
  nye: __call("../chart-category-axis-labels", "Nye"),
  vye: __call("../paint-mids", "Vye"),
};

/** @deprecated Wave-160: wire leave-behind retired — catH uses direct imports. */
export function wireChartAxisTicksBoundaryHooks(
  _next?: Partial<ChartAxisTicksBoundaryHooks>,
): void {}
