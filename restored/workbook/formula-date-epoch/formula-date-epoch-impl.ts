// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula date-epoch constants + thin Binding1888 ensure bag.
// Stage-3 wave-149. Collapses ~220 exclusive empty formula stubs that Binding1888 only called.

import { esmInit } from "../../runtime/rolldown-runtime";

export let S7e = 365.2425;
export let C7e = 8640000000000000;
export let w7e = 864e5;
export let T7e = 3600;
export let workbookBinding1883 = T7e * 24;
export let E7e = workbookBinding1883 * S7e;
export let D7e = E7e / 12;
export let workbookBinding1884 = Symbol.for("constructDateFrom");

export const O7e = esmInit(() => {
  S7e = 365.2425;
  C7e = 8640000000000000;
  w7e = 864e5;
  T7e = 3600;
  workbookBinding1883 = T7e * 24;
  E7e = workbookBinding1883 * S7e;
  D7e = E7e / 12;
  workbookBinding1884 = Symbol.for("constructDateFrom");
});

export const workbookBinding1885 = esmInit(() => {
  O7e();
});

export const workbookBinding1886 = esmInit(() => {
  workbookBinding1885();
});

export const workbookBinding1887 = esmInit(() => {
  workbookBinding1885();
});

/** Legacy Binding1888 — was a 245-call empty-stub bag; now inits date-epoch only. */
export const workbookBinding1888 = esmInit(() => {
  workbookBinding1885();
  workbookBinding1886();
});

export const ensureFormulaDateEpochInit = workbookBinding1888;
