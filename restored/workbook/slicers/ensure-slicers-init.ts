// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-48: slicer ensure (legacy Tme/Eme drained half).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Slicer } from "./slicer";
import { Slicers } from "./slicers";

/** Touches Slicer class. Boundary Tme still runs Binding352 first. */
export const ensureSlicerInit = esmInit(() => {
  void Slicer;
});

/** Touches Slicers collection. Boundary Eme still runs Tme first. */
export const ensureSlicersInit = esmInit(() => {
  ensureSlicerInit();
  void Slicers;
});
