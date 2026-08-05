// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: outer-shadow shape effects (legacy Kwe).
// Stage-3 wave-127.

import { resolveColorToCssRgba } from "../color-resolve";
import { workbookGt } from "../text-style";
import { polarOffsetFromDirection } from "../text-canvas";

export function resolveShapeEffects(sefIn4333: any, sefIn4334: any) {
  let sefBind13456 = sefIn4333.effects?.outerShadow;
  if (
    (!sefBind13456 &&
      sefIn4333.effectReference &&
      (sefBind13456 =
        sefIn4334.effectMap[sefIn4333.effectReference.index]?.outerShadow),
    !sefBind13456)
  )
    return;
  let sefBind13457 = sefBind13456.color
      ? resolveColorToCssRgba(sefBind13456.color, sefIn4334)
      : "transparent",
    sefBind13458 = sefBind13456.blurRadius
      ? sefBind13456.blurRadius * workbookGt
      : 0,
    sefBind13459 = sefBind13456.distance
      ? sefBind13456.distance * workbookGt
      : 0,
    sefBind13460 = polarOffsetFromDirection(
      sefBind13456.direction,
      sefBind13459,
    );
  return {
    color: sefBind13457 ?? "transparent",
    blur: sefBind13458,
    offsetX: sefBind13460.x,
    offsetY: sefBind13460.y,
  };
}

export const Kwe = resolveShapeEffects;
