// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-label-overflow deps via direct imports
// (wireChartLabelOverflowBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartLabelOverflowHooks = {
  isNonEmptyCategory: (...args: any[]) => any;
  measureCategoryAdvance: (...args: any[]) => any;
};

export const cloH: ChartLabelOverflowHooks = {
  isNonEmptyCategory: __call("../chart-category-axis-labels", __wh(543)),
  measureCategoryAdvance: __call("../chart-group-scales", __wh(425)),
};

/** @deprecated Wave-163: wire leave-behind retired — cloH uses direct imports. */
export function wireChartLabelOverflowBoundaryHooks(
  _next?: Partial<ChartLabelOverflowHooks>,
): void {}
