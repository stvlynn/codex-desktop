// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, Zn as colorTypeEnum, pr as pictureEffectTypeEnum } from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToRgba } from "../color-resolve";
function clampByteChannel(picIn13037) {
  return Math.max(0, Math.min(255, Math.round(picIn13037)));
}
function clampUnit01(picIn14145) {
  return Math.max(0, Math.min(1, picIn14145));
}
function fixedPointToUnit01(picIn14690, picIn14691) {
  return clampUnit01((picIn14690 ?? picIn14691) / 1e5);
}
function lumaByte202(picIn12712, picIn12713, picIn12714) {
  return picIn12714 * 29 + picIn12713 * 151 + picIn12712 * 76 >> 8 & 255;
}
function lumaByte77(picIn12658, picIn12659, picIn12660) {
  return picIn12660 * 28 + picIn12659 * 151 + picIn12658 * 77 >> 8 & 255;
}
function contrastMultiplierFromFixed(picIn9965) {
  let fillBind20480 = Math.max(-100, Math.min(100, (picIn9965 ?? 0) / 1e3));
  return fillBind20480 >= 0 ? 128 / (128 - 1.27 * fillBind20480) : (128 + 1.27 * fillBind20480) / 128;
}
function resolvePictureEffectColor(picIn10742, picIn10743) {
  return !picIn10742 || !picIn10743 && picIn10742.type === colorTypeEnum.COLOR_TYPE_SCHEME ? null : resolveColorToRgba(picIn10742, picIn10743 ?? emptyPictureThemeMap) ?? null;
}
function mimeTypeToColorTolerance(picIn5542) {
  switch (picIn5542?.split(";")[0]?.trim().toLowerCase()) {
    case "image/jpeg":
    case "image/jpg":
      return 15;
    case "image/png":
    case "image/tiff":
    case "image/tif":
      return 1;
    case "image/bmp":
    case "image/x-bmp":
    case "image/x-ms-bmp":
      return 0;
    default:
      return 9;
  }
}
function imageDataHasTransparency(props) {
  for (let fillBind22493 = 3; fillBind22493 < props.length; fillBind22493 += 4) if ((props[fillBind22493] ?? 255) !== 255) return true;
  return false;
}
function applyGrayscaleToImageData(props) {
  for (let fillBind20223 = 0; fillBind20223 < props.length; fillBind20223 += 4) {
    let fillBind21399 = lumaByte77(props[fillBind20223] ?? 0, props[fillBind20223 + 1] ?? 0, props[fillBind20223 + 2] ?? 0);
    props[fillBind20223] = fillBind21399;
    props[fillBind20223 + 1] = fillBind21399;
    props[fillBind20223 + 2] = fillBind21399;
  }
}
function applyLuminanceToImageData(picIn5731, picIn5732, picIn5733) {
  let fillBind15650 = (picIn5732 ?? 0) / 1e5 * 255,
    fillBind15651 = contrastMultiplierFromFixed(picIn5733),
    fillBind15652 = fillBind15650 / 2;
  for (let fillBind17951 = 0; fillBind17951 < picIn5731.length; fillBind17951 += 4) {
    picIn5731[fillBind17951] = clampByteChannel(((picIn5731[fillBind17951] ?? 0) + fillBind15652 - 128) * fillBind15651 + 128 + fillBind15652);
    picIn5731[fillBind17951 + 1] = clampByteChannel(((picIn5731[fillBind17951 + 1] ?? 0) + fillBind15652 - 128) * fillBind15651 + 128 + fillBind15652);
    picIn5731[fillBind17951 + 2] = clampByteChannel(((picIn5731[fillBind17951 + 2] ?? 0) + fillBind15652 - 128) * fillBind15651 + 128 + fillBind15652);
  }
}
function applyBiLevelToImageData(picIn7475, picIn7476) {
  let fillBind17952 = Math.floor(fixedPointToUnit01(picIn7476, 0) * 255);
  for (let fillBind19838 = 0; fillBind19838 < picIn7475.length; fillBind19838 += 4) {
    let fillBind20979 = lumaByte202(picIn7475[fillBind19838] ?? 0, picIn7475[fillBind19838 + 1] ?? 0, picIn7475[fillBind19838 + 2] ?? 0) < fillBind17952 ? 0 : 255;
    picIn7475[fillBind19838] = fillBind20979;
    picIn7475[fillBind19838 + 1] = fillBind20979;
    picIn7475[fillBind19838 + 2] = fillBind20979;
  }
}
function applyDuotoneToImageData(picIn4208, picIn4209, picIn4210) {
  if (!(!picIn4209 || !picIn4210)) for (let fillBind14210 = 0; fillBind14210 < picIn4208.length; fillBind14210 += 4) {
    let fillBind14959 = lumaByte202(picIn4208[fillBind14210] ?? 0, picIn4208[fillBind14210 + 1] ?? 0, picIn4208[fillBind14210 + 2] ?? 0);
    picIn4208[fillBind14210] = Math.floor(picIn4209.r * (255 - fillBind14959) / 255) + Math.floor(picIn4210.r * fillBind14959 / 255);
    picIn4208[fillBind14210 + 1] = Math.floor(picIn4209.g * (255 - fillBind14959) / 255) + Math.floor(picIn4210.g * fillBind14959 / 255);
    picIn4208[fillBind14210 + 2] = Math.floor(picIn4209.b * (255 - fillBind14959) / 255) + Math.floor(picIn4210.b * fillBind14959 / 255);
  }
}
function applyColorChangeToImageData(picIn5210, picIn5211, picIn5212, picIn5213, picIn5214) {
  if (!picIn5211 || !picIn5212) return;
  let fillBind14756 = clampByteChannel(picIn5212.a * 255),
    fillBind14757 = picIn5214 || fillBind14756 === 0 || fillBind14756 === 255;
  for (let fillBind17441 = 0; fillBind17441 < picIn5210.length; fillBind17441 += 4) Math.abs((picIn5210[fillBind17441] ?? 0) - picIn5211.r) > picIn5213 || Math.abs((picIn5210[fillBind17441 + 1] ?? 0) - picIn5211.g) > picIn5213 || Math.abs((picIn5210[fillBind17441 + 2] ?? 0) - picIn5211.b) > picIn5213 || (picIn5210[fillBind17441] = picIn5212.r, picIn5210[fillBind17441 + 1] = picIn5212.g, picIn5210[fillBind17441 + 2] = picIn5212.b, fillBind14757 && (picIn5210[fillBind17441 + 3] = fillBind14756));
}
function normalizePictureEffect(picIn1140, picIn1141) {
  switch (picIn1140.type) {
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX,
        amount: picIn1140.alphaModFix
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_LUMINANCE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_LUMINANCE,
        brightness: picIn1140.luminance?.brightness,
        contrast: picIn1140.luminance?.contrast
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_GRAYSCALE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_GRAYSCALE
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_DUOTONE:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_DUOTONE,
        darkColor: resolvePictureEffectColor(picIn1140.duotone?.darkColor, picIn1141.themeMap),
        lightColor: resolvePictureEffectColor(picIn1140.duotone?.lightColor, picIn1141.themeMap)
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL:
      return {
        type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL,
        threshold: picIn1140.biLevelThreshold
      };
    case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_COLOR_CHANGE:
      {
        let fillBind15839 = resolvePictureEffectColor(picIn1140.colorChange?.toColor, picIn1141.themeMap);
        return {
          type: pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_COLOR_CHANGE,
          fromColor: resolvePictureEffectColor(picIn1140.colorChange?.fromColor, picIn1141.themeMap),
          toColor: picIn1140.colorChange?.useAlpha === false && fillBind15839 ? {
            ...fillBind15839,
            a: 1
          } : fillBind15839,
          tolerance: mimeTypeToColorTolerance(picIn1141.contentType)
        };
      }
    default:
      return;
  }
}
function collectPictureEffects(picIn2385) {
  let fillBind9587 = picIn2385.pictureEffects ?? [],
    fillBind9588 = {
      alphaOpacity: 1
    };
  return fillBind9587.forEach(item => {
    let fillBind10688 = normalizePictureEffect(item, picIn2385);
    if (fillBind10688) switch (fillBind10688.type) {
      case pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX:
        fillBind9588.alphaOpacity = fixedPointToUnit01(fillBind10688.amount, 1e5);
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
  }), fillBind9588;
}
function rgbaCacheKey(picIn12974) {
  return picIn12974 ? `${picIn12974.r},${picIn12974.g},${picIn12974.b},${picIn12974.a}` : "none";
}
function colorChangeIsMeaningful(picIn7456) {
  return picIn7456.fromColor !== null && picIn7456.toColor !== null && (picIn7456.fromColor.r !== picIn7456.toColor.r || picIn7456.fromColor.g !== picIn7456.toColor.g || picIn7456.fromColor.b !== picIn7456.toColor.b || picIn7456.toColor.a < 1);
}
function colorChangeCacheKey(picIn12355) {
  return `${rgbaCacheKey(picIn12355.fromColor)}:${rgbaCacheKey(picIn12355.toColor)}:${picIn12355.tolerance}`;
}
function pictureEffectsCacheKey(picIn5143) {
  return `${picIn5143.colorChange ? colorChangeCacheKey(picIn5143.colorChange) : "none"}|${picIn5143.duotone ? `${rgbaCacheKey(picIn5143.duotone.darkColor)}:${rgbaCacheKey(picIn5143.duotone.lightColor)}` : "none"}|${picIn5143.colorMode ? `${picIn5143.colorMode.type}:${picIn5143.colorMode.type === pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL ? picIn5143.colorMode.threshold : ""}` : "none"}|${picIn5143.luminance ? `${picIn5143.luminance.brightness}:${picIn5143.luminance.contrast}` : "none"}`;
}
function duotoneHasColors(picIn13767) {
  return !!(picIn13767.darkColor && picIn13767.lightColor);
}
function luminanceIsActive(picIn12356) {
  return (picIn12356.brightness ?? 0) !== 0 || (picIn12356.contrast ?? 0) !== 0;
}
function applyCachedColorChangeEffect(picIn3871, picIn3872) {
  if (!colorChangeIsMeaningful(picIn3872)) return picIn3871;
  let fillBind12733 = colorChangeCacheKey(picIn3872),
    fillBind12734 = colorChangeBitmapCache.get(picIn3871),
    fillBind12735 = fillBind12734?.get(fillBind12733);
  if (fillBind12735) return fillBind12735;
  let fillBind12736 = new OffscreenCanvas(picIn3871.width, picIn3871.height),
    fillBind12737 = fillBind12736.getContext("2d");
  if (!fillBind12737) return picIn3871;
  fillBind12737.drawImage(picIn3871, 0, 0);
  let fillBind12738 = fillBind12737.getImageData(0, 0, picIn3871.width, picIn3871.height),
    {
      data
    } = fillBind12738;
  return applyColorChangeToImageData(data, picIn3872.fromColor, picIn3872.toColor, picIn3872.tolerance, imageDataHasTransparency(data)), fillBind12737.putImageData(fillBind12738, 0, 0), fillBind12734 ??= new Map(), fillBind12734.set(fillBind12733, fillBind12736), colorChangeBitmapCache.set(picIn3871, fillBind12734), fillBind12736;
}
function needsPictureColorPipeline(picIn10414) {
  return !!(picIn10414.duotone && duotoneHasColors(picIn10414.duotone) || picIn10414.colorMode || picIn10414.luminance && luminanceIsActive(picIn10414.luminance));
}
function applyPictureColorModeEffects(picIn5402, picIn5403) {
  picIn5403.duotone && duotoneHasColors(picIn5403.duotone) && applyDuotoneToImageData(picIn5402, picIn5403.duotone.darkColor, picIn5403.duotone.lightColor);
  picIn5403.colorMode?.type === pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL ? applyBiLevelToImageData(picIn5402, picIn5403.colorMode.threshold) : picIn5403.colorMode && applyGrayscaleToImageData(picIn5402);
  picIn5403.luminance && luminanceIsActive(picIn5403.luminance) && applyLuminanceToImageData(picIn5402, picIn5403.luminance.brightness, picIn5403.luminance.contrast);
}
function applyPictureSourceOpacity(picIn7097, picIn7098, picIn7099) {
  if (picIn7097.opacity === 1 || picIn7098 <= 0 || picIn7099 <= 0) return picIn7097.source;
  let fillBind17442 = new OffscreenCanvas(picIn7098, picIn7099),
    fillBind17443 = fillBind17442.getContext("2d");
  return fillBind17443 ? (fillBind17443.globalAlpha = picIn7097.opacity, fillBind17443.drawImage(picIn7097.source, 0, 0), fillBind17442) : picIn7097.source;
}
export function processPictureBitmapEffects(picIn2444: unknown, picIn2445: unknown = {}) {
  let fillBind9712 = collectPictureEffects(picIn2445);
  if (picIn2444.width <= 0 || picIn2444.height <= 0) return {
    source: picIn2444,
    opacity: fillBind9712.alphaOpacity
  };
  let fillBind9713 = picIn2444;
  if (fillBind9712.colorChange && (fillBind9713 = applyCachedColorChangeEffect(picIn2444, fillBind9712.colorChange)), !needsPictureColorPipeline(fillBind9712)) return {
    source: fillBind9713,
    opacity: fillBind9712.alphaOpacity
  };
  let fillBind9714 = pictureEffectsCacheKey(fillBind9712),
    fillBind9715 = pictureEffectsBitmapCache.get(picIn2444),
    fillBind9716 = fillBind9715?.get(fillBind9714);
  if (fillBind9716) return {
    source: fillBind9716,
    opacity: fillBind9712.alphaOpacity
  };
  let fillBind9717 = new OffscreenCanvas(picIn2444.width, picIn2444.height),
    fillBind9718 = fillBind9717.getContext("2d");
  if (!fillBind9718) return {
    source: fillBind9713,
    opacity: fillBind9712.alphaOpacity
  };
  fillBind9718.drawImage(fillBind9713, 0, 0);
  let fillBind9719 = fillBind9718.getImageData(0, 0, picIn2444.width, picIn2444.height);
  return applyPictureColorModeEffects(fillBind9719.data, fillBind9712), fillBind9718.putImageData(fillBind9719, 0, 0), fillBind9715 ??= new Map(), fillBind9715.set(fillBind9714, fillBind9717), pictureEffectsBitmapCache.set(picIn2444, fillBind9715), {
    source: fillBind9717,
    opacity: fillBind9712.alphaOpacity
  };
}
export function processPictureBitmapWithOpacity(picIn13038: unknown, picIn13039: unknown = {}) {
  return applyPictureSourceOpacity(processPictureBitmapEffects(picIn13038, picIn13039), picIn13038.width, picIn13038.height);
}
let colorChangeBitmapCache: WeakMap<object, Map<string, unknown>>;
let pictureEffectsBitmapCache: WeakMap<object, Map<string, unknown>>;
let emptyPictureThemeMap: {
  colorMap: Record<string, unknown>;
  effectMap: Record<string, unknown>;
  lineStyleMap: Record<string, unknown>;
};
export const ensurePictureEffectCachesInit = esmInit(() => {
    wr();
    ensureCssNamedColorsInit();
    colorChangeBitmapCache = new WeakMap();
    pictureEffectsBitmapCache = new WeakMap();
    emptyPictureThemeMap = {
      colorMap: {},
      effectMap: {},
      lineStyleMap: {}
    };
  });
