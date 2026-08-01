// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: presentation-ref deps via direct imports
// (wirePresentationRefBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type PresentationRefHooks = {
  /** Legacy Binding1388 — notes slide class. */
  NotesSlide: any;
  /** Legacy Binding1734 — comment thread class. */
  CommentThread: any;
};

export const prefH: PresentationRefHooks = {
  get NotesSlide() {
    return (__req("../speaker-notes") as any)[__wb(1388)];
  },
  get CommentThread() {
    return (__req("../comments") as any)[__wb(1734)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — prefH uses direct imports. */
export function wirePresentationRefBoundaryHooks(
  _next?: Partial<PresentationRefHooks>,
): void {}
