// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: data-validation record builders (legacy Tpe…recordDvSetOp).

import { I, F, N } from "../spreadsheet-protobuf";
import {
  parseSheetRef,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import { buildDataValidationSetOp } from "../mutation-ops";
import {
  dvTypeProtoMap,
  dvOperatorProtoMap,
  dvErrorStyleProtoMap,
} from "./dv-proto-maps";

export function buildDataValidationRecord(dvIn6283: unknown, dvIn6284: unknown, dvIn6285: unknown) {
  let dvBind16392 = {
    sqref: resolveDvSqref(dvIn6283, dvIn6284),
  };
  return (
    applyDvRuleFields(dvBind16392, dvIn6285.rule),
    applyDvPromptFields(dvBind16392, dvIn6285.prompt),
    applyDvErrorAlertFields(dvBind16392, dvIn6285.errorAlert),
    dvIn6285.ignoreBlanks !== undefined &&
      (dvBind16392.allowBlank = !!dvIn6285.ignoreBlanks),
    dvIn6285.inCellDropDown !== undefined &&
      (dvBind16392.showDropDown = !dvIn6285.inCellDropDown),
    dvBind16392
  );
}
export function applyDvRuleFields(dvIn8714: unknown, dvIn8715: unknown) {
  dvIn8714.type = dvTypeProtoMap()[dvIn8715.type];
  dvIn8714.operator = dvIn8715.operator
    ? dvOperatorProtoMap()[dvIn8715.operator]
    : undefined;
  let dvBind19222 = listValuesJoin(dvIn8715);
  dvIn8714.formula1 = dvBind19222.formula1;
  dvIn8714.formula2 = dvBind19222.formula2;
}
export function applyDvPromptFields(dvIn9491: unknown, dvIn9492: unknown) {
  dvIn9492 &&
    ((dvIn9491.promptTitle = dvIn9492.title ?? undefined),
    (dvIn9491.promptMessage = dvIn9492.message ?? undefined),
    (dvIn9491.showInputMessage = dvIn9492.show ?? true));
}
export function applyDvErrorAlertFields(dvIn8211: unknown, dvIn8212: unknown) {
  dvIn8212 &&
    ((dvIn8211.errorTitle = dvIn8212.title ?? undefined),
    (dvIn8211.errorMessage = dvIn8212.message ?? undefined),
    (dvIn8211.showErrorMessage = dvIn8212.show ?? true),
    dvIn8212.style &&
      (dvIn8211.errorStyle = dvErrorStyleProtoMap()[dvIn8212.style]));
}
export function listValuesJoin(dvIn8511: unknown) {
  return dvIn8511.type === "list" &&
    dvIn8511.values &&
    dvIn8511.values.length > 0
    ? {
        formula1: `"${dvIn8511.values.join(",")}"`,
      }
    : {
        formula1: isBlankish(dvIn8511.formula1),
        formula2: isBlankish(dvIn8511.formula2),
      };
}
export function isBlankish(props: unknown) {
  if (props == null) return;
  if (typeof props == "number") return String(props);
  let dvBind20117 = props.trim();
  return dvBind20117.startsWith("=") ? dvBind20117.slice(1) : dvBind20117;
}
export function resolveDvSqref(dvIn6563: unknown, dvIn6564: unknown) {
  let { sheetName, ref } = parseSheetRef(dvIn6564);
  if (sheetName && sheetName !== dvIn6563.name)
    throw Error(
      `Data validation range must target "${dvIn6563.name}", received "${sheetName}".`,
    );
  let dvBind16822 = parseA1Range(ref);
  if (!dvBind16822) throw Error(`Invalid range address: ${dvIn6564}`);
  return dvBind16822.ref;
}
export function parseDvListValues(dvIn7758: unknown) {
  if (!dvIn7758) return;
  let dvBind18244 = dvIn7758.trim();
  if (
    !(
      dvBind18244.length < 2 ||
      !dvBind18244.startsWith('"') ||
      !dvBind18244.endsWith('"')
    )
  )
    return dvBind18244
      .slice(1, -1)
      .split(",")
      .map((item) => item.replaceAll('""', '"'));
}
export function boundsContains(dvIn9587: unknown, dvIn9588: unknown) {
  return (
    dvIn9587.startRow <= dvIn9588.startRow &&
    dvIn9587.startCol <= dvIn9588.startCol &&
    dvIn9587.endRow >= dvIn9588.endRow &&
    dvIn9587.endCol >= dvIn9588.endCol
  );
}
export function boundsArea(props: unknown) {
  return (
    (props.endRow - props.startRow + 1) * (props.endCol - props.startCol + 1)
  );
}
export function dvTypeProtoToName(dvIn3184: unknown) {
  switch (dvIn3184) {
    case I.DATA_VALIDATION_TYPE_NONE:
      return "none";
    case I.DATA_VALIDATION_TYPE_WHOLE:
      return "whole";
    case I.DATA_VALIDATION_TYPE_DECIMAL:
      return "decimal";
    case I.DATA_VALIDATION_TYPE_LIST:
      return "list";
    case I.DATA_VALIDATION_TYPE_DATE:
      return "date";
    case I.DATA_VALIDATION_TYPE_TIME:
      return "time";
    case I.DATA_VALIDATION_TYPE_TEXT_LENGTH:
      return "textLength";
    case I.DATA_VALIDATION_TYPE_CUSTOM:
      return "custom";
    default:
      return "custom";
  }
}
export function dvOperatorProtoToName(dvIn2705: unknown) {
  switch (dvIn2705) {
    case F.DATA_VALIDATION_OPERATOR_BETWEEN:
      return "between";
    case F.DATA_VALIDATION_OPERATOR_NOT_BETWEEN:
      return "notBetween";
    case F.DATA_VALIDATION_OPERATOR_EQUAL:
      return "equal";
    case F.DATA_VALIDATION_OPERATOR_NOT_EQUAL:
      return "notEqual";
    case F.DATA_VALIDATION_OPERATOR_LESS_THAN:
      return "lessThan";
    case F.DATA_VALIDATION_OPERATOR_LESS_THAN_OR_EQUAL:
      return "lessThanOrEqual";
    case F.DATA_VALIDATION_OPERATOR_GREATER_THAN:
      return "greaterThan";
    case F.DATA_VALIDATION_OPERATOR_GREATER_THAN_OR_EQUAL:
      return "greaterThanOrEqual";
    default:
      return;
  }
}
export function dvErrorStyleProtoToName(dvIn6302: unknown) {
  switch (dvIn6302) {
    case N.DATA_VALIDATION_ERROR_STYLE_STOP:
      return "stop";
    case N.DATA_VALIDATION_ERROR_STYLE_WARNING:
      return "warning";
    case N.DATA_VALIDATION_ERROR_STYLE_INFORMATION:
      return "information";
    default:
      return;
  }
}
export function recordDvSetOp(dvIn6691: unknown, dvIn6692: unknown) {
  dvIn6691.__invalidateViewportLayout();
  dvIn6691.__queueCollaborativePublish();
  let dvBind16983 = dvIn6691.workbook.getRecorder();
  !dvBind16983 ||
    !dvIn6692.sqref ||
    dvBind16983.deferOnce(
      `datavalidation.set:${dvIn6691.name}:${dvIn6692.sqref}`,
      () =>
        buildDataValidationSetOp({
          sheet: dvIn6691.name,
          record: dvIn6692,
        }),
    );
}
