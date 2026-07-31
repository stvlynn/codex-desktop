// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: idempotent ensure for chart proto name-map cluster.

import { ensureShapeGeometryInit } from "../shape-geometry";

let initialized = false;

export function ensureChartProtoNameMapsInit(): void {
  if (initialized) return;
  ensureShapeGeometryInit();
  // Maps are eager const exports; wr()/qn() side-effects remain in boundary.
  initialized = true;
}
