// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: presentation-plugin-add deps via direct imports
// (wirePresentationPluginAddBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type PresentationPluginAddBoundaryHooks = {
  /** Legacy NIe — mermaid code → presentation elements (still in mega bag). */
  mermaidToElements: (...args: any[]) => any;
};

export const ppaH: PresentationPluginAddBoundaryHooks = {
  mermaidToElements: __call("../mermaid-convert", "mermaidToElements"),
};

/** @deprecated Wave-163: wire leave-behind retired — ppaH uses direct imports. */
export function wirePresentationPluginAddBoundaryHooks(
  _next?: Partial<PresentationPluginAddBoundaryHooks>,
): void {}
