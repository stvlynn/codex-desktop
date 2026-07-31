// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Google Slides unit/id helpers (legacy pJe).
// Stage-3 wave-71 cohesive google-slides-adapter impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { gsaH } from "./boundary-hooks";
import {
  oJe,
  sJe,
  cJe,
  lJe,
  uJe,
  fJe,
  workbookBinding1807,
  workbookBinding1808,
  workbookBinding1809,
  workbookBinding1810,
  workbookBinding1811,
  mJe,
  hJe,
  gJe,
  _Je,
  vJe,
  yJe,
  bJe,
  xJe,
} from "./adapter-slots";

/** Initialize EMU↔PT helpers + object-id sanitizer (legacy pJe). */
export const ensureGoogleSlidesUnitsInit = esmInit(() => {
  gsaH.workbookEt();
  fJe = /[^A-Za-z0-9_:-]/g;
  workbookBinding1807 = (gsaIn16602) => gsaIn16602 * gsaH.getPtPerEmu();
  workbookBinding1808 = (gsaIn16603) => gsaIn16603 / gsaH.getPtPerEmu();
  workbookBinding1809 = (gsaIn8863) => {
    if (!gsaIn8863) return;
    let workbookBinding19399 = gsaIn8863.magnitude;
    if (
      !(
        typeof workbookBinding19399 != "number" ||
        !Number.isFinite(workbookBinding19399)
      )
    )
      return gsaIn8863.unit === "PT"
        ? workbookBinding1808(workbookBinding19399)
        : gsaH.emuToPoints(workbookBinding19399);
  };
  workbookBinding1810 = (gsaIn8864) => {
    if (!gsaIn8864) return;
    let workbookBinding19400 = gsaIn8864.magnitude;
    if (
      !(
        typeof workbookBinding19400 != "number" ||
        !Number.isFinite(workbookBinding19400)
      )
    )
      return gsaIn8864.unit === "PT"
        ? workbookBinding19400
        : workbookBinding1807(gsaH.emuToPoints(workbookBinding19400));
  };
  workbookBinding1811 = (gsaIn5534) => {
    let workbookBinding15328 = gsaIn5534
      .filter((item) => !!item)
      .map((item) => String(item))
      .join("_")
      .replace(fJe, "_");
    return (
      /^[A-Za-z0-9_]/.test(workbookBinding15328) ||
        (workbookBinding15328 = `_${workbookBinding15328}`),
      workbookBinding15328.length < 5 &&
        (workbookBinding15328 = workbookBinding15328.padEnd(5, "_")),
      workbookBinding15328.length > 50 &&
        (workbookBinding15328 = workbookBinding15328.slice(0, 50)),
      workbookBinding15328
    );
  };
});

/** Legacy pJe. */
export const pJe = ensureGoogleSlidesUnitsInit;
