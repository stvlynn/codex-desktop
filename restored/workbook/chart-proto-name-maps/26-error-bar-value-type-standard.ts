// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  An,
} from "../presentation-protobuf";

export const errorBarValueTypeStandardNameToProto = {
  standardError: An.ERROR_BAR_VALUE_TYPE_STANDARD_ERROR,
  percentage: An.ERROR_BAR_VALUE_TYPE_PERCENTAGE,
  standardDeviation: An.ERROR_BAR_VALUE_TYPE_STANDARD_DEVIATION,
} as const;

export const errorBarValueTypeStandardProtoToName = {
  [An.ERROR_BAR_VALUE_TYPE_STANDARD_ERROR]: "standardError",
  [An.ERROR_BAR_VALUE_TYPE_PERCENTAGE]: "percentage",
  [An.ERROR_BAR_VALUE_TYPE_STANDARD_DEVIATION]: "standardDeviation",
  [An.ERROR_BAR_VALUE_TYPE_FIXED_VALUE]: undefined,
  [An.ERROR_BAR_VALUE_TYPE_CUSTOM]: undefined,
  [An.ERROR_BAR_VALUE_TYPE_UNSPECIFIED]: undefined,
  [An.UNRECOGNIZED]: undefined,
} as const;
