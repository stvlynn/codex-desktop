// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula error/epoch ensure bags
// (legacy Binding1880 / G8e / rot / nst / Uct / Uut / Ydt).
// Stage-3 wave-154.

import { esmInit } from "../../runtime/rolldown-runtime";
import workbookDecimal, { ensureDecimalInit } from "../../vendor/decimal";
import { workbookBinding1874 } from "../formula-stats";
import { ensureFormulaArrayInit } from "../formula-array";
import {
  ensureEvalContextStackInit,
} from "../formula-eng-mids";
import { Jct } from "../formula-criteria-lookup";
import {
  Lrt,
  Prt,
  workbookBinding1901,
} from "../formula-bond-basis";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";

const $u = ensureFormulaArrayInit;
const Vit = ensureDecimalInit;
const workbookBinding1926 = workbookDecimal;

export let workbookBinding1875: { kind: string; code: string };
export let workbookBinding1876: { kind: string; code: string };
export let workbookBinding1877: { kind: string; code: string };
export let workbookBinding1878: string;
export let workbookBinding1879: { kind: string; code: string };
export let _6e: { kind: string; code: string };
export let v6e: number;
export let y6e: number;

export const workbookBinding1880 = esmInit(() => {
  workbookBinding1874();
  $u();
  workbookBinding1875 = { kind: "Error", code: "#DIV/0!" };
  workbookBinding1876 = { kind: "Error", code: "#VALUE!" };
  workbookBinding1877 = { kind: "Error", code: "#DIV/0!" };
  workbookBinding1878 = "#NUM!";
  workbookBinding1879 = { kind: "Error", code: workbookBinding1878 };
  _6e = { kind: "Error", code: "#N/A" };
  v6e = 1e10;
  y6e = 1e-12;
});

export let W8e: { kind: string; code: string };
export let workbookBinding1881: number;
export let workbookBinding1882: number;

export const G8e = esmInit(() => {
  workbookBinding1874();
  $u();
  W8e = { kind: "Error", code: "#VALUE!" };
  workbookBinding1881 = Date.UTC(1899, 11, 30);
  workbookBinding1882 = 86400000;
});

export let workbookBinding1927: { kind: string; code: string };
export let workbookBinding1928: { kind: string; code: string };
export let workbookBinding1929: number;
export let workbookBinding1930: number;
export let workbookBinding1931: string;
export let workbookBinding1932: Record<number, string>;
export let workbookBinding1933: typeof Prt;

export const rot = esmInit(() => {
  Lrt();
  workbookBinding1901();
  workbookBinding1874();
  Vit();
  workbookBinding1926.set({
    precision: 50,
    rounding: workbookBinding1926.ROUND_HALF_EVEN,
  });
  workbookBinding1927 = { kind: "Error", code: "#VALUE!" };
  workbookBinding1928 = { kind: "Error", code: "#NUM!" };
  workbookBinding1929 = Date.UTC(1899, 11, 30);
  workbookBinding1930 = 86400000;
  workbookBinding1931 = "30U/360";
  workbookBinding1932 = {
    0: "30U/360",
    1: "ACTUAL/ACTUAL",
    2: "ACTUAL/360",
    3: "ACTUAL/365",
    4: "30E/360",
  };
  workbookBinding1933 = Prt;
});

export let workbookBinding1936: { kind: string; code: string };

export const nst = esmInit(() => {
  workbookBinding1874();
  $u();
  ensureEvalContextStackInit();
  workbookBinding1936 = { kind: "Error", code: "#VALUE!" };
});

export let workbookBinding1937: number;
export let workbookBinding1938: number;
export let workbookBinding1939: { kind: string; code: string };
export let workbookBinding1940: { kind: string; code: string };
export let workbookBinding1941: { kind: string; code: string };
export let Hct: number;

export const Uct = esmInit(() => {
  workbookBinding1874();
  initAddressMetrics();
  $u();
  ensureEvalContextStackInit();
  workbookBinding1937 = 0;
  workbookBinding1938 = 0;
  workbookBinding1939 = { kind: "Error", code: "#VALUE!" };
  workbookBinding1940 = { kind: "Error", code: "#N/A" };
  workbookBinding1941 = { kind: "Error", code: "#CALC!" };
  Hct = 1e-9;
});

export let workbookBinding1942: { kind: string; code: string };
export let workbookBinding1943: { kind: string; code: string };
export let workbookBinding1944: { kind: string; code: string };
export let But: number;
export let Vut: Set<number>;
export let Hut: Set<number>;

export const Uut = esmInit(() => {
  workbookBinding1874();
  $u();
  Jct();
  ensureEvalContextStackInit();
  workbookBinding1942 = { kind: "Error", code: "#VALUE!" };
  workbookBinding1943 = { kind: "Error", code: "#DIV/0!" };
  workbookBinding1944 = { kind: "Error", code: "#NUM!" };
  But = 15;
  Vut = new Set([0, 5, 6, 7]);
  Hut = new Set([2, 3, 6, 7]);
});

export let workbookBinding1945: { kind: string; code: string };
export let workbookBinding1946: { kind: string; code: string };

export const Ydt = esmInit(() => {
  workbookBinding1874();
  $u();
  workbookBinding1945 = { kind: "Error", code: "#VALUE!" };
  workbookBinding1946 = { kind: "Error", code: "#N/A" };
});

export const ensureBinding1880Init = workbookBinding1880;
export const ensureG8eInit = G8e;
export const ensureRotInit = rot;
export const ensureNstInit = nst;
export const ensureUctInit = Uct;
export const ensureUutInit = Uut;
export const ensureYdtInit = Ydt;
