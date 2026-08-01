// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-128: shape-fill-resolve hooks.

export type ShapeFillResolveHooks = {
  resolveFillStyle: (...args: any[]) => any;
};

export const sfrH: ShapeFillResolveHooks = {} as ShapeFillResolveHooks;

export function wireShapeFillResolveBoundaryHooks(
  next: ShapeFillResolveHooks,
): void {
  Object.assign(sfrH, next);
}
