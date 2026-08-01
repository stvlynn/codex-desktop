// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-151: WorkbookN ensure/wire leave-behinds still on the mega boundary.

export type WorkbookNBoundaryHooks = {
  ensureWorkbookNDeps: () => void;
};

export const wnH: WorkbookNBoundaryHooks = {} as WorkbookNBoundaryHooks;

export function wireWorkbookNHooks(next: WorkbookNBoundaryHooks): void {
  Object.assign(wnH, next);
}
