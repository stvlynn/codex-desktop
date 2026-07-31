// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: rotation EMU scale ensure (legacy $x / Binding629).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureGeometryTransformDepsInit } from "./ensure-geometry-transform-deps-init";
import { EMU_PER_DEGREE } from "./rotation-units";

/** Exposed for parity with legacy Binding629 mutation (const after init). */
export let rotationEmuScale = EMU_PER_DEGREE;

/** Legacy `$x`. */
export const ensureRotationScaleInit = esmInit(() => {
  ensureGeometryTransformDepsInit();
  rotationEmuScale = EMU_PER_DEGREE;
});
