// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: Fill proto/gradient helpers (legacy yae/bae/xae/emptyWorkbookColor).

import {
  tr as fillTypeEnum,
  nr as gradientKindEnum,
  rr as gradientPathTypeEnum,
} from "../presentation-protobuf";
import { WorkbookColor } from "../theme-color";
import {
  defaultGradientKindName,
  gradientKindNameToProto,
} from "./gradient-kind-maps";

export function resolveGradientKind(
  fillCfg9459: number,
  fillCfg9460: number | undefined,
): number | null {
  return fillCfg9459 === fillTypeEnum.FILL_TYPE_GRADIENT
    ? fillCfg9460 === undefined ||
      fillCfg9460 === gradientKindEnum.GRADIENT_KIND_UNSPECIFIED
      ? gradientKindNameToProto[defaultGradientKindName]
      : fillCfg9460
    : (fillCfg9460 ?? null);
}
export function normalizeGradientAngleDeg(
  fillCfg8915: number | undefined,
): number | null {
  if (fillCfg8915 === undefined) return null;
  if (!Number.isFinite(fillCfg8915))
    throw Error("Gradient angleDeg must be a finite number.");
  return ((fillCfg8915 % 360) + 360) % 360;
}
export function isExplicitNoneFillProto(
  fillCfg2694: Record<string, unknown> | null | undefined,
): boolean {
  if (!fillCfg2694 || fillCfg2694.type !== fillTypeEnum.FILL_TYPE_UNSPECIFIED)
    return false;
  let fillBind10258 = (fillCfg2694.gradientStops?.length ?? 0) > 0,
    fillBind10259 =
      fillCfg2694.color !== undefined ||
      fillCfg2694.pattern !== undefined ||
      fillCfg2694.relId !== undefined ||
      fillCfg2694.imageReference !== undefined ||
      fillCfg2694.alphaModFix !== undefined ||
      !!fillCfg2694.pictureEffects?.length ||
      fillCfg2694.stretchFillRect !== undefined ||
      fillCfg2694.fillRect !== undefined ||
      (fillCfg2694.pathType !== undefined &&
        fillCfg2694.pathType !==
          gradientPathTypeEnum.GRADIENT_PATH_TYPE_UNSPECIFIED) ||
      fillCfg2694.srcRect !== undefined ||
      fillCfg2694.tile !== undefined ||
      (fillCfg2694.gradientKind !== undefined &&
        fillCfg2694.gradientKind !==
          gradientKindEnum.GRADIENT_KIND_UNSPECIFIED) ||
      fillCfg2694.angleDeg !== undefined;
  return !fillBind10258 && !fillBind10259;
}
export function emptyWorkbookColor(): WorkbookColor {
  return new WorkbookColor({
    type: "proto",
    proto: undefined,
  });
}
