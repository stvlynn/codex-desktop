// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-103: shape-path-densify boundary hooks.

export type ShapePathDensifyBoundaryHooks = {
  bh624: (...args: any[]) => any;
  bh625: (...args: any[]) => any;
  bh626: (...args: any[]) => any;
  bh628: (...args: any[]) => any;
};

export const spdH: ShapePathDensifyBoundaryHooks =
  {} as ShapePathDensifyBoundaryHooks;

export function wireShapePathDensifyBoundaryHooks(
  next: ShapePathDensifyBoundaryHooks,
): void {
  Object.assign(spdH, next);
}
