// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: object-fit cluster ensure (legacy mde).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  clampNumber,
  computeContainLayout,
  computeObjectFitRects,
  makePercentRect,
} from "./image-object-fit";

/** Legacy `mde` — touch clamp / percent-rect / object-fit helpers. */
export const ensureImageObjectFitInit = esmInit(() => {
  void clampNumber;
  void makePercentRect;
  void computeObjectFitRects;
  void computeContainLayout;
});
