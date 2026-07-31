// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-70: table-styles cluster ensure (legacy Binding687 + Nme…ahe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRegionNamesInit } from "./region-names-impl";
import { ensureUmePresetsInit } from "./ensure-ume-presets-init";
import { ensureTableStyleRegistryInit } from "./style-registry-impl";

/** Empty legacy touch (workbookBinding687). */
export const workbookBinding687 = esmInit(() => {});

/** Initialize the full Nme…ahe table-styles cluster. */
export const ensureTableStylesInit = esmInit(() => {
  workbookBinding687();
  ensureRegionNamesInit();
  ensureUmePresetsInit();
  ensureTableStyleRegistryInit();
});
