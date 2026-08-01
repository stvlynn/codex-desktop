// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: formula-stats deps via lazy direct imports
// (wireFormulaStatsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type FormulaStatsBoundaryHooks = {
  fn835: any;
  fn841: any;
  fn845: any;
  fn846: any;
  fn847: any;
  fn848: any;
  fn849: any;
  fn850: any;
  fn858: any;
  fn859: any;
  fn864: any;
  fn865: any;
  fn869: any;
  fn870: any;
  fn872: any;
  fn875: any;
  fn880: any;
  fn881: any;
  fn887: any;
  fn888: any;
  ZXe: any;
  FZe: any;
  MZe: any;
  PZe: any;
  tZe: any;
  cZe: any;
  jQe: any;
};

export const fsH: FormulaStatsBoundaryHooks = {
  get fn835() {
    return __get("../formula-token-utils", "excelDaysSinceEpoch")();
  },
  get fn841() {
    return __get("../formula-token-utils", "flattenFormulaArgs")();
  },
  get fn845() {
    return __get("../formula-token-utils", "anyFormulaError")();
  },
  get fn846() {
    return __get("../formula-token-utils", "hasFormulaError")();
  },
  get fn847() {
    return __get("../formula-token-utils", "filterNumericArgs")();
  },
  get fn848() {
    return __get("../formula-token-utils", "coerceFormulaDate")();
  },
  get fn849() {
    return __get("../formula-token-utils", "flattenMatrixArgs")();
  },
  get fn850() {
    return __get("../formula-token-utils", "ensureFlatArgs")();
  },
  get fn858() {
    return __get("../formula-scalar-funcs", "averageArgs")();
  },
  get fn859() {
    return __get("../formula-scalar-funcs", "averageNumericArgs")();
  },
  get fn864() {
    return __get("../formula-scalar-funcs", "modeArgs")();
  },
  get fn865() {
    return __get("../formula-scalar-funcs", "geomeanArgs")();
  },
  get fn869() {
    return __get("../formula-scalar-funcs", "romanNumeral")();
  },
  get fn870() {
    return __get("../formula-scalar-funcs", "sqrtFloor")();
  },
  get fn872() {
    return __get("../formula-scalar-funcs", "arabicNumeral")();
  },
  get fn875() {
    return __get("../formula-scalar-funcs", "sumproductArgs")();
  },
  get fn880() {
    return __get("../formula-date-months", __wh(880))();
  },
  get fn881() {
    return __get("../formula-date-months", __wh(881))();
  },
  get fn887() {
    return __get("../formula-eng-mids", __wh(887))();
  },
  get fn888() {
    return __get("../formula-eng-mids", __wh(888))();
  },
  get ZXe() {
    return __get("../formula-token-utils", "excelSerialToDate")();
  },
  get FZe() {
    return __get("../formula-scalar-funcs", "FZe")();
  },
  get MZe() {
    return __get("../formula-scalar-funcs", "MZe")();
  },
  get PZe() {
    return __get("../formula-scalar-funcs", "PZe")();
  },
  get tZe() {
    return __get("../formula-token-utils", "applyCriteriaOperator")();
  },
  get cZe() {
    return __get("../formula-token-utils", "roundFormulaFloat")();
  },
  get jQe() {
    return __get("../formula-scalar-funcs", "jQe")();
  },
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireFormulaStatsBoundaryHooks(
  _next?: Partial<FormulaStatsBoundaryHooks>,
): void {}
