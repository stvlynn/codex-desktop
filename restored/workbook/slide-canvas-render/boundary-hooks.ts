// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-94/105: slide-canvas-render boundary hooks.

export type SlideCanvasRenderBoundaryHooks = {
  /** Guide orientation enum (legacy tt). */
  guideEnum: any;
  paintSlideShape: (...args: any[]) => any;
  paintSlideGroup: (...args: any[]) => any;
  paintSlideImage: (...args: any[]) => any;
  isHiddenElement: (...args: any[]) => any;
  warmSlideImages: (...args: any[]) => any;
  bh615: (...args: any[]) => any;
  bh654: (...args: any[]) => any;
  /** Apply canvas transform for frame (legacy helper290). */
  applyFrameTransform: (...args: any[]) => any;
  /** Paint drawing shape (legacy helper614). */
  renderDrawingShape: (...args: any[]) => any;
  /** Layout painted text style (legacy helper110). */
  layoutPaintedText: (...args: any[]) => any;
  /** Master paragraph defaults (legacy helper218). */
  masterDefaults: (...args: any[]) => any;
  /** EMU rotation → radians (legacy helper287). */
  emuRotation: (...args: any[]) => any;
  /** Paint text element (legacy workbookX). */
  paintTextElement: (...args: any[]) => any;
  /** Presentation element-type enum (legacy j). */
  elementTypes: any;
};

export const scrH: SlideCanvasRenderBoundaryHooks =
  {} as SlideCanvasRenderBoundaryHooks;

export function wireSlideCanvasRenderBoundaryHooks(
  next: SlideCanvasRenderBoundaryHooks,
): void {
  Object.assign(scrH, next);
}
