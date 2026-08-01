// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: worksheet-drawings deps via direct imports
// (wireWorksheetDrawingsBoundaryHooks leave-behind retired).

import { workbookEt } from "../emu-units";
import { workbookKt } from "../workbook-core";
import { _C } from "../binding662-gate";
import { Jge, workbookBinding728 } from "../image-connector";
import { workbookBinding712, workbookBinding711 } from "../chart-elements";
import { workbookBinding722, workbookBinding721 } from "../chart-asset";
import { workbookBinding739, workbookBinding736 } from "../shape-element";

export type WorksheetDrawingsBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureWorkbookKt: () => void;
  ensureBinding662: () => void;
  ensureJge: () => void;
  ensureBinding712: () => void;
  ensureBinding722: () => void;
  ensureBinding739: () => void;
  ensureBinding711: () => void;
  getShapeElementClass: () => any;
  getChartAssetClass: () => any;
  getImageAssetClass: () => any;
  getAxisTitleClass: () => any;
};

export function wireWorksheetDrawingsBoundaryHooks(
  _next?: Partial<WorksheetDrawingsBoundaryHooks>,
): void {}

export function ensureWorkbookEt(): void {
  workbookEt();
}
export function ensureWorkbookKt(): void {
  workbookKt();
}
export function ensureBinding662(): void {
  _C();
}
export function ensureJge(): void {
  Jge();
}
export function ensureBinding712(): void {
  workbookBinding712();
}
export function ensureBinding722(): void {
  workbookBinding722();
}
export function ensureBinding739(): void {
  workbookBinding739();
}
export function ensureBinding711(): void {
  workbookBinding712();
}
export function getShapeElementClass(): any {
  ensureBinding739();
  return workbookBinding736;
}
export function getChartAssetClass(): any {
  ensureBinding722();
  return workbookBinding721;
}
export function getImageAssetClass(): any {
  return workbookBinding728;
}
export function getAxisTitleClass(): any {
  ensureBinding711();
  return workbookBinding711;
}
