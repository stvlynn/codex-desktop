// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: DrawingML CRGB fill defaults + resolveFillStyle wrap (legacy _A / workbookHelper464).
// Stage-3 wave-140.

import { resolveFillStyle } from "./fill-resolve";

/** Legacy _A — default color-space options for DrawingML CRGB fills. */
export const DRAWINGML_CRGB_DEFAULTS = {
  colorSpace: "drawingml-crgb",
} as const;

/** @deprecated Legacy alias for DRAWINGML_CRGB_DEFAULTS. */
export const _A = DRAWINGML_CRGB_DEFAULTS;

export function workbookHelper464(
  cfIn11467: any,
  cfIn11468: any,
  cfIn11469: any,
  cfIn11470: any,
  cfIn11471: any = "transparent",
) {
  return resolveFillStyle(cfIn11467, cfIn11468, cfIn11469, cfIn11470, {
    ...DRAWINGML_CRGB_DEFAULTS,
    defaultFill: cfIn11471,
  });
}
