// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-124: SKEW error-token hooks (Binding1877).

export type FormulaSkewBoundaryHooks = {
  DIV0_TOKEN: any;
};

export const fskH: FormulaSkewBoundaryHooks = {} as FormulaSkewBoundaryHooks;

export function wireFormulaSkewBoundaryHooks(
  next: FormulaSkewBoundaryHooks,
): void {
  Object.assign(fskH, next);
}
