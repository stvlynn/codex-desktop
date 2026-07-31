// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-88: boundary deps for worksheets collection
// (kme / Binding686 sheet logger leave-behind).

export type WorksheetsBoundaryHooks = {
  ensureKme: () => void;
  sheetLog: {
    warn: (...args: any[]) => void;
    debug?: (...args: any[]) => void;
    info?: (...args: any[]) => void;
    error?: (...args: any[]) => void;
  };
};

/** Live bag for kme logger leave-behind. */
export const shH: WorksheetsBoundaryHooks = {} as WorksheetsBoundaryHooks;

export function wireWorksheetsBoundaryHooks(
  next: WorksheetsBoundaryHooks,
): void {
  shH.ensureKme = next.ensureKme;
  Object.defineProperty(shH, "sheetLog", {
    get: () => next.sheetLog,
    configurable: true,
  });
}
