// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: CF cluster ensure (legacy wpe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { ensureWorkbookColorInit } from "../theme-color";
import { ensureThemeSchemeColorAliasesInit } from "../design-tokens";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { ensureIconSetCatalogInit } from "../icon-set";
import { ensureColorResolveInit } from "../color-resolve";
import { ConditionalFormatRule } from "./conditional-format-rule";
import { ConditionalFormattings } from "./conditional-formattings";
import { RangeConditionalFormats } from "./range-conditional-formats";

/** Legacy `wpe` — touch CF deps; Binding675 circular call omitted (calls us). */
export const ensureConditionalFormatInit = esmInit(() => {
  wr();
  ensureWorkbookColorInit();
  initAddressUtils();
  ensureThemeSchemeColorAliasesInit();
  ensureCssNamedColorsInit();
  ensureIconSetCatalogInit();
  ensureColorResolveInit();
  void ConditionalFormatRule;
  void ConditionalFormattings;
  void RangeConditionalFormats;
});
