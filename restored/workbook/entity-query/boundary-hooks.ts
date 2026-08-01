// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: entity-query deps via direct imports
// (wireEntityQueryBoundaryHooks leave-behind retired).
// xgt/ygt inlined to avoid workbook-core ↔ entity-query cycle.

import { workbookEt, workbookBinding409 } from "../emu-units";
import { wr } from "../presentation-protobuf";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { ensureStylesheetInit } from "../stylesheet";
import { bgt as bgtImpl, vgt as vgtImpl } from "./sheet-used-range-style-impl";

export type EntityQueryBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureWr: () => void;
  ensureXgt: () => void;
  ensureYgt: () => void;
  bgt: (...args: any[]) => any;
  vgt: (...args: any[]) => any;
  getEmuScale: () => number;
};

export function wireEntityQueryBoundaryHooks(
  _next?: Partial<EntityQueryBoundaryHooks>,
): void {}

export function ensureWorkbookEt(): void {
  workbookEt();
}
export function ensureWr(): void {
  wr();
}
export function ensureXgt(): void {
  initAddressMetrics();
}
export function ensureYgt(): void {
  ensureStylesheetInit();
}
export function bgt(...args: any[]): any {
  return bgtImpl(...args);
}
export function vgt(...args: any[]): any {
  return vgtImpl(...args);
}
export function getEmuScale(): number {
  return workbookBinding409;
}
