// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-151: presentation-doc (_workbookS) leave-behind hooks.

export type PresentationDocBoundaryHooks = {
  ensurePresentationDocDeps: () => void;
  snapshotLeaveBehinds: () => Record<string, any>;
};

export const psH: PresentationDocBoundaryHooks =
  {} as PresentationDocBoundaryHooks;

export function wirePresentationDocHooks(
  next: PresentationDocBoundaryHooks,
): void {
  Object.assign(psH, next);
}
