// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shape fill resolve (legacy Gwe).
// Stage-3 wave-128.

import { tr } from "../presentation-protobuf";
import { sfrH } from "./boundary-hooks";

export function resolveShapeFill(sfrIn4206: any, sfrIn4207: any) {
  if (sfrIn4206.fill && (!("isSet" in sfrIn4206.fill) || sfrIn4206.fill.isSet))
    return sfrIn4206.fill;
  if (sfrIn4206.connector) return;
  let sfrBind13258 = sfrIn4206.fillReference;
  if (
    !sfrBind13258 ||
    sfrBind13258.index === "0" ||
    sfrBind13258.index === "1000"
  )
    return;
  let sfrBind13259;
  if (
    (sfrIn4207.fillStyleMap &&
      (sfrBind13259 = sfrIn4207.fillStyleMap[sfrBind13258.index]),
    sfrBind13259)
  )
    return sfrH.resolveFillStyle(sfrBind13259, sfrBind13258.color);
  if (sfrBind13258.color)
    return {
      type: tr.FILL_TYPE_SOLID,
      color: sfrBind13258.color,
      gradientStops: [],
      pictureEffects: [],
    };
}

export const Gwe = resolveShapeFill;
