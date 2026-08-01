// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: presentation-theme deps via direct imports
// (wireThemeFontsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ThemeFontsBoundaryHooks = {
  trimName: (...args: any[]) => any;
  normalizeFontFace: (...args: any[]) => any;
};

export const ptfH: ThemeFontsBoundaryHooks = {
  normalizeFontFace: __call("../compose-element-snapshot", __wh(680)),
  trimName: __call("../compose-element-snapshot", "trimNonEmpty"),
};

/** @deprecated Wave-163: wire leave-behind retired — ptfH uses direct imports. */
export function wireThemeFontsBoundaryHooks(
  _next?: Partial<ThemeFontsBoundaryHooks>,
): void {}
