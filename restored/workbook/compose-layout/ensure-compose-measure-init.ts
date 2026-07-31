// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose measure/materialize ensure (legacy Binding1465).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
import { ensureTextStyleInit } from "../text-style";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import { ensureCaseTransformInit } from "./case-transform";
import { ensureWorkbookEt, ensureBinding412 } from "./boundary-hooks";
import { ensureComposeMeasureAInit } from "./compose-measure-a";
import { ensureComposeMeasureBInit } from "./compose-measure-b";
import { ensureComposeMeasureB2Init } from "./compose-measure-b2";
import { ensureComposeMeasureCInit } from "./compose-measure-c";
import { ensureComposeMeasureDInit } from "./compose-measure-d";

export const ensureComposeMeasureInit = esmInit(() => {
  Qt();
  wr();
  ensureTextStyleInit();
  ensureBinding412();
  ensureTextElementAutofitInit();
  ensureWorkbookEt();
  ensureCaseTransformInit();
  ensureComposeMeasureAInit();
  ensureComposeMeasureBInit();
  ensureComposeMeasureB2Init();
  ensureComposeMeasureCInit();
  ensureComposeMeasureDInit();
});
