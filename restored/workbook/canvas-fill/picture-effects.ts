// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

import {
  collectPictureEffects,
  pictureEffectsCacheKey,
} from "./picture-effect-normalize";
import {
  applyCachedColorChangeEffect,
  needsPictureColorPipeline,
  applyPictureColorModeEffects,
  applyPictureSourceOpacity,
} from "./picture-effect-pipeline";
import { pictureEffectsBitmapCache } from "./picture-effect-caches";
export function processPictureBitmapEffects(
  picIn2444: unknown,
  picIn2445: unknown = {},
) {
  let fillBind9712 = collectPictureEffects(picIn2445);
  if (picIn2444.width <= 0 || picIn2444.height <= 0)
    return {
      source: picIn2444,
      opacity: fillBind9712.alphaOpacity,
    };
  let fillBind9713 = picIn2444;
  if (
    (fillBind9712.colorChange &&
      (fillBind9713 = applyCachedColorChangeEffect(
        picIn2444,
        fillBind9712.colorChange,
      )),
    !needsPictureColorPipeline(fillBind9712))
  )
    return {
      source: fillBind9713,
      opacity: fillBind9712.alphaOpacity,
    };
  let fillBind9714 = pictureEffectsCacheKey(fillBind9712),
    fillBind9715 = pictureEffectsBitmapCache.get(picIn2444),
    fillBind9716 = fillBind9715?.get(fillBind9714);
  if (fillBind9716)
    return {
      source: fillBind9716,
      opacity: fillBind9712.alphaOpacity,
    };
  let fillBind9717 = new OffscreenCanvas(picIn2444.width, picIn2444.height),
    fillBind9718 = fillBind9717.getContext("2d");
  if (!fillBind9718)
    return {
      source: fillBind9713,
      opacity: fillBind9712.alphaOpacity,
    };
  fillBind9718.drawImage(fillBind9713, 0, 0);
  let fillBind9719 = fillBind9718.getImageData(
    0,
    0,
    picIn2444.width,
    picIn2444.height,
  );
  return (
    applyPictureColorModeEffects(fillBind9719.data, fillBind9712),
    fillBind9718.putImageData(fillBind9719, 0, 0),
    (fillBind9715 ??= new Map()),
    fillBind9715.set(fillBind9714, fillBind9717),
    pictureEffectsBitmapCache.set(picIn2444, fillBind9715),
    {
      source: fillBind9717,
      opacity: fillBind9712.alphaOpacity,
    }
  );
}
export function processPictureBitmapWithOpacity(
  picIn13038: unknown,
  picIn13039: unknown = {},
) {
  return applyPictureSourceOpacity(
    processPictureBitmapEffects(picIn13038, picIn13039),
    picIn13038.width,
    picIn13038.height,
  );
}
export { ensurePictureEffectCachesInit } from "./picture-effect-caches";
