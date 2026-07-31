// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: DrawingML / spreadsheet color transforms.

import {
  colorChannelMax,
  colorGamma,
  colorInvGamma,
} from "./color-transform-constants";
import { clampNumber, type RgbColor } from "./rgb-hex";

function rgbToHsl(
  colorCfg3670,
  colorCfg3671,
  colorCfg3672,
) {
  colorCfg3670 /= 255;
  colorCfg3671 /= 255;
  colorCfg3672 /= 255;
  let workbookBinding12282 = Math.max(
      colorCfg3670,
      colorCfg3671,
      colorCfg3672,
    ),
    workbookBinding12283 = Math.min(
      colorCfg3670,
      colorCfg3671,
      colorCfg3672,
    ),
    workbookBinding12284 = 0,
    workbookBinding12285 = 0,
    workbookBinding12286 = (workbookBinding12282 + workbookBinding12283) / 2;
  if (workbookBinding12282 !== workbookBinding12283) {
    let workbookBinding16145 = workbookBinding12282 - workbookBinding12283;
    switch (
      ((workbookBinding12285 =
        workbookBinding12286 > 0.5
          ? workbookBinding16145 /
            (2 - workbookBinding12282 - workbookBinding12283)
          : workbookBinding16145 /
            (workbookBinding12282 + workbookBinding12283)),
      workbookBinding12282)
    ) {
      case colorCfg3670:
        workbookBinding12284 =
          (colorCfg3671 - colorCfg3672) / workbookBinding16145 +
          (colorCfg3671 < colorCfg3672 ? 6 : 0);
        break;
      case colorCfg3671:
        workbookBinding12284 =
          (colorCfg3672 - colorCfg3670) / workbookBinding16145 + 2;
        break;
      default:
        workbookBinding12284 =
          (colorCfg3670 - colorCfg3671) / workbookBinding16145 + 4;
        break;
    }
    workbookBinding12284 /= 6;
  }
  return {
    h: workbookBinding12284,
    s: workbookBinding12285,
    l: workbookBinding12286,
  };
}
function hslToRgb(
  colorCfg3138,
  colorCfg3139,
  colorCfg3140,
) {
  let workbookBinding11260, workbookBinding11261, workbookBinding11262;
  if (colorCfg3139 === 0)
    workbookBinding11260 =
      workbookBinding11261 =
      workbookBinding11262 =
        colorCfg3140;
  else {
    let workbookBinding13847 = (
        colorCfg7021,
        colorCfg7022,
        colorCfg7023,
      ) => (
        colorCfg7023 < 0 && (colorCfg7023 += 1),
        colorCfg7023 > 1 && --colorCfg7023,
        colorCfg7023 < 0.16666666666666666
          ? colorCfg7021 +
            (colorCfg7022 - colorCfg7021) * 6 * colorCfg7023
          : colorCfg7023 < 0.5
            ? colorCfg7022
            : colorCfg7023 < 0.6666666666666666
              ? colorCfg7021 +
                (colorCfg7022 - colorCfg7021) *
                  (0.6666666666666666 - colorCfg7023) *
                  6
              : colorCfg7021
      ),
      workbookBinding13848 =
        colorCfg3140 < 0.5
          ? colorCfg3140 * (1 + colorCfg3139)
          : colorCfg3140 +
            colorCfg3139 -
            colorCfg3140 * colorCfg3139,
      workbookBinding13849 = 2 * colorCfg3140 - workbookBinding13848;
    workbookBinding11260 = workbookBinding13847(
      workbookBinding13849,
      workbookBinding13848,
      colorCfg3138 + 0.3333333333333333,
    );
    workbookBinding11261 = workbookBinding13847(
      workbookBinding13849,
      workbookBinding13848,
      colorCfg3138,
    );
    workbookBinding11262 = workbookBinding13847(
      workbookBinding13849,
      workbookBinding13848,
      colorCfg3138 - 0.3333333333333333,
    );
  }
  return {
    r: Math.round(workbookBinding11260 * 255),
    g: Math.round(workbookBinding11261 * 255),
    b: Math.round(workbookBinding11262 * 255),
  };
}
function applySatLumMods(colorCfg5761, colorCfg5762) {
  let workbookBinding15686 = rgbToHsl(
    colorCfg5761.r,
    colorCfg5761.g,
    colorCfg5761.b,
  );
  return (
    typeof colorCfg5762.satMod == "number" &&
      (workbookBinding15686.s = clampNumber(
        workbookBinding15686.s * (colorCfg5762.satMod / 1e5),
        0,
        1,
      )),
    typeof colorCfg5762.lumMod == "number" &&
      (workbookBinding15686.l = clampNumber(
        workbookBinding15686.l * (colorCfg5762.lumMod / 1e5),
        0,
        1,
      )),
    typeof colorCfg5762.lumOff == "number" &&
      (workbookBinding15686.l = clampNumber(
        workbookBinding15686.l + colorCfg5762.lumOff / 1e5,
        0,
        1,
      )),
    hslToRgb(
      workbookBinding15686.h,
      workbookBinding15686.s,
      workbookBinding15686.l,
    )
  );
}
function applyTintDrawingMl(colorCfg9517, colorCfg9518) {
  let workbookBinding20031 = clampNumber(colorCfg9518 / 1e5, -1, 1),
    workbookBinding20032 = (colorCfg14858) =>
      workbookBinding20031 >= 0
        ? colorCfg14858 + (255 - colorCfg14858) * workbookBinding20031
        : colorCfg14858 * (1 + workbookBinding20031);
  return {
    r: workbookBinding20032(colorCfg9517.r),
    g: workbookBinding20032(colorCfg9517.g),
    b: workbookBinding20032(colorCfg9517.b),
  };
}
function rgbChannelToLinear(colorCfg13207) {
  return Math.floor(
    (clampNumber(colorCfg13207, 0, 255) * colorChannelMax) / 255,
  );
}
function linearToRgbChannel(colorCfg13283) {
  return Math.floor(
    (clampNumber(colorCfg13283, 0, colorChannelMax) * 255) /
      colorChannelMax,
  );
}
function applyGamma(colorCfg12797, colorCfg12798) {
  return Math.round(
    (clampNumber(colorCfg12797, 0, colorChannelMax) /
      colorChannelMax) **
      +colorCfg12798 *
      colorChannelMax,
  );
}
function rgbToLinear(props) {
  return {
    r: applyGamma(rgbChannelToLinear(props.r), colorGamma),
    g: applyGamma(rgbChannelToLinear(props.g), colorGamma),
    b: applyGamma(rgbChannelToLinear(props.b), colorGamma),
  };
}
function linearToRgb(props) {
  return {
    r: linearToRgbChannel(applyGamma(props.r, colorInvGamma)),
    g: linearToRgbChannel(applyGamma(props.g, colorInvGamma)),
    b: linearToRgbChannel(applyGamma(props.b, colorInvGamma)),
  };
}
function applyShadeCrGb(colorCfg9060, colorCfg9061) {
  let workbookBinding19630 = clampNumber(
      colorCfg9061 / colorChannelMax,
      0,
      1,
    ),
    workbookBinding19631 = rgbToLinear(colorCfg9060);
  return linearToRgb({
    r: Math.floor(workbookBinding19631.r * workbookBinding19630),
    g: Math.floor(workbookBinding19631.g * workbookBinding19630),
    b: Math.floor(workbookBinding19631.b * workbookBinding19630),
  });
}
function applyTintCrGb(colorCfg8019, colorCfg8020) {
  let workbookBinding18512 = clampNumber(
      colorCfg8020 / colorChannelMax,
      0,
      1,
    ),
    workbookBinding18513 = rgbToLinear(colorCfg8019);
  return linearToRgb({
    r: Math.floor(
      colorChannelMax -
        (colorChannelMax - workbookBinding18513.r) * workbookBinding18512,
    ),
    g: Math.floor(
      colorChannelMax -
        (colorChannelMax - workbookBinding18513.g) * workbookBinding18512,
    ),
    b: Math.floor(
      colorChannelMax -
        (colorChannelMax - workbookBinding18513.b) * workbookBinding18512,
    ),
  });
}
function applyTintSpreadsheet(colorCfg6321, colorCfg6322) {
  let workbookBinding16442 = clampNumber(colorCfg6322 / 1e5, -1, 1),
    workbookBinding16443 = rgbToHsl(
      colorCfg6321.r,
      colorCfg6321.g,
      colorCfg6321.b,
    ),
    workbookBinding16444 = Math.round(workbookBinding16443.l * 255);
  return (
    (workbookBinding16444 = Math.round(
      workbookBinding16442 < 0
        ? workbookBinding16444 * (1 + workbookBinding16442)
        : workbookBinding16444 * (1 - workbookBinding16442) +
            (255 - Math.floor(255 * (1 - workbookBinding16442))),
    )),
    (workbookBinding16443.l = clampNumber(
      workbookBinding16444 / 255,
      0,
      1,
    )),
    hslToRgb(
      workbookBinding16443.h,
      workbookBinding16443.s,
      workbookBinding16443.l,
    )
  );
}
function applyShadeSpreadsheet(colorCfg15287, colorCfg15288) {
  return applyTintSpreadsheet(colorCfg15287, -colorCfg15288);
}
function applyShadeDrawingMl(colorCfg10236, colorCfg10237) {
  let workbookBinding20693 = clampNumber(colorCfg10237 / 1e5, 0, 1),
    workbookBinding20694 = rgbToHsl(
      colorCfg10236.r,
      colorCfg10236.g,
      colorCfg10236.b,
    );
  return (
    (workbookBinding20694.l = clampNumber(
      workbookBinding20694.l * workbookBinding20693,
      0,
      1,
    )),
    hslToRgb(
      workbookBinding20694.h,
      workbookBinding20694.s,
      workbookBinding20694.l,
    )
  );
}
export function applyColorTransform(
  rgb: RgbColor,
  transform: Record<string, number> | null | undefined,
  colorSpace: string = "drawingml",
): RgbColor {
  return applyColorTransformImpl(rgb, transform, colorSpace);
}
function applyColorTransformImpl(
  colorCfg1798: RgbColor,
  colorCfg1799: Record<string, number> | null | undefined,
  colorCfg1800 = "drawingml",
) {
  if (!colorCfg1799)
    return {
      r: clampNumber(Math.round(colorCfg1798.r), 0, 255),
      g: clampNumber(Math.round(colorCfg1798.g), 0, 255),
      b: clampNumber(Math.round(colorCfg1798.b), 0, 255),
    };
  let workbookBinding8325 = {
    ...colorCfg1798,
  };
  return (
    (typeof colorCfg1799.satMod == "number" ||
      typeof colorCfg1799.lumMod == "number" ||
      typeof colorCfg1799.lumOff == "number") &&
      (workbookBinding8325 = applySatLumMods(workbookBinding8325, colorCfg1799)),
    typeof colorCfg1799.tint == "number" &&
      (workbookBinding8325 =
        colorCfg1800 === "spreadsheetml"
          ? applyTintSpreadsheet(workbookBinding8325, colorCfg1799.tint)
          : colorCfg1800 === "drawingml-crgb"
            ? colorCfg1799.tint < 0
              ? applyShadeCrGb(
                  workbookBinding8325,
                  colorChannelMax + colorCfg1799.tint,
                )
              : applyTintCrGb(workbookBinding8325, colorCfg1799.tint)
            : applyTintDrawingMl(workbookBinding8325, colorCfg1799.tint)),
    typeof colorCfg1799.shade == "number" &&
      (workbookBinding8325 =
        colorCfg1800 === "spreadsheetml"
          ? applyShadeSpreadsheet(workbookBinding8325, colorCfg1799.shade)
          : colorCfg1800 === "drawingml-crgb"
            ? applyShadeCrGb(workbookBinding8325, colorCfg1799.shade)
            : applyShadeDrawingMl(workbookBinding8325, colorCfg1799.shade)),
    {
      r: clampNumber(Math.round(workbookBinding8325.r), 0, 255),
      g: clampNumber(Math.round(workbookBinding8325.g), 0, 255),
      b: clampNumber(Math.round(workbookBinding8325.b), 0, 255),
    }
  );
}

