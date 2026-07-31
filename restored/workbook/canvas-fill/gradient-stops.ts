// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: gradient stop blend + color-stop applicator (legacy Ace…L_).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToRgba } from "../color-resolve";
export function normalizeGradientStopOffset(gradIn12004: unknown, gradIn12005: unknown) {
  let fillBind22222 = gradIn12005 ? gradIn12004 : gradIn12004 / 1e5;
  return Math.min(1, Math.max(0, fillBind22222));
}
export function rgbaCssFromChannels(gradIn13466: unknown) {
  return `rgba(${gradIn13466.r},${gradIn13466.g},${gradIn13466.b},${gradIn13466.a})`;
}
export function lerpNumber(gradIn14685: unknown, gradIn14686: unknown, gradIn14687: unknown) {
  return gradIn14685 + (gradIn14686 - gradIn14685) * gradIn14687;
}
export function colorsHaveTransparency(gradIn14688: unknown, gradIn14689: unknown) {
  return gradIn14688.a < 1 || gradIn14689.a < 1;
}
export function blendRgba(gradIn8324: unknown, gradIn8325: unknown, gradIn8326: unknown) {
  let fillBind18829 = gradIn8326 + (gradIn8324.a - gradIn8325.a) * gradIn8326 * (1 - gradIn8326);
  return {
    r: gradIn8324.r + (gradIn8325.r - gradIn8324.r) * fillBind18829,
    g: gradIn8324.g + (gradIn8325.g - gradIn8324.g) * fillBind18829,
    b: gradIn8324.b + (gradIn8325.b - gradIn8324.b) * fillBind18829,
    a: lerpNumber(gradIn8324.a, gradIn8325.a, gradIn8326)
  };
}
export function applyGradientColorStops(gradIn2267: unknown, gradIn2268: unknown, gradIn2269: unknown, gradIn2270: unknown) {
  let fillBind9332 = [...gradIn2268].sort((gradIn15094, gradIn15095) => (gradIn15094.position ?? 0) - (gradIn15095.position ?? 0)),
    fillBind9333 = fillBind9332.every(item => Math.abs(item.position ?? 0) <= 1),
    fillBind9334 = fillBind9332.map(item => ({
      color: resolveColorToRgba(item.color, gradIn2269, gradIn2270) ?? {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      offset: normalizeGradientStopOffset(item.position ?? 0, fillBind9333)
    }));
  if (fillBind9334.length === 1) {
    gradIn2267.addColorStop(0, rgbaCssFromChannels(fillBind9334[0].color));
    return;
  }
  fillBind9334.forEach((item, index) => {
    if (index === 0) {
      gradIn2267.addColorStop(item.offset, rgbaCssFromChannels(item.color));
      return;
    }
    let fillBind13829 = fillBind9334[index - 1];
    if (item.offset > fillBind13829.offset && colorsHaveTransparency(fillBind13829.color, item.color)) for (let fillBind19089 = 1; fillBind19089 < GRADIENT_BLEND_STEPS; fillBind19089 += 1) {
      let fillBind20079 = fillBind19089 / GRADIENT_BLEND_STEPS;
      gradIn2267.addColorStop(fillBind13829.offset + (item.offset - fillBind13829.offset) * fillBind20079, rgbaCssFromChannels(blendRgba(fillBind13829.color, item.color, fillBind20079)));
    }
    gradIn2267.addColorStop(item.offset, rgbaCssFromChannels(item.color));
  });
}
export let GRADIENT_BLEND_STEPS: number;
export const ensureGradientBlendInit = esmInit(() => {
    ensureCssNamedColorsInit();
    GRADIENT_BLEND_STEPS = 16;
  });
