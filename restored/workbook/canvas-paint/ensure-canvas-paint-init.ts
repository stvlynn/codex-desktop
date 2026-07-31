// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: canvas-paint cluster ensure.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensurePaintEmuMapsInit } from "./paint-helpers-impl";
import { ensureCanvasPaintConstsInit } from "./paint-consts";

export const ensureCanvasPaintClusterInit = esmInit(() => {
  ensurePaintEmuMapsInit();
  ensureCanvasPaintConstsInit();
});
