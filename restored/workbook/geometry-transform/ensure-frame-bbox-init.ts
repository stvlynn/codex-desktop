// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: FrameBbox cluster ensure (legacy Oue).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRotationScaleInit } from "./ensure-rotation-scale-init";
import { FrameBbox } from "./frame-bbox";

/**
 * Legacy Oue — touches rotation scale; FrameBbox class is a static export
 * (no lazy class assignment needed after extract).
 */
export const ensureFrameBboxInit = esmInit(() => {
  ensureRotationScaleInit();
  void FrameBbox;
});
