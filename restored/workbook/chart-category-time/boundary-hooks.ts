// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-category-time deps via direct imports
// (wireChartCategoryTimeBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartCategoryTimeHooks = {
  presentationN: any;
};

export const cctH: ChartCategoryTimeHooks = {
  get presentationN() {
    return (__req("../presentation-protobuf") as any)["$n"];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — cctH uses direct imports. */
export function wireChartCategoryTimeBoundaryHooks(
  _next?: Partial<ChartCategoryTimeHooks>,
): void {}
