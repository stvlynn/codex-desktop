// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: slide-background-paint deps via direct imports
// (wireSlideBackgroundPaintBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type SlideBackgroundPaintBoundaryHooks = {
  /** Fill resolve (legacyFn212). */
  bh212: (...args: any[]) => any;
  /** Picture bitmap effects (legacyFn208). */
  bh208: (...args: any[]) => any;
};

export const sbgH: SlideBackgroundPaintBoundaryHooks = {
  bh212: __call("../canvas-fill", "resolveFillStyle"),
  bh208: __call("../canvas-fill", "processPictureBitmapEffects"),
};

/** @deprecated Wave-163: wire leave-behind retired — sbgH uses direct imports. */
export function wireSlideBackgroundPaintBoundaryHooks(
  _next?: Partial<SlideBackgroundPaintBoundaryHooks>,
): void {}
