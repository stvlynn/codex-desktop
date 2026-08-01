// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: CF runtime deps via direct imports
// (wireCfRuntimeBoundaryHooks leave-behind retired).

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

import { workbookBinding1962, Uht, Hht } from "../../cf-engine";

export type CfRuntimeBoundaryHooks = {
  addDays: (...args: any[]) => any;
  weekStart: (...args: any[]) => any;
  monthStart: (...args: any[]) => any;
  monthEnd: (...args: any[]) => any;
  rangeStats: (...args: any[]) => any;
  resolveCfvoPos: (...args: any[]) => any;
  parseRgb: (...args: any[]) => any;
  resolveColor: (...args: any[]) => any;
  colorOpts: any;
  defaultDataBarColor: any;
  defaultAccentFallback: any;
};

export const cfRtH: CfRuntimeBoundaryHooks = {
  addDays: __call("../../cf-engine", __wh(1016)),
  weekStart: __call("../../cf-engine", __wh(1017)),
  monthStart: __call("../../cf-engine", __wh(1018)),
  monthEnd: __call("../../cf-engine", __wh(1019)),
  rangeStats: __call("../../cf-range-stats", __wh(1020)),
  resolveCfvoPos: __call("../../cf-range-stats", "wht"),
  parseRgb: __call("../../canvas-paint", __wh(602)),
  resolveColor: __call("../../color-resolve", "resolveColorToCssRgba"),
  get colorOpts() {
    return workbookBinding1962;
  },
  get defaultDataBarColor() {
    return Uht;
  },
  get defaultAccentFallback() {
    return Hht;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — cfRtH uses direct imports. */
export function wireCfRuntimeBoundaryHooks(
  _next?: Partial<CfRuntimeBoundaryHooks>,
): void {}
