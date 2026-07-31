// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: idempotent ensure for Line stroke cluster (legacy Binding432).

import { ensureFillInit } from "../fill";

let ready = false;

/** Legacy Binding432 — Line + dash/compound maps are eager; deps ensured once. */
export function ensureLineInit(): void {
  if (ready) return;
  ensureFillInit();
  ready = true;
}
