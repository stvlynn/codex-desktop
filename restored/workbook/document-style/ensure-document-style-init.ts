// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: idempotent ensure for effects + document-style + theme maps.

import { ensureEffectListInit } from "./effect-list";
import { ensureContextualSpacingSchemeInit } from "./scheme-css";
import { ensureDocumentStylesInit } from "./document-style-resolver";
import { ensureThemeStyleMapsInit } from "./theme-style-maps";

let ready = false;

export function ensureDocumentStyleClusterInit(): void {
  if (ready) return;
  ensureEffectListInit();
  ensureContextualSpacingSchemeInit();
  ensureDocumentStylesInit();
  ensureThemeStyleMapsInit();
  ready = true;
}
