// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: cluster ensure for text-canvas polar offset + renderer.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureAngleUnitsInit } from "./polar-offset";
import { ensureTextCanvasRendererInit } from "./ensure-text-canvas-renderer-init";

/** Touch the text-canvas dependency cluster once. */
export const ensureTextCanvasClusterInit = esmInit(() => {
  ensureAngleUnitsInit();
  ensureTextCanvasRendererInit();
});
