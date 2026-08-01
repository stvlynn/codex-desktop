// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-149: workbook-shell-ensures boundary hooks.

export type WorkbookShellEnsureHooks = {
  ensureYEeDeps: () => void;
  ensureCzeDeps: () => void;
  ensureAJeDeps: () => void;
  ensureBinding1489Deps: () => void;
};

export const shellH: WorkbookShellEnsureHooks = {} as WorkbookShellEnsureHooks;

export function wireWorkbookShellEnsureHooks(
  next: WorkbookShellEnsureHooks,
): void {
  Object.assign(shellH, next);
}
