// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: pattern-type → tiled canvas fillStyle resolve (legacy zce…Wce/Gce).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, dr as patternTypeEnum } from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  patternTilePainters,
  ensurePatternTilePaintersInit,
} from "./pattern-tile-painters";
function patternTypeOf(resIn13151) {
  return resIn13151?.patternType ?? patternTypeEnum.PATTERN_TYPE_SOLID;
}
function patternForegroundColorOf(resIn15595) {
  return resIn15595?.color;
}
function devicePixelRatioOrOne() {
  let fillBind20947 = globalThis.devicePixelRatio;
  return typeof fillBind20947 == "number" &&
    Number.isFinite(fillBind20947) &&
    fillBind20947 > 0
    ? fillBind20947
    : 1;
}
function patternTileCacheKey(
  resIn13216,
  resIn13217,
  resIn13218,
  resIn13219,
  resIn13220,
) {
  return [resIn13216, resIn13217, resIn13218, resIn13219, resIn13220].join("|");
}
function createOffscreenPatternTile(resIn9339, resIn9340) {
  if (typeof OffscreenCanvas < "u")
    return new OffscreenCanvas(resIn9339, resIn9340);
  throw Error("OffscreenCanvas API not available for pattern tiles.");
}
function paintPatternTileCanvas(
  resIn8504,
  resIn8505,
  resIn8506,
  resIn8507,
  resIn8508,
) {
  let fillBind19016 = createOffscreenPatternTile(2 * resIn8507, 2 * resIn8507),
    fillBind19017 = fillBind19016.getContext("2d");
  if (fillBind19017) {
    fillBind19017.imageSmoothingEnabled = false;
    let fillBind22377 = patternTilePainters[resIn8504];
    fillBind22377?.(fillBind19017, resIn8505, resIn8506, resIn8507, resIn8508);
  }
  return fillBind19016;
}
export function resolvePatternFillStyle(
  resIn481: unknown,
  resIn482: unknown,
  resIn483: unknown,
  resIn484: unknown,
  resIn485: unknown,
) {
  let fillBind4111 = resIn485?.dpr ?? devicePixelRatioOrOne(),
    fillBind4112 =
      typeof resIn481.getTransform == "function"
        ? resIn481.getTransform()
        : null,
    fillBind4113 = fillBind4112
      ? Math.hypot(fillBind4112.a, fillBind4112.b)
      : 1,
    fillBind4114 = fillBind4112
      ? Math.hypot(fillBind4112.c, fillBind4112.d)
      : 1,
    fillBind4115 =
      fillBind4111 *
      Math.max(1, Math.min(8, Math.ceil(Math.max(fillBind4113, fillBind4114)))),
    fillBind4116 = resolveColorToCssRgba(resIn483.color, resIn484, {
      colorSpace: resIn485?.colorSpace,
      defaultFill: "#ffffff",
    }),
    fillBind4117 = resolveColorToCssRgba(
      patternForegroundColorOf(resIn483.pattern),
      resIn484,
      {
        colorSpace: resIn485?.colorSpace,
        defaultFill: fillBind4116,
      },
    ),
    fillBind4118 = patternTypeOf(resIn483.pattern);
  if (fillBind4118 === patternTypeEnum.PATTERN_TYPE_NONE) return "transparent";
  if (
    fillBind4118 === patternTypeEnum.PATTERN_TYPE_SOLID ||
    fillBind4118 === patternTypeEnum.PATTERN_TYPE_UNSPECIFIED
  )
    return fillBind4117;
  let fillBind4119 = patternTypePainterConfig[fillBind4118] ?? {
      id: "grid",
      scale: 1,
      extraAngle: 0,
    },
    fillBind4120 =
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DOWNWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_UPWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_WIDE_UPWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DASHED_UPWARD_DIAGONAL ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DIAGONAL_CROSS ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DARK_DOWN ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_DARK_UP ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_LIGHT_DOWN ||
      fillBind4118 === patternTypeEnum.PATTERN_TYPE_LIGHT_UP
        ? 3
        : 4,
    fillBind4121 = Math.max(
      fillBind4120,
      Math.round(6 * (resIn485?.scale ?? fillBind4119.scale ?? 1)),
    ),
    fillBind4122 = fillBind4121 * fillBind4115,
    fillBind4123 = fillBind4119.id ?? "grid",
    fillBind4124 = patternTileCacheKey(
      fillBind4123,
      fillBind4117,
      fillBind4116,
      fillBind4121,
      fillBind4115,
    ),
    fillBind4125 = patternTileCache.get(fillBind4124);
  fillBind4125 ||
    ((fillBind4125 = paintPatternTileCanvas(
      fillBind4123,
      fillBind4117,
      fillBind4116,
      fillBind4122,
      fillBind4115,
    )),
    patternTileCache.set(fillBind4124, fillBind4125));
  let fillBind4126 = (resIn485?.angleDeg ?? 0) + (fillBind4119.extraAngle ?? 0),
    fillBind4127 = resIn485?.anchor ?? "object",
    fillBind4128 =
      resIn485?.anchorX ??
      (fillBind4127 === "object" ? resIn482.x + resIn482.width / 2 : 0),
    fillBind4129 =
      resIn485?.anchorY ??
      (fillBind4127 === "object" ? resIn482.y + resIn482.height / 2 : 0),
    fillBind4130 = resIn481.createPattern(fillBind4125, "repeat");
  if (typeof fillBind4130.setTransform == "function") {
    let fillBind16542 = fillBind4125.width / fillBind4115,
      fillBind16543 = fillBind4125.height / fillBind4115,
      fillBind16544 =
        (((fillBind4128 - fillBind16542 / 2) % fillBind16542) + fillBind16542) %
        fillBind16542,
      fillBind16545 =
        (((fillBind4129 - fillBind16543 / 2) % fillBind16543) + fillBind16543) %
        fillBind16543,
      fillBind16546 = fillBind4126,
      fillBind16547 = new DOMMatrix()
        .translate(fillBind16544, fillBind16545)
        .rotate(fillBind16546)
        .scale(1 / fillBind4115, 1 / fillBind4115);
    return (fillBind4130.setTransform(fillBind16547), fillBind4130);
  }
  let fillBind4131 = fillBind4125.width / fillBind4115,
    fillBind4132 = fillBind4125.height / fillBind4115,
    fillBind4133 =
      (((fillBind4128 - fillBind4131 / 2) % fillBind4131) + fillBind4131) %
      fillBind4131,
    fillBind4134 =
      (((fillBind4129 - fillBind4132 / 2) % fillBind4132) + fillBind4132) %
      fillBind4132,
    fillBind4135 = fillBind4125.width,
    fillBind4136 = fillBind4125.height,
    fillBind4137 = createOffscreenPatternTile(
      fillBind4135 * 8,
      fillBind4136 * 8,
    ),
    fillBind4138 = fillBind4137.getContext("2d");
  fillBind4138.imageSmoothingEnabled = false;
  let fillBind4139 = fillBind4138.createPattern(fillBind4125, "repeat");
  fillBind4138.save();
  let fillBind4140 = fillBind4133 * fillBind4115,
    fillBind4141 = fillBind4134 * fillBind4115;
  return (
    fillBind4138.translate(fillBind4137.width / 2, fillBind4137.height / 2),
    fillBind4138.rotate((fillBind4126 * Math.PI) / 180),
    fillBind4138.translate(
      -(fillBind4137.width / 2 - fillBind4140),
      -(fillBind4137.height / 2 - fillBind4141),
    ),
    (fillBind4138.fillStyle = fillBind4139),
    fillBind4138.fillRect(
      -fillBind4135,
      -fillBind4136,
      fillBind4137.width + 2 * fillBind4135,
      fillBind4137.height + 2 * fillBind4136,
    ),
    fillBind4138.restore(),
    resIn481.createPattern(fillBind4137, "repeat")
  );
}
let patternTypePainterConfig: Record<
  number | string,
  { id?: string; scale?: number; extraAngle?: number }
