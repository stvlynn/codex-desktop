// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN feature-bag / date / formula constants.

import { getWorkbookCoreEnv } from "./runtime-env";

function envZ(): any {
  return getWorkbookCoreEnv().Z;
}

export function featureBagCheckboxType(): any {
  return envZ().FEATURE_PROPERTY_BAG_TYPE_CHECKBOX;
}
export function featureBagXfControlsType(): any {
  return envZ().FEATURE_PROPERTY_BAG_TYPE_XF_CONTROLS;
}
export function featureBagXfComplementType(): any {
  return envZ().FEATURE_PROPERTY_BAG_TYPE_XF_COMPLEMENT;
}
export function featureBagXfComplementsType(): any {
  return envZ().FEATURE_PROPERTY_BAG_TYPE_XF_COMPLEMENTS;
}

export const XF_COMPLEMENTS_MAPPER_EXT_REF = "XFComplementsMapperExtRef";
export const CELL_CONTROL = "CellControl";
export const XF_CONTROLS = "XFControls";
export const MAPPED_FEATURE_PROPERTY_BAGS = "MappedFeaturePropertyBags";

export const EXCEL_EPOCH_UTC_MS = Date.UTC(1899, 11, 30);
export const MS_PER_DAY = 86400000;
export const MS_PER_MINUTE = 60000;
export const EXCEL_CANONICAL_DATE = Symbol("excelCanonicalDate");

export const DATE_FORMULA_NAMES = [
  "DATE",
  "EDATE",
  "EOMONTH",
  "TODAY",
  "NOW",
  "TIME",
  "DATEVALUE",
  "TIMEVALUE",
  "WORKDAY",
  "WORKDAY.INTL",
  "NETWORKDAYS",
  "NETWORKDAYS.INTL",
] as const;

export const ISO_DATE_TIME_RE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;

export const TRACE_ERROR_TOKEN = "#TRACE!";
export const CIRC_ERROR_TOKEN = "#CIRC!";
