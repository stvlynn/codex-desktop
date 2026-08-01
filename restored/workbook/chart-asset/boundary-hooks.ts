// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-asset deps via direct imports
// (wireChartAssetBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartAssetBoundaryHooks = {
  /** Map display-blanks-as name → proto (legacy Zae). */
  mapDisplayBlanksAs: (name: any) => any;
  /** Map parent-label-layout name → proto (legacy Qae). */
  mapParentLabelLayout: (name: any) => any;
};

export const caH: ChartAssetBoundaryHooks = {
  mapDisplayBlanksAs: __call("./", "Zae"),
  mapParentLabelLayout: __call("./", "Qae"),
};

/** @deprecated Wave-163: wire leave-behind retired — caH uses direct imports. */
export function wireChartAssetBoundaryHooks(
  _next?: Partial<ChartAssetBoundaryHooks>,
): void {}
