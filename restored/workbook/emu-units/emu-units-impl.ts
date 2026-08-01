// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: EMU ↔ CSS-point converters (legacy workbookEt / of / workbookTt).
// Stage-3 wave-149.

import { esmInit } from "../../runtime/rolldown-runtime";
import { emuToPoints, pointsToEmu } from "../line/emu-units";

export let workbookBinding408 = 9525;
export let workbookBinding409 = 1 / workbookBinding408;
export let workbookBinding410 = 0.75;
/** Legacy `of` — EMU → CSS points. */
export let of = emuToPoints;
/** Legacy `workbookTt` — CSS points → EMU. */
export let workbookTt = pointsToEmu;

export const workbookEt = esmInit(() => {
  workbookBinding408 = 9525;
  workbookBinding409 = 1 / workbookBinding408;
  workbookBinding410 = 0.75;
  of = emuToPoints;
  workbookTt = pointsToEmu;
});

export const ensureWorkbookEtInit = workbookEt;
