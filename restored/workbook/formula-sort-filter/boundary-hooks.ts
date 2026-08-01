// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-118: formula-sort-filter boundary hooks.

export type FormulaSortFilterBoundaryHooks = {
  /** Active eval context (legacy bh962 / Binding1934 stack). */
  getEvalContext: () => any;
  /** Coerce first cell / scalar (legacy bh966 / _st). */
  firstCellOrValue: (...args: any[]) => any;
};

export const fsfH: FormulaSortFilterBoundaryHooks =
  {} as FormulaSortFilterBoundaryHooks;

export function wireFormulaSortFilterBoundaryHooks(
  next: FormulaSortFilterBoundaryHooks,
): void {
  Object.assign(fsfH, next);
}
