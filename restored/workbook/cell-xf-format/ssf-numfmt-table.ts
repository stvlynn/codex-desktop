// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: SSF builtin numFmt table + spreadsheetML color-space opts (legacy Binding572–577).

import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import workbookSsf from "../../vendor/ssf";
import { wr } from "../presentation-protobuf";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { ensureThemeSchemeColorAliasesInit } from "../design-tokens";

export var ssfEsmModule,
  spreadsheetMlColorSpaceOpts,
  INDEXED_COLOR_PREFIX,
  ssfBuiltinNumFmtTable,
  excelCurrencyNumFmtOverrides,
  ensureCellXfSsfTableInit = esmInit(() => {
    wr();
    initAddressMetrics();
    ensureCssNamedColorsInit();
    ssfEsmModule = toEsm(workbookSsf);
    ensureThemeSchemeColorAliasesInit();
    spreadsheetMlColorSpaceOpts = {
      colorSpace: "spreadsheetml",
    };
    INDEXED_COLOR_PREFIX = "indexed:";
    ssfBuiltinNumFmtTable = ssfEsmModule.default.get_table();
    excelCurrencyNumFmtOverrides = {
      5: '"$"#,##0_);\\("$"#,##0\\)',
      6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
      7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
      8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
      41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
      42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
      43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
      44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
    };
  });
