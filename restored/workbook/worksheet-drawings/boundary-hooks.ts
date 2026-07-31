// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: boundary ensures still owned by workbook-runtime
// (workbookEt EMU terminal, Binding662/_C, Binding712/722 chart assets,
// Binding736/739 shape element, Binding711 axis VO, Jge, workbookKt no-op,
// Binding728 image asset).

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

let hooks: WorksheetDrawingsBoundaryHooks | null = null;

export function wireWorksheetDrawingsBoundaryHooks(
  next: WorksheetDrawingsBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): WorksheetDrawingsBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "worksheet-drawings boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureWorkbookEt(): void {
  requireHooks().ensureWorkbookEt();
}
export function ensureWorkbookKt(): void {
  requireHooks().ensureWorkbookKt();
}
export function ensureBinding662(): void {
  requireHooks().ensureBinding662();
}
export function ensureJge(): void {
  requireHooks().ensureJge();
}
export function ensureBinding712(): void {
  requireHooks().ensureBinding712();
}
export function ensureBinding722(): void {
  requireHooks().ensureBinding722();
}
export function ensureBinding739(): void {
  requireHooks().ensureBinding739();
}
export function ensureBinding711(): void {
  requireHooks().ensureBinding711();
}
export function getShapeElementClass(): any {
  ensureBinding739();
  return requireHooks().getShapeElementClass();
}
export function getChartAssetClass(): any {
  ensureBinding722();
  return requireHooks().getChartAssetClass();
}
export function getImageAssetClass(): any {
  return requireHooks().getImageAssetClass();
}
export function getAxisTitleClass(): any {
  ensureBinding711();
  return requireHooks().getAxisTitleClass();
}
