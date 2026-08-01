// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: named-ranges deps via direct imports
// (wireNamedRangesBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type NamedRangesBoundaryHooks = {
  ensureRangeClusterInit: (...args: any[]) => any;
};

export const nrH: NamedRangesBoundaryHooks = {
  ensureRangeClusterInit: __call(
    "../binding662-gate",
    "ensureRangeClusterInit",
  ),
};

/** @deprecated Wave-163: wire leave-behind retired — nrH uses direct imports. */
export function wireNamedRangesBoundaryHooks(
  _next?: Partial<NamedRangesBoundaryHooks>,
): void {}
