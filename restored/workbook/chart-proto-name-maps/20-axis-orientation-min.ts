// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Mn as _presentationMn,
} from "../presentation-protobuf";

export const axisOrientationMinNameToProto = {
  minMax: _presentationMn.AXIS_ORIENTATION_MIN_MAX,
  maxMin: _presentationMn.AXIS_ORIENTATION_MAX_MIN,
} as const;

export const axisOrientationMinProtoToName = {
  [_presentationMn.AXIS_ORIENTATION_MIN_MAX]: "minMax",
  [_presentationMn.AXIS_ORIENTATION_MAX_MIN]: "maxMin",
  [_presentationMn.AXIS_ORIENTATION_UNSPECIFIED]: undefined,
  [_presentationMn.UNRECOGNIZED]: undefined,
} as const;
