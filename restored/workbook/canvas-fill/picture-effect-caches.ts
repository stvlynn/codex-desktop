// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
export let colorChangeBitmapCache: WeakMap<object, Map<string, unknown>>;
export let pictureEffectsBitmapCache: WeakMap<object, Map<string, unknown>>;
export let emptyPictureThemeMap: {
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
    lineStyleMap: {},
  };
});
