// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Bn as _presentationBn } from "../presentation-protobuf";

export const quartileMethodProtoToName = {
  [_presentationBn.QUARTILE_METHOD_INCLUSIVE]: "inclusive",
  [_presentationBn.QUARTILE_METHOD_EXCLUSIVE]: "exclusive",
  [_presentationBn.QUARTILE_METHOD_UNSPECIFIED]: undefined,
  [_presentationBn.UNRECOGNIZED]: undefined,
} as const;
