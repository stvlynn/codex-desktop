// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

import { pr as pictureEffectTypeEnum } from "../presentation-protobuf";
import {
  imageDataHasTransparency,
  applyGrayscaleToImageData,
  applyLuminanceToImageData,
  applyBiLevelToImageData,
  applyDuotoneToImageData,
  applyColorChangeToImageData,
} from "./picture-pixel-ops";
import {
  colorChangeIsMeaningful,
  colorChangeCacheKey,
  duotoneHasColors,
  luminanceIsActive,
} from "./picture-effect-normalize";
import { colorChangeBitmapCache } from "./picture-effect-caches";
export function applyCachedColorChangeEffect(
  picIn3871: unknown,
  picIn3872: unknown,
) {
  if (!colorChangeIsMeaningful(picIn3872)) return picIn3871;
  let fillBind12733 = colorChangeCacheKey(picIn3872),
    fillBind12734 = colorChangeBitmapCache.get(picIn3871),
    fillBind12735 = fillBind12734?.get(fillBind12733);
  if (fillBind12735) return fillBind12735;
  let fillBind12736 = new OffscreenCanvas(picIn3871.width, picIn3871.height),
    fillBind12737 = fillBind12736.getContext("2d");
  if (!fillBind12737) return picIn3871;
  fillBind12737.drawImage(picIn3871, 0, 0);
  let fillBind12738 = fillBind12737.getImageData(
      0,
      0,
      picIn3871.width,
      picIn3871.height,
    ),
    { data } = fillBind12738;
  return (
    applyColorChangeToImageData(
      data,
      picIn3872.fromColor,
      picIn3872.toColor,
      picIn3872.tolerance,
      imageDataHasTransparency(data),
    ),
    fillBind12737.putImageData(fillBind12738, 0, 0),
    (fillBind12734 ??= new Map()),
    fillBind12734.set(fillBind12733, fillBind12736),
    colorChangeBitmapCache.set(picIn3871, fillBind12734),
    fillBind12736
  );
}
export function needsPictureColorPipeline(picIn10414: unknown) {
  return !!(
    (picIn10414.duotone && duotoneHasColors(picIn10414.duotone)) ||
    picIn10414.colorMode ||
    (picIn10414.luminance && luminanceIsActive(picIn10414.luminance))
  );
}
export function applyPictureColorModeEffects(
  picIn5402: unknown,
  picIn5403: unknown,
) {
  picIn5403.duotone &&
    duotoneHasColors(picIn5403.duotone) &&
    applyDuotoneToImageData(
      picIn5402,
      picIn5403.duotone.darkColor,
      picIn5403.duotone.lightColor,
    );
  picIn5403.colorMode?.type ===
  pictureEffectTypeEnum.PICTURE_EFFECT_TYPE_BI_LEVEL
    ? applyBiLevelToImageData(picIn5402, picIn5403.colorMode.threshold)
    : picIn5403.colorMode && applyGrayscaleToImageData(picIn5402);
  picIn5403.luminance &&
    luminanceIsActive(picIn5403.luminance) &&
    applyLuminanceToImageData(
      picIn5402,
      picIn5403.luminance.brightness,
      picIn5403.luminance.contrast,
    );
}
export function applyPictureSourceOpacity(
  picIn7097: unknown,
  picIn7098: unknown,
  picIn7099: unknown,
) {
  if (picIn7097.opacity === 1 || picIn7098 <= 0 || picIn7099 <= 0)
    return picIn7097.source;
  let fillBind17442 = new OffscreenCanvas(picIn7098, picIn7099),
    fillBind17443 = fillBind17442.getContext("2d");
  return fillBind17443
    ? ((fillBind17443.globalAlpha = picIn7097.opacity),
      fillBind17443.drawImage(picIn7097.source, 0, 0),
      fillBind17442)
    : picIn7097.source;
}
