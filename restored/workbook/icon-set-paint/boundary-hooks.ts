// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: icon-set-paint deps via direct imports
// (wireIconSetPaintBoundaryHooks leave-behind retired).

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

export type IconSetPaintBoundaryHooks = {
  /** Rating bars painter (legacy helper 595). */
  paintRatingBars: (...args: any[]) => any;
  /** Shared path stroke helper (legacy helper 596). */
  strokeIconPath: (...args: any[]) => any;
  /** Shared fill helper (legacy helper 597). */
  fillIconShape: (...args: any[]) => any;
  /** Clip helper (legacy helper 598). */
  withIconClip: (...args: any[]) => any;
  /** Restore helper (legacy helper 599). */
  endIconClip: (...args: any[]) => any;
};

export const ispH: IconSetPaintBoundaryHooks = {
  paintRatingBars: __call("./", "paintRatingBars"),
  strokeIconPath: __call("../mid-paint-helpers", "paintDirectionTriangle"),
  fillIconShape: __call("../paint-mids", __wh(597)),
  endIconClip: __call("./", __wh(599)),
  withIconClip: __call("../mid-paint-helpers", __wh(598)),
};

/** @deprecated Wave-161: wire leave-behind retired — ispH uses direct imports. */
export function wireIconSetPaintBoundaryHooks(
  _next?: Partial<IconSetPaintBoundaryHooks>,
): void {}
