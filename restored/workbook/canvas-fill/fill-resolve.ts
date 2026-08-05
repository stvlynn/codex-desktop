// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture fill + canvas fillStyle resolve (legacy dle/gle/Binding543).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  wr,
  Zn as colorTypeEnum,
  tr as fillTypeEnum,
  nr as gradientKindEnum,
  dr as patternTypeEnum,
} from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  createLinearGradientFill,
  ensureLinearGradientFillInit,
} from "./linear-gradient-fill";
import {
  createRadialGradientFill,
  ensureRadialGradientFillInit,
} from "./radial-gradient-fill";
import {
  resolvePatternFillStyle,
  ensurePatternFillResolveInit,
} from "./pattern-fill-resolve";
import {
  processPictureBitmapWithOpacity,
  ensurePictureEffectCachesInit,
} from "./picture-effects";
function isAutoSystemColor(fillIn8673) {
  return fillIn8673
    ? fillIn8673.type === "system"
      ? fillIn8673.value === "auto" && !fillIn8673.lastColor
      : fillIn8673.type === colorTypeEnum.COLOR_TYPE_SYSTEM &&
        fillIn8673.value === "auto" &&
        !fillIn8673.lastColor
    : false;
}
function isUnspecifiedColor(fillIn11011) {
  return fillIn11011
    ? fillIn11011.type === "unspecified" ||
        fillIn11011.type === colorTypeEnum.COLOR_TYPE_UNSPECIFIED
    : true;
}
function isEmptyOrTransparentFill(fillIn4070) {
  if ("isSet" in fillIn4070 && !fillIn4070.isSet) return true;
  if (
    fillIn4070.type === fillTypeEnum.FILL_TYPE_PICTURE ||
    (fillIn4070.gradientStops?.length ?? 0) > 0
  )
    return false;
  let fillBind13043 =
      !isUnspecifiedColor(fillIn4070.color) &&
      !isAutoSystemColor(fillIn4070.color),
    fillBind13044 = fillIn4070.pattern?.color,
    fillBind13045 =
      !isUnspecifiedColor(fillBind13044) && !isAutoSystemColor(fillBind13044);
  if (fillBind13043 || fillBind13045) return false;
  let fillBind13046 =
    fillIn4070.pattern?.patternType ?? patternTypeEnum.PATTERN_TYPE_UNSPECIFIED;
  return (
    fillBind13046 === patternTypeEnum.PATTERN_TYPE_UNSPECIFIED ||
    fillBind13046 === patternTypeEnum.PATTERN_TYPE_NONE ||
    fillBind13046 === patternTypeEnum.PATTERN_TYPE_SOLID
  );
}
function gradientKindOf(fillIn15246) {
  return fillIn15246.gradientKind;
}
function isLinearGradientKind(fillIn9737) {
  return (
    fillIn9737 == null ||
    fillIn9737 === "linear" ||
    fillIn9737 === gradientKindEnum.GRADIENT_KIND_UNSPECIFIED ||
    fillIn9737 === gradientKindEnum.GRADIENT_KIND_LINEAR
  );
}
function fixedPointToFraction(fillIn15291) {
  return (fillIn15291 ?? 0) / 1e5;
}
function cropPictureBySrcRect(fillIn2697, fillIn2698, fillIn2699, fillIn2700) {
  let fillBind10267 = processPictureBitmapWithOpacity(fillIn2698, {
      pictureEffects: fillIn2697.pictureEffects,
      contentType: fillIn2700,
      themeMap: fillIn2699,
    }),
    fillBind10268 = fillIn2697.srcRect;
  if (!fillBind10268)
    return {
      source: fillBind10267,
      width: fillIn2698.width,
      height: fillIn2698.height,
    };
  let fillBind10269 = fixedPointToFraction(fillBind10268.l),
    fillBind10270 = fixedPointToFraction(fillBind10268.t),
    fillBind10271 = fixedPointToFraction(fillBind10268.r),
    fillBind10272 = fixedPointToFraction(fillBind10268.b),
    fillBind10273 = fillBind10269 * fillIn2698.width,
    fillBind10274 = fillBind10270 * fillIn2698.height,
    fillBind10275 = fillIn2698.width * (1 - fillBind10269 - fillBind10271),
    fillBind10276 = fillIn2698.height * (1 - fillBind10270 - fillBind10272),
    fillBind10277 = Math.max(1, Math.round(fillBind10275)),
    fillBind10278 = Math.max(1, Math.round(fillBind10276)),
    fillBind10279 = new OffscreenCanvas(fillBind10277, fillBind10278),
    fillBind10280 = fillBind10279.getContext("2d");
  return fillBind10280
    ? (fillBind10280.drawImage(
        fillBind10267,
        fillBind10273,
        fillBind10274,
        fillBind10275,
        fillBind10276,
        0,
        0,
        fillBind10277,
        fillBind10278,
      ),
      {
        source: fillBind10279,
        width: fillBind10277,
        height: fillBind10278,
      })
    : {
        source: fillBind10267,
        width: fillIn2698.width,
        height: fillIn2698.height,
      };
}
function applyStretchFillRect(fillIn6382, fillIn6383) {
  let fillBind16548 = fillIn6382.stretchFillRect;
  if (!fillBind16548) return fillIn6383;
  let fillBind16549 = fixedPointToFraction(fillBind16548.l),
    fillBind16550 = fixedPointToFraction(fillBind16548.t),
    fillBind16551 = fixedPointToFraction(fillBind16548.r),
    fillBind16552 = fixedPointToFraction(fillBind16548.b);
  return {
    x: fillIn6383.x + fillBind16549 * fillIn6383.width,
    y: fillIn6383.y + fillBind16550 * fillIn6383.height,
    width: fillIn6383.width * (1 - fillBind16549 - fillBind16551),
    height: fillIn6383.height * (1 - fillBind16550 - fillBind16552),
  };
}
function createPictureFillPattern(
  fillIn2068,
  fillIn2069,
  fillIn2070,
  fillIn2071,
  fillIn2072,
  fillIn2073,
) {
  let fillBind8957 = fillIn2070.imageReference?.id;
  if (!fillBind8957) return;
  let fillBind8958 = fillIn2071?.get(fillBind8957);
  if (!fillBind8958) return;
  let fillBind8959 = cropPictureBySrcRect(
      fillIn2070,
      fillBind8958.bitmap,
      fillIn2073,
      fillBind8958.contentType,
    ),
    fillBind8960 = applyStretchFillRect(fillIn2070, fillIn2069);
  if (fillBind8959.width <= 0 || fillBind8959.height <= 0) return;
  let fillBind8961 = fillIn2068.createPattern(fillBind8959.source, "no-repeat");
  if (fillBind8961) {
    if (fillIn2072 === "cover") {
      let fillBind15378 = Math.max(
          fillBind8960.width / fillBind8959.width,
          fillBind8960.height / fillBind8959.height,
        ),
        fillBind15379 = fillBind8959.width * fillBind15378,
        fillBind15380 = fillBind8959.height * fillBind15378;
      return (
        fillBind8961.setTransform({
          a: fillBind15378,
          b: 0,
          c: 0,
          d: fillBind15378,
          e: fillBind8960.x + (fillBind8960.width - fillBind15379) / 2,
          f: fillBind8960.y + (fillBind8960.height - fillBind15380) / 2,
        }),
        fillBind8961
      );
    }
    return (
      fillBind8961.setTransform({
        a: fillBind8960.width / fillBind8959.width,
        b: 0,
        c: 0,
        d: fillBind8960.height / fillBind8959.height,
        e: fillBind8960.x,
        f: fillBind8960.y,
      }),
      fillBind8961
    );
  }
}
export function resolveFillStyle(
  fillIn3306: unknown,
  fillIn3307: unknown,
  fillIn3308: unknown,
  fillIn3309: unknown,
  fillIn3310: unknown = "transparent",
) {
  let fillBind11592 =
      typeof fillIn3310 == "string"
        ? {
            defaultFill: fillIn3310,
          }
        : fillIn3310,
    fillBind11593 = fillBind11592.defaultFill ?? "transparent";
  if (!fillIn3308 || isEmptyOrTransparentFill(fillIn3308)) return fillBind11593;
  if (fillIn3308.type === fillTypeEnum.FILL_TYPE_PICTURE)
    return (
      createPictureFillPattern(
        fillIn3306,
        fillIn3307,
        fillIn3308,
        fillBind11592.pictureFillBitmaps,
        fillBind11592.pictureFillFit,
        fillIn3309,
      ) ?? fillBind11593
    );
  if (
    fillIn3308.type === fillTypeEnum.FILL_TYPE_GRADIENT &&
    fillIn3308.gradientStops?.length
  ) {
    let fillBind20337 = gradientKindOf(fillIn3308);
    if (isLinearGradientKind(fillBind20337))
      return createLinearGradientFill(
        fillIn3306,
        fillIn3307,
        fillIn3308,
        fillIn3309,
        fillBind11592,
      );
    if (
      fillBind20337 === "path" ||
      fillBind20337 === gradientKindEnum.GRADIENT_KIND_PATH
    )
      return createRadialGradientFill(
        fillIn3306,
        fillIn3307,
        fillIn3308,
        fillIn3309,
        fillBind11592,
      );
  }
  return fillIn3308.pattern
    ? resolvePatternFillStyle(
        fillIn3306,
        fillIn3307,
        fillIn3308,
        fillIn3309,
        fillBind11592,
      )
    : resolveColorToCssRgba(fillIn3308.color, fillIn3309, fillBind11592);
}
export const ensureFillResolveInit = esmInit(() => {
  wr();
  ensureCssNamedColorsInit();
  ensureLinearGradientFillInit();
  ensureRadialGradientFillInit();
  ensurePatternFillResolveInit();
  ensurePictureEffectCachesInit();
});
