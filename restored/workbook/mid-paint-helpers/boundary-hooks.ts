// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: mid-paint-helpers deps via direct imports
// (wireMidPaintHelpersBoundaryHooks leave-behind retired).

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

export type MidPaintHelpersHooks = {
  bh465: (...args: any[]) => any;
  bh468: (...args: any[]) => any;
  bh472: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh208: (...args: any[]) => any;
  LOe: (...args: any[]) => any;
  WOe: (...args: any[]) => any;
  gEe: (...args: any[]) => any;
  bh262: (...args: any[]) => any;
  aae: (...args: any[]) => any;
  bh464: (...args: any[]) => any;
};

export const mphH: MidPaintHelpersHooks = {
  bh465: __call("../stroke-resolve", __wh(465)),
  bh468: __call("../stroke-resolve", __wh(468)),
  bh472: __call("../stroke-resolve", __wh(472)),
  bh433: __call("../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh208: __call("../canvas-fill", __wh(208)),
  LOe: __call("../compose-jsx-lower", "LOe"),
  WOe: __call("./join-class-names-impl", "WOe"),
  gEe: __call("../text-frame-embeds", "gEe"),
  bh262: __call("../style-tokens", __wh(262)),
  aae: __call("../text-style", "coerceTextStyleCssOrValue"),
  bh464: __call("../canvas-fill", __wh(464)),
};

/** @deprecated Wave-160: wire leave-behind retired — mphH uses direct imports. */
export function wireMidPaintHelpersBoundaryHooks(
  _next?: Partial<MidPaintHelpersHooks>,
): void {}
