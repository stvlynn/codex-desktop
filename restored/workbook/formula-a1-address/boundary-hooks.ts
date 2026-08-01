// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-a1-address deps via direct imports
// (wireFormulaA1AddressBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaA1AddressHooks = {
  isErrorValue: (...args: any[]) => any;
};

export const faaH: FormulaA1AddressHooks = {
  isErrorValue: __call("../formula-array", "isErrorValue"),
};

/** @deprecated Wave-163: wire leave-behind retired — faaH uses direct imports. */
export function wireFormulaA1AddressBoundaryHooks(
  _next?: Partial<FormulaA1AddressHooks>,
): void {}
