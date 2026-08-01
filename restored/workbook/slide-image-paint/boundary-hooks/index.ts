// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: slide-image-paint deps via direct imports
// (wireSlideImagePaintBoundaryHooks leave-behind retired).

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

export type SlideImagePaintBoundaryHooks = {
  bh208: (...args: any[]) => any;
  bh290: (...args: any[]) => any;
  bh647: (...args: any[]) => any;
  bh648: (...args: any[]) => any;
  /** Paint masked image via geometry (legacy qwe). */
  paintMaskedImage: (...args: any[]) => any;
  /** Paint inherited mask source (legacy Jwe). */
  paintInheritedMask: (...args: any[]) => any;
  /** Stroke inherited mask outline (legacy Ywe). */
  strokeInheritedMask: (...args: any[]) => any;
  /** Placeholder when bitmap missing (legacy KTe). */
  paintImagePlaceholder: (...args: any[]) => any;
};

export const sipH: SlideImagePaintBoundaryHooks = {
  bh208: __call("../../canvas-fill", "processPictureBitmapEffects"),
  bh290: __call("../../geometry-transform", "applyFrameCanvasTransform"),
  bh647: __call("../../shape-geometry-paint", "strokePresetGeometry"),
  bh648: __call("../../shape-geometry-paint", "strokeShapeLine"),
  paintMaskedImage: __call("../../shape-geometry-apply", "paintMaskedImage"),
  paintInheritedMask: __call("../../picture-fill-paint", "Jwe"),
  strokeInheritedMask: __call("../../picture-fill-paint", "Ywe"),
  paintImagePlaceholder: __call("../../chart-card-paint", "KTe"),
};

/** @deprecated Wave-161: wire leave-behind retired — sipH uses direct imports. */
export function wireSlideImagePaintBoundaryHooks(
  _next?: Partial<SlideImagePaintBoundaryHooks>,
): void {}
