// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-123: AVERAGEIF error-token hooks (Binding1875/1876).

export type FormulaAverageIfBoundaryHooks = {
  DIV0_TOKEN: any;
  VALUE_TOKEN: any;
};

export const faiH: FormulaAverageIfBoundaryHooks =
  {} as FormulaAverageIfBoundaryHooks;

export function wireFormulaAverageIfBoundaryHooks(
  next: FormulaAverageIfBoundaryHooks,
): void {
  Object.assign(faiH, next);
}
