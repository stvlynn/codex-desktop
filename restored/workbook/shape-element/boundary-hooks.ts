// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-80: boundary deps for shape-element (Mde → Binding412/gae leave-behind).

export type ShapeElementBoundaryHooks = {
  /** Legacy Mde ensure (border-radius/shadow/shape-utility + Binding412/gae). */
  ensureMde: () => void;
};

/** Live bag for intentional leave-behind ensures. */
export const seH: ShapeElementBoundaryHooks = {} as ShapeElementBoundaryHooks;

export function wireShapeElementBoundaryHooks(
  next: ShapeElementBoundaryHooks,
): void {
  seH.ensureMde = next.ensureMde;
}
