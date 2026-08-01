// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-128: formula-a1-address hooks.

export type FormulaA1AddressHooks = {
  isErrorValue: (...args: any[]) => any;
};

export const faaH: FormulaA1AddressHooks = {} as FormulaA1AddressHooks;

export function wireFormulaA1AddressBoundaryHooks(
  next: FormulaA1AddressHooks,
): void {
  Object.assign(faaH, next);
}
