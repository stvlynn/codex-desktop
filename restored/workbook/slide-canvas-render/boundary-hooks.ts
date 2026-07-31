// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-94: slide-canvas-render boundary hooks.

export type SlideCanvasRenderBoundaryHooks = {
  paintSlideShape: (...args: any[]) => any;
  paintSlideText: (...args: any[]) => any;
  paintViewOverlay: (...args: any[]) => any;
  paintSlideGroup: (...args: any[]) => any;
  paintSlideImage: (...args: any[]) => any;
  isHiddenElement: (...args: any[]) => any;
  warmSlideImages: (...args: any[]) => any;
  bh615: (...args: any[]) => any;
  bh654: (...args: any[]) => any;
};

export const scrH: SlideCanvasRenderBoundaryHooks = {} as SlideCanvasRenderBoundaryHooks;

export function wireSlideCanvasRenderBoundaryHooks(
  next: SlideCanvasRenderBoundaryHooks,
): void {
  Object.assign(scrH, next);
}
