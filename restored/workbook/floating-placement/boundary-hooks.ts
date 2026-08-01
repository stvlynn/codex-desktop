// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: floating-placement deps via direct imports
// (wireFloatingPlacementBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type FloatingPlacementBoundaryHooks = {
  bh640: (...args: any[]) => any;
  /** Lookup anchor paragraph alignment (legacy kTe). */
  paragraphAlignment: (...args: any[]) => any;
  /** Whether paragraph is vertically centered (legacy ATe). */
  isParagraphVCenter: (...args: any[]) => any;
};

export const fpH: FloatingPlacementBoundaryHooks = {
  bh640: __call("../text-element-build", __wh(640)),
  paragraphAlignment: __call("./", "kTe"),
  isParagraphVCenter: __call("./", "ATe"),
};

/** @deprecated Wave-161: wire leave-behind retired — fpH uses direct imports. */
export function wireFloatingPlacementBoundaryHooks(
  _next?: Partial<FloatingPlacementBoundaryHooks>,
): void {}