>;
let patternTileCache: Map<string, unknown>;
export const ensurePatternFillResolveInit = esmInit(() => {
  ensureCssNamedColorsInit();
  ensurePatternTilePaintersInit();
  wr();
  patternTypePainterConfig = {
    [patternTypeEnum.PATTERN_TYPE_LIGHT_GRAY]: {
      id: "dots",
      scale: 1.8,
    },
    [patternTypeEnum.PATTERN_TYPE_MEDIUM_GRAY]: {
      id: "dots",
      scale: 1.15,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_GRAY]: {
      id: "dots",
      scale: 0.85,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_HORIZONTAL]: {
      id: "horz",
      scale: 0.25,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_HORIZONTAL]: {
      id: "horz",
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_HORIZONTAL]: {
      id: "horz",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_NARROW_HORIZONTAL]: {
      id: "horz",
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DASHED_HORIZONTAL]: {
      id: "horzDashed",
      scale: 1.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_VERTICAL]: {
      id: "vert",
      scale: 0.25,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_VERTICAL]: {
      id: "vert",
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_VERTICAL]: {
      id: "vert",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_NARROW_VERTICAL]: {
      id: "vert",
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DASHED_VERTICAL]: {
      id: "vertDashed",
      scale: 1.5,
    },
    [patternTypeEnum.PATTERN_TYPE_CROSS]: {
      id: "cross",
    },
    [patternTypeEnum.PATTERN_TYPE_DIAGONAL_CROSS]: {
      id: "cross",
      extraAngle: 45,
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_DOWN]: {
      id: "vert",
      extraAngle: 135,
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_UP]: {
      id: "vert",
      extraAngle: 45,
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_DOWN]: {
      id: "vert",
      extraAngle: 135,
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_UP]: {
      id: "vert",
      extraAngle: 45,
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DOWNWARD_DIAGONAL]: {
      id: "vert",
      extraAngle: 135,
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_UPWARD_DIAGONAL]: {
      id: "vert",
      extraAngle: 45,
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL]: {
      id: "vert",
      extraAngle: 135,
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_WIDE_UPWARD_DIAGONAL]: {
      id: "vert",
      extraAngle: 45,
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL]: {
      id: "vertDashed",
      extraAngle: 135,
      scale: 1.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DASHED_UPWARD_DIAGONAL]: {
      id: "vertDashed",
      extraAngle: 45,
      scale: 1.5,
    },
    [patternTypeEnum.PATTERN_TYPE_SMALL_GRID]: {
      id: "grid",
      scale: 0.5,
    },
    [patternTypeEnum.PATTERN_TYPE_LARGE_GRID]: {
      id: "grid",
      scale: 2,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_GRID]: {
      id: "grid",
      scale: 1.2,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_GRID]: {
      id: "grid",
      scale: 0.85,
    },
    [patternTypeEnum.PATTERN_TYPE_DOT_GRID]: {
      id: "dots",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_SMALL_CHECK]: {
      id: "check",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_LARGE_CHECK]: {
      id: "check",
      scale: 2,
    },
    [patternTypeEnum.PATTERN_TYPE_TRELLIS]: {
      id: "trellis",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_LIGHT_TRELLIS]: {
      id: "trellis",
      scale: 1.5,
    },
    [patternTypeEnum.PATTERN_TYPE_DARK_TRELLIS]: {
      id: "trellis",
      scale: 0.85,
    },
    [patternTypeEnum.PATTERN_TYPE_SMALL_CONFETTI]: {
      id: "confettiSmall",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_LARGE_CONFETTI]: {
      id: "confettiLarge",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_HORIZONTAL_BRICK]: {
      id: "horizontalBrick",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_DIAGONAL_BRICK]: {
      id: "diagonalBrick",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_SOLID_DIAMOND]: {
      id: "solidDiamond",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_OPEN_DIAMOND]: {
      id: "openDiamond",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_DOTTED_DIAMOND]: {
      id: "dottedDiamond",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_PLAID]: {
      id: "plaid",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_SPHERE]: {
      id: "sphere",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_WEAVE]: {
      id: "weave",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_DIVOT]: {
      id: "divot",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_SHINGLE]: {
      id: "shingle",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_WAVE]: {
      id: "wave",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_ZIG_ZAG]: {
      id: "zigZag",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_GRAY0625]: {
      id: "dots",
      scale: 2.3,
    },
    [patternTypeEnum.PATTERN_TYPE_GRAY125]: {
      id: "dots",
      scale: 1.9,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_5]: {
      id: "dots",
      scale: 2.6,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_10]: {
      id: "dots",
      scale: 2.1,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_20]: {
      id: "dots",
      scale: 1.7,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_25]: {
      id: "dots",
      scale: 1.55,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_30]: {
      id: "dots",
      scale: 1.45,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_40]: {
      id: "dots",
      scale: 1.3,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_50]: {
      id: "dots",
      scale: 1.15,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_60]: {
      id: "dots",
      scale: 1,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_70]: {
      id: "dots",
      scale: 0.9,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_75]: {
      id: "dots",
      scale: 0.85,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_80]: {
      id: "dots",
      scale: 0.8,
    },
    [patternTypeEnum.PATTERN_TYPE_PERCENT_90]: {
      id: "dots",
      scale: 0.7,
    },
  };
  patternTileCache = new Map();
});
