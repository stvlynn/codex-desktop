// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-155: shell-mid-ensures boundary hooks.

export type ShellMidEnsureHooks = {
  ensureQTeDeps: () => void;
  ensureEEeDeps: () => void;
  ensureREeDeps: () => void;
  ensureGTeDeps: () => void;
  ensureXDeDeps: () => void;
  ensureZIeDeps: () => void;
  ensureBIeDeps: () => void;
  ensureXReDeps: () => void;
  ensureZweDeps: () => void;
  ensureHweDeps: () => void;
  ensureWorkbookMDeps: () => void;
  ensureCTeDeps: () => void;
  ensureZTeDeps: () => void;
};

export const smeH: ShellMidEnsureHooks = {} as ShellMidEnsureHooks;

export function wireShellMidEnsureHooks(next: ShellMidEnsureHooks): void {
  Object.assign(smeH, next);
}
