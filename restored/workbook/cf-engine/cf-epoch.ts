// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel epoch constants + ensure (legacy Binding1959/1960/dht/1961).
// Stage-3 wave-131.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensureFormulaArrayInit } from "../formula-array";

export let excelEpochUtc: number = Date.UTC(1899, 11, 30);
export let msPerDay: number = 86400000;
export let isoDateRe: RegExp = /^\d{4}-\d{2}-\d{2}(?:[T ][0-9:.+-Z]*)?$/;

/** Legacy workbookBinding1961 / Cht / Oht. */
export const ensureCfEpochInit = esmInit(() => {
  spreadsheetVn();
  ensureFormulaArrayInit();
  excelEpochUtc = Date.UTC(1899, 11, 30);
  msPerDay = 86400000;
  isoDateRe = /^\d{4}-\d{2}-\d{2}(?:[T ][0-9:.+-Z]*)?$/;
});

export const workbookBinding1959 = {
  get value() {
    return excelEpochUtc;
  },
};
export const workbookBinding1960 = {
  get value() {
    return msPerDay;
  },
};
export const dht = {
  get value() {
    return isoDateRe;
  },
};
export const Cht = ensureCfEpochInit;
export const Oht = ensureCfEpochInit;
export const workbookBinding1961 = ensureCfEpochInit;

/** Mutable bindings used by boundary getters (legacy names). */
export function getExcelEpochUtc(): number {
  return excelEpochUtc;
}
export function getMsPerDay(): number {
  return msPerDay;
}
export function getIsoDateRe(): RegExp {
  return isoDateRe;
}
