// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

import {
  Zn as colorTypeEnum,
  pr as pictureEffectTypeEnum,
} from "../presentation-protobuf";
import { resolveColorToRgba } from "../color-resolve";
import {
  fixedPointToUnit01,
  mimeTypeToColorTolerance,
} from "./picture-pixel-ops";
import { emptyPictureThemeMap } from "./picture-effect-caches";
function resolvePictureEffectColor(picIn10742, picIn10743) {
  return !picIn10742 ||
    (!picIn10743 && picIn10742.type === colorTypeEnum.COLOR_TYPE_SCHEME)
    ? null
    : (resolveColorToRgba(picIn10742, picIn10743 ?? emptyPictureThemeMap) ??
        null);
}
function normalizePictureEffect(picIn1140, picIn1141) {
  switch (picIn1140.type) {
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX,
        amount: picIn1140.alphaModFix,
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_LUMINANCE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_LUMINANCE,
        brightness: picIn1140.luminance?.brightness,
        contrast: picIn1140.luminance?.contrast,
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_GRAYSCALE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_GRAYSCALE,
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_DUOTONE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_DUOTONE,
        darkColor: resolvePictureEffectColor(
          picIn1140.duotone?.darkColor,
          picIn1141.themeMap,
        ),
        lightColor: resolvePictureEffectColor(
          picIn1140.duotone?.lightColor,
          picIn1141.themeMap,
        ),
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL,
        threshold: picIn1140.biLevelThreshold,
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_COLOR_CHANGE: {
      let fillBind15839 = resolvePictureEffectColor(
        picIn1140.colorChange?.toColor,
        picIn1141.themeMap,
      );
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_COLOR_CHANGE,
        fromColor: resolvePictureEffectColor(
          picIn1140.colorChange?.fromColor,
          picIn1141.themeMap,
        ),
        toColor:
          picIn1140.colorChange?.useAlpha === false && fillBind15839
            ? {
                ...fillBind15839,
                a: 1,
              }
            : fillBind15839,
        tolerance: mimeTypeToColorTolerance(picIn1141.contentType),
      };
    }
    default:
      return;
  }
}
export function collectPictureEffects(picIn2385: unknown) {
  let fillBind9587 = picIn2385.pictureEffects ?? [],
    fillBind9588 = {
      alphaOpacity: 1,
    };
  return (
    fillBind9587.forEach((item) => {
      let fillBind10688 = normalizePictureEffect(item, picIn2385);
      if (fillBind10688)
        switch (fillBind10688.type) {
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX:
            fillBind9588.alphaOpacity = fixedPointToUnit01(
              fillBind10688.amount,
              1e5,
            );
            break;
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_COLOR_CHANGE:
            fillBind9588.colorChange = fillBind10688;
            break;
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_DUOTONE:
            fillBind9588.duotone = fillBind10688;
            break;
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL:
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_GRAYSCALE:
            fillBind9588.colorMode = fillBind10688;
            break;
          case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_LUMINANCE:
            fillBind9588.luminance = fillBind10688;
            break;
        }
    }),
    fillBind9588
  );
}
function rgbaCacheKey(picIn12974) {
  return picIn12974
    ? `${picIn12974.r},${picIn12974.g},${picIn12974.b},${picIn12974.a}`
    : "none";
}
export function colorChangeIsMeaningful(picIn7456: unknown) {
  return (
    picIn7456.fromColor !== null &&
    picIn7456.toColor !== null &&
    (picIn7456.fromColor.r !== picIn7456.toColor.r ||
      picIn7456.fromColor.g !== picIn7456.toColor.g ||
      picIn7456.fromColor.b !== picIn7456.toColor.b ||
      picIn7456.toColor.a < 1)
  );
}
export function colorChangeCacheKey(picIn12355: unknown) {
  return `${rgbaCacheKey(picIn12355.fromColor)}:${rgbaCacheKey(picIn12355.toColor)}:${picIn12355.tolerance}`;
}
export function pictureEffectsCacheKey(picIn5143: unknown) {
  return `${picIn5143.colorChange ? colorChangeCacheKey(picIn5143.colorChange) : "none"}|${picIn5143.duotone ? `${rgbaCacheKey(picIn5143.duotone.darkColor)}:${rgbaCacheKey(picIn5143.duotone.lightColor)}` : "none"}|${picIn5143.colorMode ? `${picIn5143.colorMode.type}:${picIn5143.colorMode.type === pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL ? picIn5143.colorMode.threshold : ""}` : "none"}|${picIn5143.luminance ? `${picIn5143.luminance.brightness}:${picIn5143.luminance.contrast}` : "none"}`;
}
export function duotoneHasColors(picIn13767: unknown) {
  return !!(picIn13767.darkColor && picIn13767.lightColor);
}
export function luminanceIsActive(picIn12356: unknown) {
  return (picIn12356.brightness ?? 0) !== 0 || (picIn12356.contrast ?? 0) !== 0;
}
