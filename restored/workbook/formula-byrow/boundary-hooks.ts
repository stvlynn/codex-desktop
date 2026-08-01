// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-127: formula-byrow hooks (eval context + VALUE error).

export type FormulaByrowBoundaryHooks = {
  getEvalContext: () => any;
  VALUE_ERROR: any;
};

export const fbyH: FormulaByrowBoundaryHooks = {} as FormulaByrowBoundaryHooks;

export function wireFormulaByrowBoundaryHooks(
  next: FormulaByrowBoundaryHooks,
): void {
  Object.assign(fbyH, next);
}
