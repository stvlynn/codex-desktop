// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: sparkline type name↔proto maps (legacy Binding811–812 / ensureSparklineTypeMapsInit).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Cn as spreadsheetCn,
  d,
  En as spreadsheetEn,
  Sn,
  Vn as ensureSpreadsheetProtoInit,
} from "../spreadsheet-protobuf";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import {
  ensureStableIdConstantsInit,
  bracedUuidUpper,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  normalizeA1Token,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import {
  buildSparklineSetOp,
  buildSparklineAddOp,
  buildSparklineSelector,
} from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import { sparklines } from "./sparkline-bindings";

export const ensureSparklineTypeMapsInit = esmInit(() => {
  ensureSpreadsheetProtoInit();
  sparklines.sparklineTypeNameToProto = {
    line: spreadsheetEn.SPARKLINE_TYPE_LINE,
    column: spreadsheetEn.SPARKLINE_TYPE_COLUMN,
    stacked: spreadsheetEn.SPARKLINE_TYPE_STACKED,
  };
  sparklines.sparklineTypeProtoToName = {
    [spreadsheetEn.SPARKLINE_TYPE_UNSPECIFIED]: undefined,
    [spreadsheetEn.SPARKLINE_TYPE_LINE]: "line",
    [spreadsheetEn.SPARKLINE_TYPE_COLUMN]: "column",
    [spreadsheetEn.SPARKLINE_TYPE_STACKED]: "stacked",
    [spreadsheetEn.UNRECOGNIZED]: undefined,
  };
});
