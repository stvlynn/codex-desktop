// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-94: shape-geometry-paint boundary hooks.

export type ShapeGeometryPaintBoundaryHooks = {
  bh571: (...args: any[]) => any;
  bh572: (...args: any[]) => any;
  bh608: (...args: any[]) => any;
  bh612: (...args: any[]) => any;
  bh613: (...args: any[]) => any;
  bh617: (...args: any[]) => any;
  bh618: (...args: any[]) => any;
  bh623: (...args: any[]) => any;
  bh630: (...args: any[]) => any;
  resolveShapeFill: (...args: any[]) => any;
  resolveShapeEffects: (...args: any[]) => any;
  isConnectorGeometry: (...args: any[]) => any;
  paintConnectorRoute: (...args: any[]) => any;
  drawCustomPaths: (...args: any[]) => any;
  clipShapeGeometry: (...args: any[]) => any;
  paintShapeAdjustments: (...args: any[]) => any;
  drawConnectorArrowheads: (...args: any[]) => any;
};

export const sgpH: ShapeGeometryPaintBoundaryHooks = {} as ShapeGeometryPaintBoundaryHooks;

export function wireShapeGeometryPaintBoundaryHooks(
  next: ShapeGeometryPaintBoundaryHooks,
): void {
  Object.assign(sgpH, next);
}
