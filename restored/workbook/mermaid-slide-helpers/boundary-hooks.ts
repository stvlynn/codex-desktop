// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: mermaid-slide-helpers deps via direct imports
// (wireMermaidSlideHelpersBoundaryHooks leave-behind retired).

import { workbookEt } from "../emu-units";
import { _workbookS, _workbookO } from "../presentation-doc";

export type MermaidSlideHelpersBoundaryHooks = {
  workbookEt: () => void;
  ensureWorkbookS: () => void;
  getWorkbookO: () => any;
};

export const mshH: MermaidSlideHelpersBoundaryHooks = {
  workbookEt: () => {
    workbookEt();
  },
  ensureWorkbookS: () => {
    _workbookS();
  },
  getWorkbookO: () => _workbookO,
};

/** @deprecated Wave-161: wire leave-behind retired — mshH uses direct imports. */
export function wireMermaidSlideHelpersBoundaryHooks(
  _next?: Partial<MermaidSlideHelpersBoundaryHooks>,
): void {}
