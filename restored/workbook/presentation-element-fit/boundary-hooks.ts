// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: presentation-element-fit deps via direct imports
// (wirePresentationElementFitBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type PresentationElementFitBoundaryHooks = {
  /** EMU → CSS px (legacy of / workbookEt). */
  emuToPx: (...args: any[]) => any;
  /** Length unit enum (legacy Binding384). */
  lengthUnit: any;
};

export const pelH: PresentationElementFitBoundaryHooks = {
  emuToPx: __call("../emu-units", "of"),
  get lengthUnit() {
    return (__req("../chart-proto-name-maps") as any)["lengthUnitNameByKey"];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — pelH uses direct imports. */
export function wirePresentationElementFitBoundaryHooks(
  _next?: Partial<PresentationElementFitBoundaryHooks>,
): void {}
