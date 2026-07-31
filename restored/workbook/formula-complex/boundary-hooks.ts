// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-108: formula-complex boundary hooks.

export type FormulaComplexBoundaryHooks = {
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const fcxH: FormulaComplexBoundaryHooks =
  {} as FormulaComplexBoundaryHooks;

export function wireFormulaComplexBoundaryHooks(
  next: FormulaComplexBoundaryHooks,
): void {
  Object.assign(fcxH, next);
}
