// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: gradient kind name ↔ proto maps (legacy Binding413–415).

import { nr as gradientKindEnum } from "../presentation-protobuf";

export const defaultGradientKindName = "linear";

export const gradientKindProtoToName: Record<number, string | null> = {
  [gradientKindEnum.GRADIENT_KIND_LINEAR]: "linear",
  [gradientKindEnum.GRADIENT_KIND_PATH]: "path",
  [gradientKindEnum.GRADIENT_KIND_UNSPECIFIED]: null,
  [gradientKindEnum.UNRECOGNIZED]: null,
};

export const gradientKindNameToProto: Record<string, number> = {
  linear: gradientKindEnum.GRADIENT_KIND_LINEAR,
  path: gradientKindEnum.GRADIENT_KIND_PATH,
};
