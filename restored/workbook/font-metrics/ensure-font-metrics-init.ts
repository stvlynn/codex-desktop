// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: idempotent ensure for font-metrics + segmenter cluster.

import { ensureFontMetricsInit } from "./font-metrics";
import { ensureTextSegmenterInit } from "./text-segmenter";

let ready = false;

export function ensureFontMetricsClusterInit(): void {
  if (ready) return;
  ensureFontMetricsInit();
  ensureTextSegmenterInit();
  ready = true;
}
