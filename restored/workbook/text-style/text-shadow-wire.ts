// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: TextStyle.shadow normalizer (real CSS parser; wire kept for tests).

import { normalizeTextShadowFromCss } from "./shadow-css-parse";

export type TextShadowNormalizer = (value: unknown) => unknown;

let normalizeTextShadowImpl: TextShadowNormalizer = normalizeTextShadowFromCss;

/** Used by TextStyle.shadow setter. */
export function normalizeTextShadow(value: unknown): unknown {
  return normalizeTextShadowImpl(value);
}

/** Override hook (wave-8 bridge); defaults to CSS shadow parser. */
export function wireNormalizeTextShadow(fn: TextShadowNormalizer): void {
  normalizeTextShadowImpl = fn;
}
