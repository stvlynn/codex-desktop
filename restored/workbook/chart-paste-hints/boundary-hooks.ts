// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-155: chart-paste-hints boundary hooks.

export type ChartPasteHintsHooks = {
  ensureEhtDeps: () => void;
  ensureKmtDeps: () => void;
  ensureCmtDeps: () => void;
  createAppInitialBst: () => unknown;
};

export const cphH: ChartPasteHintsHooks = {} as ChartPasteHintsHooks;

export function wireChartPasteHintsHooks(next: ChartPasteHintsHooks): void {
  Object.assign(cphH, next);
}
