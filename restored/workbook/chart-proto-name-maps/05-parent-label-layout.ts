// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Gn, Bn as _presentationBn } from "../presentation-protobuf";

export const parentLabelLayoutProtoToName = {
  [Gn.PARENT_LABEL_LAYOUT_NONE]: "none",
  [Gn.PARENT_LABEL_LAYOUT_OVERLAPPING]: "overlapping",
  [Gn.PARENT_LABEL_LAYOUT_BANNER]: "banner",
  [Gn.PARENT_LABEL_LAYOUT_UNSPECIFIED]: undefined,
  [Gn.UNRECOGNIZED]: undefined,
} as const;

export const quartileMethodNameToProto = {
  inclusive: _presentationBn.QUARTILE_METHOD_INCLUSIVE,
  exclusive: _presentationBn.QUARTILE_METHOD_EXCLUSIVE,
} as const;
