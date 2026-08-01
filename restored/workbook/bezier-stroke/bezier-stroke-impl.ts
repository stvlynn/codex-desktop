// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: cubic bezier length/param + stroke dash map + scheme color swap.
// Stage-3 wave-132 (legacy Uwe/610/Wwe/612/613/fTe/624/625/628/630).

import { splitCubicBezier } from "../path-geometry";
import { Line } from "../line";
import { ur, Zn } from "../presentation-protobuf";

/** True when color is the placeholder scheme color `phClr`. */
export function isPlaceholderSchemeColor(props: any) {
  return props?.type === Zn.COLOR_TYPE_SCHEME && props.value === "phClr";
}

/** Swap placeholder scheme color for a concrete color, keeping transform. */
export function resolvePlaceholderColor(bsIn11372: any, bsIn11373: any) {
  return !isPlaceholderSchemeColor(bsIn11372) || !bsIn11373
    ? bsIn11372
    : {
        ...bsIn11373,
        transform: bsIn11372?.transform ?? bsIn11373.transform,
      };
}

/** Map fill/gradient/pattern colors through placeholder resolution. */
export function mapFillPlaceholderColor(bsIn5640: any, bsIn5641: any) {
  return bsIn5641
    ? {
        ...bsIn5640,
        color: resolvePlaceholderColor(bsIn5640.color, bsIn5641),
        gradientStops: bsIn5640.gradientStops.map((item: any) => ({
          ...item,
          color: resolvePlaceholderColor(item.color, bsIn5641),
        })),
        pattern: bsIn5640.pattern
          ? {
              ...bsIn5640.pattern,
              color: resolvePlaceholderColor(bsIn5640.pattern.color, bsIn5641),
            }
          : bsIn5640.pattern,
      }
    : bsIn5640;
}

export function applyCanvasShadow(bsIn9706: any, event: any) {
  bsIn9706.shadowColor = event.color;
  bsIn9706.shadowBlur = event.blur;
  bsIn9706.shadowOffsetX = event.offsetX;
  bsIn9706.shadowOffsetY = event.offsetY;
}

export function clearCanvasShadow(bsIn10301: any) {
  bsIn10301.shadowColor = "transparent";
  bsIn10301.shadowBlur = 0;
  bsIn10301.shadowOffsetX = 0;
  bsIn10301.shadowOffsetY = 0;
}

export function bezierPointAt(bsIn6747: any, bsIn6748: any) {
  let bsBind17053 = 1 - bsIn6748,
    bsBind17054 = bsBind17053 * bsBind17053,
    bsBind17055 = bsIn6748 * bsIn6748;
  return {
    x:
      bsIn6747.p0.x * bsBind17054 * bsBind17053 +
      3 * bsIn6747.p1.x * bsBind17054 * bsIn6748 +
      3 * bsIn6747.p2.x * bsBind17053 * bsBind17055 +
      bsIn6747.p3.x * bsIn6748 * bsBind17055,
    y:
      bsIn6747.p0.y * bsBind17054 * bsBind17053 +
      3 * bsIn6747.p1.y * bsBind17054 * bsIn6748 +
      3 * bsIn6747.p2.y * bsBind17053 * bsBind17055 +
      bsIn6747.p3.y * bsIn6748 * bsBind17055,
  };
}

export function cubicBezierLength(bsIn8772: any) {
  let bsBind19297 = 0,
    bsBind19298 = bsIn8772.p0;
  for (let bsBind21133 = 1; bsBind21133 <= 24; bsBind21133 += 1) {
    let bsBind22184 = bezierPointAt(bsIn8772, bsBind21133 / 24);
    bsBind19297 += Math.hypot(
      bsBind22184.x - bsBind19298.x,
      bsBind22184.y - bsBind19298.y,
    );
    bsBind19298 = bsBind22184;
  }
  return bsBind19297;
}

export function cubicBezierParamAtLength(bsIn6903: any, bsIn6904: any) {
  let bsBind17241 = cubicBezierLength(bsIn6903);
  if (bsIn6904 <= 0) return 0;
  if (bsIn6904 >= bsBind17241) return 1;
  let bsBind17242 = 0,
    bsBind17243 = 1;
  for (let bsBind21226 = 0; bsBind21226 < 16; bsBind21226 += 1) {
    let bsBind22239 = (bsBind17242 + bsBind17243) / 2,
      [bsBind22240] = splitCubicBezier(bsIn6903, bsBind22239);
    cubicBezierLength(bsBind22240) < bsIn6904
      ? (bsBind17242 = bsBind22239)
      : (bsBind17243 = bsBind22239);
  }
  return (bsBind17242 + bsBind17243) / 2;
}

export function normalizeVector2(bsIn11048: any) {
  let bsBind21572 = Math.hypot(bsIn11048.x, bsIn11048.y);
  return bsBind21572
    ? {
        x: bsIn11048.x / bsBind21572,
        y: bsIn11048.y / bsBind21572,
      }
    : {
        x: 0,
        y: 0,
      };
}

export function resolveLineStyleProto(bsIn3750: any) {
  if (!bsIn3750) return;
  if (bsIn3750 instanceof Line)
    switch (bsIn3750.style) {
      case "dashed":
        return ur.LINE_STYLE_DASHED;
      case "dotted":
        return ur.LINE_STYLE_DOTTED;
      case "dash-dot":
        return ur.LINE_STYLE_DASH_DOT;
      case "dash-dot-dot":
        return ur.LINE_STYLE_DASH_DOT_DOT;
      case "solid":
        return ur.LINE_STYLE_SOLID;
      default:
        return;
    }
  let { style } = bsIn3750;
  if (style !== ur.LINE_STYLE_UNSPECIFIED) return style;
}
