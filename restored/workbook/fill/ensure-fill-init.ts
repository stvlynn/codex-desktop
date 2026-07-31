// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: idempotent ensure for fill / gradient-parse cluster.

import { ensureGradientFillParseInit } from "./gradient-fill-parse";
import { ensureFillInit } from "./fill";

let depsReady = false;

/** Legacy Binding412 — gradient parse + remaining stroke/shadow inits stay in boundary. */
export function ensureFillDepsInit(): void {
  if (depsReady) return;
  ensureGradientFillParseInit();
  depsReady = true;
}

export function ensureFillClusterInit(): void {
  ensureFillDepsInit();
  ensureFillInit();
}
