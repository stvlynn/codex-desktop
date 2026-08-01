// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: guide/overlay layout consts + A1 regex + cell-key sep.
// Legacy fEe / Binding1259 / Binding1238 / workbookO / qTe.
// Stage-3 wave-155.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { workbookEt } from "../emu-units";
import { ensureCssNamedColorsInit as workbookXt } from "../presentation-theme";
import {
  ensureAdjAliasInit as workbookBinding643,
  ensureShapeFormulaOpsInit as _S,
} from "../preset-shape";

export let workbookBinding1237: RegExp;
export const workbookBinding1238 = esmInit(() => {
  workbookBinding1237 =
    /((?:'[^']+'|[A-Za-z0-9_.]+)!)?($?[A-Za-z]{1,3}\$?\d{1,7})(?::($?[A-Za-z]{1,3}\$?\d{1,7}))?/g;
});

export let workbookBinding1256: number;
export let workbookBinding1257: number;
export let workbookBinding1258: number;
export let _B: number;
export const workbookBinding1259 = esmInit(() => {
  workbookBinding643();
  _S();
  workbookBinding1256 = Math.PI * 2;
  workbookBinding1257 = 180 / Math.PI;
  workbookBinding1258 = Math.PI / 180;
  _B = 1e-6;
});

export let workbookBinding1276: string;
export const qTe = esmInit(() => {
  workbookBinding1276 = "#F7F7F7";
});

export let workbookBinding1277: number;
export let workbookBinding1278: number;
export let workbookBinding1279: number;
export let workbookBinding1280: string;
export let workbookBinding1281: number;
export let workbookBinding1282: number;
export let workbookBinding1283: string;
export let workbookBinding1284: number;
export let workbookBinding1285: number;
export let workbookBinding1286: number;
export let workbookBinding1287: number;
export const fEe = esmInit(() => {
  Qt();
  workbookXt();
  workbookEt();
  workbookBinding1277 = 8;
  workbookBinding1278 = 2;
  workbookBinding1279 = 4;
  workbookBinding1280 = "#B1B1B1";
  workbookBinding1281 = 1;
  workbookBinding1282 = 12;
  workbookBinding1283 = "rgba(37, 99, 235, 0.9)";
  workbookBinding1284 = 6;
  workbookBinding1285 = 4;
  workbookBinding1286 = 3;
  workbookBinding1287 = 1e-6;
});

export let workbookBinding1288: string;
export function pEe(workbookInput14958: any, workbookInput14959: any): string {
  return `${workbookInput14958}${workbookBinding1288}${workbookInput14959}`;
}
export const workbookO = esmInit(() => {
  workbookBinding1288 = "::cell:";
});

export const ensureFEeInit = fEe;
export const ensureBinding1259Init = workbookBinding1259;
export const ensureBinding1238Init = workbookBinding1238;
export const ensureWorkbookOInit = workbookO;
export const ensureQTeInit = qTe;
