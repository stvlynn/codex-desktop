// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-102: formula-matrix-inverse boundary hooks.

export type FormulaMatrixInverseBoundaryHooks = {
  /** #VALUE! sentinel (Binding1942). */
  valueError: any;
  /** #NUM! sentinel (Binding1944). */
  numError: any;
  /** Coerce finite number (helper980). */
  coerceNumber: (...args: any[]) => any;
};

export const fmiH: FormulaMatrixInverseBoundaryHooks =
  {} as FormulaMatrixInverseBoundaryHooks;

export function wireFormulaMatrixInverseBoundaryHooks(
  next: FormulaMatrixInverseBoundaryHooks,
): void {
  Object.assign(fmiH, next);
}
