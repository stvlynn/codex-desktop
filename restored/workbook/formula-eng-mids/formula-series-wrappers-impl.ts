// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: IF/NOT + series agg wrappers (legacy t2e/r2e/$2e/u4e…n3e).
// Stage-3 wave-141.

import { isFormulaErrorToken } from "../formula-average-a";
import { workbookBinding1835 } from "../formula-stats";
import {
  isOddInteger,
  percentileArgs,
  trimmeanArgs,
  xQe,
  tQe,
  averageAArgs,
  yQe,
  SQe,
  IQe,
  VQe,
  FQe,
  BQe,
} from "../formula-scalar-funcs";
import { workbookHelper911 } from "./formula-series-utils-impl";

/** Legacy Binding1875 — #DIV/0! error token. */
const ERR_DIV0 = { kind: "Error", code: "#DIV/0!" } as const;

export function t2e(femIn8155: any, femIn8156: any, femIn8157: any) {
  return femIn8155 instanceof Error
    ? femIn8155
    : ((femIn8156 = arguments.length >= 2 ? femIn8156 : true),
      (femIn8156 ??= 0),
      (femIn8157 = arguments.length === 3 ? femIn8157 : false),
      (femIn8157 ??= 0),
      femIn8155 ? femIn8156 : femIn8157);
}
export function r2e(femIn12215: any) {
  return typeof femIn12215 == "string"
    ? workbookBinding1835
    : femIn12215 instanceof Error
      ? femIn12215
      : !femIn12215;
}
export function $2e(event: any) {
  return isFormulaErrorToken(event)
    ? event.code === "#NUM!"
    : typeof event == "string"
      ? event.trim().toUpperCase() === "#NUM!"
      : false;
}
export function u4e(femIn14176: any, femIn14177: any, ...femIn14178: any[]) {
  return workbookHelper911(isOddInteger, femIn14176, femIn14177, ...femIn14178);
}
export function v4e(femIn14179: any, femIn14180: any, ...femIn14181: any[]) {
  return workbookHelper911(
    percentileArgs,
    femIn14179,
    femIn14180,
    ...femIn14181,
  );
}
export function y4e(femIn14182: any, femIn14183: any, ...femIn14184: any[]) {
  return workbookHelper911(trimmeanArgs, femIn14182, femIn14183, ...femIn14184);
}
export function T4e(femIn14052: any, femIn14053: any, ...femIn14054: any[]) {
  return workbookHelper911(xQe, femIn14052, femIn14053, ...femIn14054);
}
export function D4e(femIn14055: any, femIn14056: any, ...femIn14057: any[]) {
  return workbookHelper911(tQe, femIn14055, femIn14056, ...femIn14057);
}
export function X4e(femIn12217: any, femIn12218: any, ...femIn12219: any[]) {
  let femBind22327 = workbookHelper911(
    averageAArgs,
    femIn12217,
    femIn12218,
    ...femIn12219,
  );
  return $2e(femBind22327) ? ERR_DIV0 : femBind22327;
}
export function Z4e(femIn14070: any, femIn14071: any, ...femIn14072: any[]) {
  return workbookHelper911(yQe, femIn14070, femIn14071, ...femIn14072);
}
export function Q4e(femIn14073: any, femIn14074: any, ...femIn14075: any[]) {
  return workbookHelper911(SQe, femIn14073, femIn14074, ...femIn14075);
}
export function $4e(femIn14076: any, femIn14077: any, ...femIn14078: any[]) {
  return workbookHelper911(IQe, femIn14076, femIn14077, ...femIn14078);
}
export function e3e(femIn14079: any, femIn14080: any, ...femIn14081: any[]) {
  return workbookHelper911(VQe, femIn14079, femIn14080, ...femIn14081);
}
export function t3e(femIn14082: any, femIn14083: any, ...femIn14084: any[]) {
  return workbookHelper911(FQe, femIn14082, femIn14083, ...femIn14084);
}
export function n3e(femIn14085: any, femIn14086: any, ...femIn14087: any[]) {
  return workbookHelper911(BQe, femIn14085, femIn14086, ...femIn14087);
}
