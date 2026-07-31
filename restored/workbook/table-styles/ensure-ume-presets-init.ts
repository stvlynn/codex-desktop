// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-70: Ume combined ensure (preset colors/templates/name maps).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensurePresetColorsInit } from "./preset-colors-impl";
import { ensurePresetTemplatesAInit } from "./preset-templates-a-impl";
import { ensurePresetTemplatesBInit } from "./preset-templates-b-impl";
import { ensureStyleNameMapsInit } from "./style-name-maps-impl";

/** Initialize full Ume preset catalog. */
export const ensureUmePresetsInit = esmInit(() => {
  ensurePresetColorsInit();
  ensurePresetTemplatesAInit();
  ensurePresetTemplatesBInit();
  ensureStyleNameMapsInit();
});

/** Legacy Ume. */
export const Ume = ensureUmePresetsInit;
