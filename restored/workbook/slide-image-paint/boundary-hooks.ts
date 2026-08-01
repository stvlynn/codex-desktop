// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99: slide-image-paint boundary hooks.

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

export const sipH: SlideImagePaintBoundaryHooks =
  {} as SlideImagePaintBoundaryHooks;

export function wireSlideImagePaintBoundaryHooks(
  next: SlideImagePaintBoundaryHooks,
): void {
  Object.assign(sipH, next);
}
