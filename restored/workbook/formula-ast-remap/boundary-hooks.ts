// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101: formula-ast-remap boundary hooks.

export type FormulaAstRemapBoundaryHooks = {
  /** Remap a single RangeRef token (legacy Bht). */
  remapRangeRef: (...args: any[]) => any;
};

export const farH: FormulaAstRemapBoundaryHooks =
  {} as FormulaAstRemapBoundaryHooks;

export function wireFormulaAstRemapBoundaryHooks(
  next: FormulaAstRemapBoundaryHooks,
): void {
  Object.assign(farH, next);
}
