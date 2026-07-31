// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-109: element-text-layout boundary hooks.

export type ElementTextLayoutBoundaryHooks = {
  ShapeClass: any;
  TEXT_WRAPPING_TYPE_NONE: any;
  getFontMeasureContext: (...args: any[]) => any;
  resolvePlaceholderTextStyle: (...args: any[]) => any;
  resolveMasterTextStyle: (...args: any[]) => any;
  resolveElementFramePx: (...args: any[]) => any;
  computeTextBoxInset: (...args: any[]) => any;
  layoutElementText: (...args: any[]) => any;
  SHAPE_GEOMETRY_UNSPECIFIED: any;
};

export const etlH: ElementTextLayoutBoundaryHooks =
  {} as ElementTextLayoutBoundaryHooks;

export function wireElementTextLayoutBoundaryHooks(
  next: ElementTextLayoutBoundaryHooks,
): void {
  Object.assign(etlH, next);
}
