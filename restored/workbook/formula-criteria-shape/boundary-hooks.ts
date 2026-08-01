// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-125: formula-criteria-shape error-token hooks.

export type FormulaCriteriaShapeHooks = {
  VALUE_TOKEN: any;
  DIV0_TOKEN: any;
  NA_TOKEN: any;
};

export const fcsH: FormulaCriteriaShapeHooks = {} as FormulaCriteriaShapeHooks;

export function wireFormulaCriteriaShapeBoundaryHooks(
  next: FormulaCriteriaShapeHooks,
): void {
  Object.assign(fcsH, next);
}
