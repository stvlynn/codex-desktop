// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: boundary deps for Sheet / SXe cluster.

export type SheetBoundaryHooks = {
  ensureRangeClusterInit: () => void;
  ensureWorksheetDrawingsInit: () => void;
  ensureDropdownPaddingInit: () => void;
  ensureStyleRefsCollabInit: () => void;
  ensureCanvasPaintConstsInit: () => void;
  ensureWorkbookF: () => void;
  ensureWorkbookZ: () => void;
  ensureWorkbookKt: () => void;
  ensureSpreadsheetVn: () => void;
  ensureCme: () => void;
  ensureEme: () => void;
  ensureYhe: () => void;
  ensureXhe: () => void;
  ensureRve: () => void;
  ensureZve: () => void;
  ensureBve: () => void;
  ensureKve: () => void;
  ensureWpe: () => void;
  ensureBpe: () => void;
  ensureAye: () => void;
  ensureSye: () => void;
  ensureGye: () => void;
  ensureQt: () => void;
  ensureWr: () => void;
  ensureWorkbookBinding583: () => void;
  ensureWorkbookBinding586: () => void;
  ensureWorkbookBinding1238: () => void;
  shiftSharedFormulaRefs: (...args: any[]) => any;
  getStyleRefsCollabClass: () => any;
  getTableStyleClass: () => any;
  getMergedRangeIndexClass: () => any;
  getTablesCollectionClass: () => any;
  getSparklinesFacadeClass: () => any;
  isCheckboxStyle: (...args: any[]) => any;
  notifyRowHeights: (...args: any[]) => any;
  buildSparklinePreview: (...args: any[]) => any;
};

let hooks: SheetBoundaryHooks | null = null;

export function wireSheetBoundaryHooks(next: SheetBoundaryHooks): void {
  hooks = next;
}

function requireHooks(): SheetBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "sheet boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureRangeClusterInit(): void {
  requireHooks().ensureRangeClusterInit();
}
export function ensureWorksheetDrawingsInit(): void {
  requireHooks().ensureWorksheetDrawingsInit();
}
export function ensureDropdownPaddingInit(): void {
  requireHooks().ensureDropdownPaddingInit();
}
export function ensureStyleRefsCollabInit(): void {
  requireHooks().ensureStyleRefsCollabInit();
}
export function ensureCanvasPaintConstsInit(): void {
  requireHooks().ensureCanvasPaintConstsInit();
}
export function ensureWorkbookF(): void {
  requireHooks().ensureWorkbookF();
}
export function ensureWorkbookZ(): void {
  requireHooks().ensureWorkbookZ();
}
export function ensureWorkbookKt(): void {
  requireHooks().ensureWorkbookKt();
}
export function ensureSpreadsheetVn(): void {
  requireHooks().ensureSpreadsheetVn();
}
export function ensureCme(): void {
  requireHooks().ensureCme();
}
export function ensureEme(): void {
  requireHooks().ensureEme();
}
export function ensureYhe(): void {
  requireHooks().ensureYhe();
}
export function ensureXhe(): void {
  requireHooks().ensureXhe();
}
export function ensureRve(): void {
  requireHooks().ensureRve();
}
export function ensureZve(): void {
  requireHooks().ensureZve();
}
export function ensureBve(): void {
  requireHooks().ensureBve();
}
export function ensureKve(): void {
  requireHooks().ensureKve();
}
export function ensureWpe(): void {
  requireHooks().ensureWpe();
}
export function ensureBpe(): void {
  requireHooks().ensureBpe();
}
export function ensureAye(): void {
  requireHooks().ensureAye();
}
export function ensureSye(): void {
  requireHooks().ensureSye();
}
export function ensureGye(): void {
  requireHooks().ensureGye();
}
export function ensureQt(): void {
  requireHooks().ensureQt();
}
export function ensureWr(): void {
  requireHooks().ensureWr();
}
export function ensureWorkbookBinding583(): void {
  requireHooks().ensureWorkbookBinding583();
}
export function ensureWorkbookBinding586(): void {
  requireHooks().ensureWorkbookBinding586();
}
export function ensureWorkbookBinding1238(): void {
  requireHooks().ensureWorkbookBinding1238();
}
export function shiftSharedFormulaRefs(...args: any[]): any {
  return requireHooks().shiftSharedFormulaRefs(...args);
}
export function getStyleRefsCollabClass(): any {
  return requireHooks().getStyleRefsCollabClass();
}
export function getTableStyleClass(): any {
  return requireHooks().getTableStyleClass();
}
export function getMergedRangeIndexClass(): any {
  return requireHooks().getMergedRangeIndexClass();
}
export function getTablesCollectionClass(): any {
  return requireHooks().getTablesCollectionClass();
}
export function getSparklinesFacadeClass(): any {
  return requireHooks().getSparklinesFacadeClass();
}
export function isCheckboxStyle(...args: any[]): any {
  return requireHooks().isCheckboxStyle(...args);
}
export function notifyRowHeights(...args: any[]): any {
  return requireHooks().notifyRowHeights(...args);
}
export function buildSparklinePreview(...args: any[]): any {
  return requireHooks().buildSparklinePreview(...args);
}
