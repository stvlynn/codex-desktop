// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-157: Sheet boundary deps via direct imports (wire leave-behind retired).

import { ensureRangeClusterInit as ensureRangeClusterInitMod } from "../binding662-gate";
import { Cme, Eme } from "../binding662-gate";
import {
  ensureWorksheetDrawingsInit as workbookBinding789,
  ensureDrawingLayoutInit as Rve,
} from "../worksheet-drawings";
import {
  ensureDropdownPaddingInit as workbookBinding588,
  isListValidationWithoutDropdown as Ele,
} from "../worksheet-autofit";
import {
  workbookBinding817,
  aye,
  getStyleRefsCollabClass as getStyleRefsCollabClassMod,
  getSheetStructureCollabClass,
} from "../collab-snapshot";
import {
  ensureCanvasPaintConstsInit as ensureCpConstsInit,
  notifyRowHeights as notifyRowHeightsMod,
} from "../canvas-paint";
import { ensureFormulaInit as workbookF } from "../formula";
import { ensureTextBoxClusterInit as workbookZ } from "../text-box";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { yhe, xhe, bhe, vhe } from "../table-vo";
import {
  ensureCellVoInit as zve,
  ensureCellGridInit as Bve,
  ensureSparklineGroupsInit as Kve,
} from "../sparklines";
import { ensureConditionalFormatInit as wpe } from "../conditional-format";
import { ensureDataValidationInit as Bpe } from "../data-validation";
import { gye, pye } from "../table-styles";
import { Qt, wr } from "../presentation-protobuf";
import {
  ensureSsfFormatInit as workbookBinding583,
  ensureStripFontFaceNameInit as workbookBinding586,
} from "../cell-xf-format";
import { workbookBinding1238 } from "../guide-layout-consts";
import { workbookBinding833 } from "../merged-range-index";
import { shiftSharedFormulaRefs as shiftSharedFormulaRefsImpl } from "../formula-shared-refs";

/** Legacy workbookKt eager-init no-op (Yjs shim companion). */
export function ensureWorkbookKt(): void {}

export function ensureRangeClusterInit(): void {
  ensureRangeClusterInitMod();
}
export function ensureWorksheetDrawingsInit(): void {
  workbookBinding789();
}
export function ensureDropdownPaddingInit(): void {
  workbookBinding588();
}
export function ensureStyleRefsCollabInit(): void {
  workbookBinding817();
}
export function ensureCanvasPaintConstsInit(): void {
  ensureCpConstsInit();
}
export function ensureWorkbookF(): void {
  workbookF();
}
export function ensureWorkbookZ(): void {
  workbookZ();
}
export function ensureSpreadsheetVn(): void {
  spreadsheetVn();
}
export function ensureCme(): void {
  Cme();
}
export function ensureEme(): void {
  Eme();
}
export function ensureYhe(): void {
  yhe();
}
export function ensureXhe(): void {
  xhe();
}
export function ensureRve(): void {
  Rve();
}
export function ensureZve(): void {
  zve();
}
export function ensureBve(): void {
  Bve();
}
export function ensureKve(): void {
  Kve();
}
export function ensureWpe(): void {
  wpe();
}
export function ensureBpe(): void {
  Bpe();
}
export function ensureAye(): void {
  aye();
}
export function ensureSye(): void {}
export function ensureGye(): void {
  gye();
}
export function ensureQt(): void {
  Qt();
}
export function ensureWr(): void {
  wr();
}
export function ensureWorkbookBinding583(): void {
  workbookBinding583();
}
export function ensureWorkbookBinding586(): void {
  workbookBinding586();
}
export function ensureWorkbookBinding1238(): void {
  workbookBinding1238();
}
export function shiftSharedFormulaRefs(...args: any[]): any {
  return shiftSharedFormulaRefsImpl(...args);
}
export function getStyleRefsCollabClass(): any {
  return getStyleRefsCollabClassMod();
}
export function getTableStyleClass(): any {
  return getSheetStructureCollabClass();
}
export function getMergedRangeIndexClass(): any {
  return workbookBinding833;
}
export function getTablesCollectionClass(): any {
  yhe();
  return bhe;
}
export function getSparklinesFacadeClass(): any {
  xhe();
  return vhe;
}
export function isCheckboxStyle(...args: any[]): any {
  return Ele(...args);
}
export function notifyRowHeights(...args: any[]): any {
  return notifyRowHeightsMod(...args);
}
export function buildSparklinePreview(...args: any[]): any {
  return pye(...args);
}

/** @deprecated Wave-157: wire leave-behind retired — sheet uses direct imports. */
export type SheetBoundaryHooks = Record<string, never>;
export function wireSheetBoundaryHooks(_next?: SheetBoundaryHooks): void {}
