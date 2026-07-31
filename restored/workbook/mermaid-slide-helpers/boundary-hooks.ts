// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-69: boundary deps for mermaid-slide-helpers (Binding1592 cluster).

export type MermaidSlideHelpersBoundaryHooks = {
  /** Intentional leave-behind ensure (gae/workbookEt terminal). */
  workbookEt: () => void;
  /** Late workbook shell ensure (live var via closure). */
  ensureWorkbookS: () => void;
  /** Late Workbook class factory (live var via closure). */
  getWorkbookO: () => any;
};

/** Live bag for intentional leave-behinds / late workbook ensures. */
export const mshH: MermaidSlideHelpersBoundaryHooks =
  {} as MermaidSlideHelpersBoundaryHooks;

export function wireMermaidSlideHelpersBoundaryHooks(
  next: MermaidSlideHelpersBoundaryHooks,
): void {
  mshH.workbookEt = next.workbookEt;
  mshH.ensureWorkbookS = next.ensureWorkbookS;
  mshH.getWorkbookO = next.getWorkbookO;
}
