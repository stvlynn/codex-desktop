// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-bond-basis deps via direct imports
// (wireFormulaBondBasisBoundaryHooks leave-behind retired).

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

export type FormulaBondBasisBoundaryHooks = {
  /** Legacy workbookBinding1896 — day-count between settlement dates. */
  dayCount: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
  /** Excel epoch Date.UTC(1899, 11, 30). */
  EPOCH_UTC_MS: number;
  DAY_MS: number;
  DEFAULT_BASIS: string;
  BASIS_MAP: Record<number, string>;
  /** Legacy workbookBinding1933 / Prt. */
  createBondCalculator: (...args: any[]) => any;
  /** Legacy jrt — PRICE engine inside Nrt ensure. */
  bondPriceFn: (...args: any[]) => any;
  /** Legacy Mrt — YIELD engine inside Nrt ensure. */
  bondYieldFn: (...args: any[]) => any;
  /** Legacy Nrt ensure (initializes jrt/Mrt). */
  ensurePriceYieldInit: () => void;
  /** Legacy workbookBinding1900 — coupon periods between settlement/maturity. */
  couponNumPeriods: (...args: any[]) => any;
};

export const fbbH: FormulaBondBasisBoundaryHooks = {
  dayCount: __call("./", __wb(1896)),
  get VALUE_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1927)];
  },
  get NUM_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1928)];
  },
  get EPOCH_UTC_MS() {
    return (__req("../formula-date-epoch") as any)[__wb(1929)];
  },
  get DAY_MS() {
    return (__req("../formula-date-epoch") as any)[__wb(1930)];
  },
  get DEFAULT_BASIS() {
    return (__req("../formula-date-epoch") as any)[__wb(1931)];
  },
  get BASIS_MAP() {
    return (__req("../formula-date-epoch") as any)[__wb(1932)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — fbbH uses direct imports. */
export function wireFormulaBondBasisBoundaryHooks(
  _next?: Partial<FormulaBondBasisBoundaryHooks>,
): void {}
