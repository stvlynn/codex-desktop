// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: explicit-none / empty fill probe (legacy isExplicitNone fill check).

import { tr as fillTypeEnum } from "../presentation-protobuf";
export function isExplicitNoneFill(tcIn5838: unknown) {
  return tcIn5838
    ? "isExplicitNone" in tcIn5838
      ? tcIn5838.isExplicitNone
      : tcIn5838.type === fillTypeEnum.FILL_TYPE_UNSPECIFIED &&
        tcIn5838.color === undefined &&
        (tcIn5838.gradientStops?.length ?? 0) === 0 &&
        tcIn5838.pattern === undefined &&
        tcIn5838.imageReference === undefined &&
        tcIn5838.relId === undefined
    : false;
}
