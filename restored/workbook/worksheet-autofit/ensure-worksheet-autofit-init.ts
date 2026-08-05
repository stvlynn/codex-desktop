// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: worksheet autofit cluster ensure (legacy Rle).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, Qt } from "../presentation-protobuf";
import {
  initAddressMetrics,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";
import { ensureTextBoxClusterInit } from "../text-box";
import { ensureThemeSchemeColorAliasesInit } from "../design-tokens";
import {
  ensureCellXfSsfTableInit,
  ensureDefaultDigitWidthInit,
  ensureSsfFormatInit,
  ensureColRowExtentsInit,
  ensureStripFontFaceNameInit,
} from "../cell-xf-format";
import { ensureMergeCellTextStyleInit } from "./merge-cell-text-style";
import { ensureDropdownPaddingInit } from "./dropdown-padding";
export var ensureWorksheetAutofitInit = esmInit(() => {
  wr();
  Qt();
  ensureTextBoxClusterInit();
  ensureThemeSchemeColorAliasesInit();
  ensureCellXfSsfTableInit();
  ensureDefaultDigitWidthInit();
  ensureSsfFormatInit();
  ensureColRowExtentsInit();
  initAddressMetrics();
  initAddressUtils();
  ensureStripFontFaceNameInit();
  ensureMergeCellTextStyleInit();
  ensureDropdownPaddingInit();
});
