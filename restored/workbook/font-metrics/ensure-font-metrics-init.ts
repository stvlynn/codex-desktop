// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10/11: idempotent ensure for font-metrics + segmenter + glyph cache.

import { ensureFontMetricsInit } from "./font-metrics";
import { ensureTextSegmenterInit } from "./text-segmenter";
import { ensureGlyphAdvanceCacheInit } from "./glyph-advance-cache";

let ready = false;

export function ensureFontMetricsClusterInit(): void {
  if (ready) return;
  ensureFontMetricsInit();
  ensureTextSegmenterInit();
  ensureGlyphAdvanceCacheInit();
  ready = true;
}
