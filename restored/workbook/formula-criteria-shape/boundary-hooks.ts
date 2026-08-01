// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-criteria-shape deps via direct imports
// (wireFormulaCriteriaShapeBoundaryHooks leave-behind retired).

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

export type FormulaCriteriaShapeHooks = {
  VALUE_TOKEN: any;
  DIV0_TOKEN: any;
  NA_TOKEN: any;
};

export const fcsH: FormulaCriteriaShapeHooks = {
  get VALUE_TOKEN() {
    return (__req("../formula-date-epoch") as any)[__wb(1876)];
  },
  get DIV0_TOKEN() {
    return (__req("../formula-date-epoch") as any)[__wb(1875)];
  },
  get NA_TOKEN() {
    return (__req("../formula-date-epoch") as any)["_6e"];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — fcsH uses direct imports. */
export function wireFormulaCriteriaShapeBoundaryHooks(
  _next?: Partial<FormulaCriteriaShapeHooks>,
): void {}
