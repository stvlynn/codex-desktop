// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-109: formula-match boundary hooks.

export type FormulaMatchBoundaryHooks = {
  flattenArgs: (...args: any[]) => any;
  NA_ERROR: any;
};

export const fmH: FormulaMatchBoundaryHooks = {} as FormulaMatchBoundaryHooks;

export function wireFormulaMatchBoundaryHooks(
  next: FormulaMatchBoundaryHooks,
): void {
  Object.assign(fmH, next);
}
