// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Tn,
} from "../presentation-protobuf";

export const crossesAutoNameToProto = {
  autoZero: Tn.CROSSES_AUTO_ZERO,
  min: Tn.CROSSES_MIN,
  max: Tn.CROSSES_MAX,
  at: Tn.CROSSES_AT,
} as const;

export const crossesAutoProtoToName = {
  [Tn.CROSSES_AUTO_ZERO]: "autoZero",
  [Tn.CROSSES_MIN]: "min",
  [Tn.CROSSES_MAX]: "max",
  [Tn.CROSSES_AT]: "at",
  [Tn.CROSSES_UNSPECIFIED]: undefined,
  [Tn.UNRECOGNIZED]: undefined,
} as const;
