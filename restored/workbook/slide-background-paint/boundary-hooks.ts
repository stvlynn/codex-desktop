// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-102: slide-background-paint boundary hooks.

export type SlideBackgroundPaintBoundaryHooks = {
  /** Fill resolve (helper212). */
  bh212: (...args: any[]) => any;
  /** Picture bitmap effects (helper208). */
  bh208: (...args: any[]) => any;
};

export const sbgH: SlideBackgroundPaintBoundaryHooks =
  {} as SlideBackgroundPaintBoundaryHooks;

export function wireSlideBackgroundPaintBoundaryHooks(
  next: SlideBackgroundPaintBoundaryHooks,
): void {
  Object.assign(sbgH, next);
}
