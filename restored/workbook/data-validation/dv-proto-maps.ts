// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: DV type/operator/errorStyle name→proto maps (legacy Lpe/Rpe/Binding664).

import { I, F, N } from "../spreadsheet-protobuf";

const DV_TYPE_NAME_TO_PROTO: Record<string, unknown> = {
  none: I.DATA_VALIDATION_TYPE_NONE,
  whole: I.DATA_VALIDATION_TYPE_WHOLE,
  decimal: I.DATA_VALIDATION_TYPE_DECIMAL,
  list: I.DATA_VALIDATION_TYPE_LIST,
  date: I.DATA_VALIDATION_TYPE_DATE,
  time: I.DATA_VALIDATION_TYPE_TIME,
  textLength: I.DATA_VALIDATION_TYPE_TEXT_LENGTH,
  custom: I.DATA_VALIDATION_TYPE_CUSTOM,
};

const DV_OPERATOR_NAME_TO_PROTO: Record<string, unknown> = {
  between: F.DATA_VALIDATION_OPERATOR_BETWEEN,
  notBetween: F.DATA_VALIDATION_OPERATOR_NOT_BETWEEN,
  equal: F.DATA_VALIDATION_OPERATOR_EQUAL,
  notEqual: F.DATA_VALIDATION_OPERATOR_NOT_EQUAL,
  lessThan: F.DATA_VALIDATION_OPERATOR_LESS_THAN,
  lessThanOrEqual: F.DATA_VALIDATION_OPERATOR_LESS_THAN_OR_EQUAL,
  greaterThan: F.DATA_VALIDATION_OPERATOR_GREATER_THAN,
  greaterThanOrEqual: F.DATA_VALIDATION_OPERATOR_GREATER_THAN_OR_EQUAL,
};

const DV_ERROR_STYLE_NAME_TO_PROTO: Record<string, unknown> = {
  stop: N.DATA_VALIDATION_ERROR_STYLE_STOP,
  warning: N.DATA_VALIDATION_ERROR_STYLE_WARNING,
  information: N.DATA_VALIDATION_ERROR_STYLE_INFORMATION,
};

export function dvTypeNameToProto(name: string): unknown {
  return DV_TYPE_NAME_TO_PROTO[name];
}

export function dvOperatorNameToProto(name: string): unknown {
  return DV_OPERATOR_NAME_TO_PROTO[name];
}

export function dvErrorStyleNameToProto(name: string): unknown {
  return DV_ERROR_STYLE_NAME_TO_PROTO[name];
}

export function dvTypeProtoMap(): Record<string, unknown> {
  return DV_TYPE_NAME_TO_PROTO;
}

export function dvOperatorProtoMap(): Record<string, unknown> {
  return DV_OPERATOR_NAME_TO_PROTO;
}

export function dvErrorStyleProtoMap(): Record<string, unknown> {
  return DV_ERROR_STYLE_NAME_TO_PROTO;
}
