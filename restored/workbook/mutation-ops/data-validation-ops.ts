// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-42: datavalidation.set builders (legacy Efe…Nfe).

import { I, F, N } from "../spreadsheet-protobuf";
import type { LooseBag } from "./types";

export function buildDataValidationSetOp(props: LooseBag) {
  let { sheet, record } = props;
  if (!record.sqref) return null;
  let opBind13497 = {
      rule: serializeDataValidationRule(record),
    },
    opBind13498 = serializeDataValidationPrompt(record);
  opBind13498 && (opBind13497.prompt = opBind13498);
  let opBind13499 = serializeDataValidationErrorAlert(record);
  return (
    opBind13499 && (opBind13497.errorAlert = opBind13499),
    record.allowBlank !== undefined &&
      (opBind13497.ignoreBlanks = record.allowBlank),
    record.showDropDown !== undefined &&
      (opBind13497.inCellDropDown = !record.showDropDown),
    {
      op: "datavalidation.set",
      target: {
        sheet,
        range: record.sqref,
      },
      props: opBind13497,
    }
  );
}
export function serializeDataValidationRule(props: LooseBag) {
  let opBind16212 = {
      type: mapDataValidationType(props.type),
    },
    opBind16213 = mapDataValidationOperator(props.operator);
  opBind16213 !== undefined && (opBind16212.operator = opBind16213);
  let opBind16214 = parseDataValidationListValues(props);
  return opBind16214
    ? ((opBind16212.values = opBind16214), opBind16212)
    : (props.formula1 !== undefined && (opBind16212.formula1 = props.formula1),
      props.formula2 !== undefined && (opBind16212.formula2 = props.formula2),
      opBind16212);
}
export function serializeDataValidationPrompt(props: LooseBag) {
  if (
    props.promptTitle === undefined &&
    props.promptMessage === undefined &&
    props.showInputMessage === undefined
  )
    return;
  let opBind14620 = {};
  return (
    props.promptTitle !== undefined && (opBind14620.title = props.promptTitle),
    props.promptMessage !== undefined &&
      (opBind14620.message = props.promptMessage),
    props.showInputMessage !== undefined &&
      (opBind14620.show = props.showInputMessage),
    opBind14620
  );
}
export function serializeDataValidationErrorAlert(opIn4034: LooseBag) {
  if (
    opIn4034.errorTitle === undefined &&
    opIn4034.errorMessage === undefined &&
    opIn4034.errorStyle === undefined &&
    opIn4034.showErrorMessage === undefined
  )
    return;
  let opBind12982 = {};
  opIn4034.errorTitle !== undefined &&
    (opBind12982.title = opIn4034.errorTitle);
  opIn4034.errorMessage !== undefined &&
    (opBind12982.message = opIn4034.errorMessage);
  let opBind12983 = mapDataValidationErrorStyle(opIn4034.errorStyle);
  return (
    opBind12983 !== undefined && (opBind12982.style = opBind12983),
    opIn4034.showErrorMessage !== undefined &&
      (opBind12982.show = opIn4034.showErrorMessage),
    opBind12982
  );
}
export function parseDataValidationListValues(props: LooseBag) {
  if (
    mapDataValidationType(props.type) !== "list" ||
    props.formula2 !== undefined
  )
    return;
  let opBind17409 = props.formula1?.trim();
  if (
    !opBind17409 ||
    opBind17409.length < 2 ||
    !opBind17409.startsWith('"') ||
    !opBind17409.endsWith('"')
  )
    return;
  let opBind17410 = opBind17409.slice(1, -1);
  return opBind17410 ? opBind17410.split(",") : [];
}
export function mapDataValidationType(opIn2956: unknown) {
  switch (opIn2956) {
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
    case I.DATA_VALIDATION_TYPE_NONE:
    case I.DATA_VALIDATION_TYPE_UNSPECIFIED:
    case I.UNRECOGNIZED:
    default:
      return "none";
  }
}
export function mapDataValidationOperator(opIn2704: unknown) {
  switch (opIn2704) {
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
export function mapDataValidationErrorStyle(opIn6301: unknown) {
  switch (opIn6301) {
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
