// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-71: google-slides-adapter cluster ensure (legacy SJe / dJe / pJe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureTextStyleInit } from "../text-style";
import { ensureWorkbookColorInit } from "../theme-color";
import { gsaH } from "./boundary-hooks";
import { GoogleSlidesAdapter } from "./adapter-class";
import { installAdapterMethodsPatch } from "./adapter-methods-patch";
import { installAdapterMethodsProto } from "./adapter-methods-proto";
import { ensurePresentationTemplatesInit } from "./templates-impl";
import { ensureGoogleSlidesUnitsInit } from "./units-impl";
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

void ensureTextStyleInit;
void ensureWorkbookColorInit;

/** Initialize Google Slides adapter maps + class (legacy SJe). */
export const ensureGoogleSlidesAdapterInit = esmInit(() => {
  gsaH.ensureZDollar();
  gsaH.ensureShapeInit();
  gsaH.ensureTextParagraphsInit();
  ensureTextStyleInit();
  ensureWorkbookColorInit();
  ensureGoogleSlidesUnitsInit();
  mJe = {
    textbox: "TEXT_BOX",
    rect: "RECTANGLE",
    roundRect: "ROUND_RECTANGLE",
    ellipse: "ELLIPSE",
  };
  hJe = {
    TEXT_BOX: "textbox",
    RECTANGLE: "rect",
    ROUND_RECTANGLE: "roundRect",
    ELLIPSE: "ellipse",
  };
  gJe = {
    accent1: "ACCENT1",
    accent2: "ACCENT2",
    accent3: "ACCENT3",
    accent4: "ACCENT4",
    accent5: "ACCENT5",
    accent6: "ACCENT6",
    bg1: "BACKGROUND1",
    bg2: "BACKGROUND2",
    tx1: "TEXT1",
    tx2: "TEXT2",
    dk1: "DARK1",
    dk2: "DARK2",
    lt1: "LIGHT1",
    lt2: "LIGHT2",
    hlink: "HYPERLINK",
    folHlink: "FOLLOWED_HYPERLINK",
  };
  _Je = {
    left: "START",
    center: "CENTER",
    right: "END",
    justify: "JUSTIFIED",
  };
  vJe = {
    top: "TOP",
    middle: "MIDDLE",
    bottom: "BOTTOM",
  };
  yJe = {
    none: "NONE",
    shrinkText: "TEXT_AUTOFIT",
    resizeShapeToFitText: "SHAPE_AUTOFIT",
  };
  installAdapterMethodsPatch(GoogleSlidesAdapter.prototype);
  installAdapterMethodsProto(GoogleSlidesAdapter.prototype);
  bJe = GoogleSlidesAdapter;
  xJe = (gsaIn9103) => {
    let workbookBinding19688 = workbookBinding1809(gsaIn9103.pageSize?.width),
      workbookBinding19689 = workbookBinding1809(gsaIn9103.pageSize?.height);
    if (
      !(
        workbookBinding19688 === undefined || workbookBinding19689 === undefined
      )
    )
      return {
        width: workbookBinding19688,
        height: workbookBinding19689,
      };
  };
});

/** Legacy SJe. */
export const SJe = ensureGoogleSlidesAdapterInit;

/** Initialize templates + units + adapter (full cluster). */
export const ensureGoogleSlidesClusterInit = esmInit(() => {
  ensurePresentationTemplatesInit();
  ensureGoogleSlidesUnitsInit();
  ensureGoogleSlidesAdapterInit();
});
