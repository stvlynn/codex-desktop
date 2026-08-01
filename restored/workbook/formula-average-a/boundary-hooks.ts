// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-122: AVERAGEA error-token hooks (Binding1875/1876).

export type FormulaAverageABoundaryHooks = {
  DIV0_TOKEN: any;
  VALUE_TOKEN: any;
};

export const faaH: FormulaAverageABoundaryHooks =
  {} as FormulaAverageABoundaryHooks;

export function wireFormulaAverageABoundaryHooks(
  next: FormulaAverageABoundaryHooks,
): void {
  Object.assign(faaH, next);
}
