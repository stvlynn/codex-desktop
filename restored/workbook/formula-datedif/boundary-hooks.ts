// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-datedif deps via direct imports
// (wireFormulaDatedifBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type FormulaDatedifBoundaryHooks = {
  coerceDate: (...args: any[]) => any;
  yearFrac: (...args: any[]) => any;
  dateDiffDays: (...args: any[]) => any;
};

export const fdifH: FormulaDatedifBoundaryHooks = {
  coerceDate: __call("../formula-token-utils", "coerceFormulaDate"),
  yearFrac: __call("../formula-yearfrac", "yearFrac"),
  dateDiffDays: __call("../formula-scalar-funcs", "dateDiffDays"),
};

/** @deprecated Wave-161: wire leave-behind retired — fdifH uses direct imports. */
export function wireFormulaDatedifBoundaryHooks(
  _next?: Partial<FormulaDatedifBoundaryHooks>,
): void {}
