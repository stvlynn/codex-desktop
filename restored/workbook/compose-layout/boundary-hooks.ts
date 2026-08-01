// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: compose-layout deps via direct imports
// (wireComposeLayoutBoundaryHooks leave-behind retired).

import { workbookEt, workbookTt } from "../emu-units";
import { workbookBinding412 } from "../binding662-gate";
import { workbookBinding739, workbookBinding736 } from "../shape-element";

export type ComposeLayoutBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureBinding412: () => void;
  ensureBinding739: () => void;
  getShapeElementClass: () => any;
  getWorkbookTt: () => (value: number) => number;
};

/** @deprecated Wave-160: wire leave-behind retired — ensures use direct imports. */
export function wireComposeLayoutBoundaryHooks(
  _next?: Partial<ComposeLayoutBoundaryHooks>,
): void {}

export function ensureWorkbookEt(): void {
  workbookEt();
}
export function ensureBinding412(): void {
  workbookBinding412();
}
export function ensureBinding739(): void {
  workbookBinding739();
}
export function getShapeElementClass(): any {
  return workbookBinding736;
}
export function getWorkbookTt(): (value: number) => number {
  ensureWorkbookEt();
  return workbookTt;
}
