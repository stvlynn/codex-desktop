// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector route stroke + owned stroke helpers.
// Stage-3 wave-113.

import { sgpH } from "./boundary-hooks";
import { Yge } from "../image-connector";
import { pTe } from "../shape-path-endpoints";
import { pathEndpointMetrics as mTe } from "../shape-path-densify";
import { pathCommandsBBox as tTe } from "../shape-path";
import {
  applyCanvasLineDash as M_,
  resolveFillStyle as workbookHelper212,
} from "../canvas-fill";
import { resolveColorToCssRgba as workbookSt } from "../color-resolve";
import { degreesToRotationEmu as workbookHelper288 } from "../geometry-transform";
import { nr, tr } from "../presentation-protobuf";

void sgpH;
void Yge;
void pTe;
void mTe;
void tTe;
void M_;
void workbookHelper212;
void workbookSt;
void workbookHelper288;
void nr;
void tr;

export function elementStrokeBBox(sgpIn1284: any) {
  let sgpBind6946 = sgpIn1284.resolveFrame(),
    sgpBind6947 = workbookHelper288(sgpBind6946.rotation),
    sgpBind6948 = {
      id: sgpIn1284.id,
      name: sgpIn1284.name,
      zIndex: sgpIn1284.zIndex,
      type:
        sgpIn1284.type === "shape"
          ? j.ELEMENT_TYPE_SHAPE
          : sgpIn1284.type === "image"
            ? j.ELEMENT_TYPE_IMAGE
            : sgpIn1284.type === "table"
              ? j.ELEMENT_TYPE_TABLE
              : j.ELEMENT_TYPE_CHART_REFERENCE,
      bbox: {
        xEmu: Math.round(sgpBind6946.left / workbookGt),
        yEmu: Math.round(sgpBind6946.top / workbookGt),
        widthEmu: Math.round(sgpBind6946.width / workbookGt),
        heightEmu: Math.round(sgpBind6946.height / workbookGt),
        rotation: sgpBind6947,
        horizontalFlip: sgpBind6946.horizontalFlip,
        verticalFlip: sgpBind6946.verticalFlip,
      },
      effects: [],
      children: [],
      levelsStyles: [],
      citations: [],
      paragraphs: [],
    };
  return (
    sgpIn1284.type === "shape" &&
      ((sgpBind6948.shape = {
        geometry: sgpIn1284.geometry ?? workbookDt.SHAPE_GEOMETRY_UNSPECIFIED,
        fill: undefined,
        line: undefined,
        adjustmentList: [...sgpIn1284.adjustmentList],
        rectFormula: undefined,
        customPaths: [...sgpIn1284.customPaths],
        customGeometryGuides: [],
      }),
      (sgpBind6948.connector = sgpIn1284.connector)),
    sgpBind6948
  );
}
export function paintConnectorRoute({
  el: _el,
  ctx,
  pres,
  slide,
  routeElements,
  strokePaint,
  strokeBBox,
  lineFill,
  themeMap,
  lineWidthPx,
  lineStyle,
}: any) {
  if (!_el.connector) return;
  ctx.save();
  ctx.lineWidth = lineWidthPx > 0 ? lineWidthPx : 0.001;
  ctx.strokeStyle = strokePaint;
  M_(ctx, lineStyle, ctx.lineWidth);
  let sgpBind7602 = routeElements
    ? [...routeElements]
    : slide.elements.items.map((item) => elementStrokeBBox(item));
  _el.id &&
    !sgpBind7602.some((item) => item.id === _el.id) &&
    sgpBind7602.push(_el);
  let sgpBind7603;
  try {
    sgpBind7603 = Yge({
      connectorEl: _el,
      elements: sgpBind7602,
      pres,
      slide,
    }).commands;
  } catch (sgpBind21225) {
    console.warn(
      "autoRouteConnectorPx failed, using fallback path",
      sgpBind21225,
    );
    sgpBind7603 = pTe(_el, sgpBind7602, pres, slide);
  }
  if (!sgpBind7603 || sgpBind7603.length === 0) {
    ctx.restore();
    return;
  }
  let sgpBind7604 = mTe(sgpBind7603),
    sgpBind7605 = strokePathBBox(sgpBind7603, strokeBBox) ?? strokeBBox,
    sgpBind7606 = strokeFillPaint({
      ctx,
      bbox: sgpBind7605,
      fill: lineFill,
      themeMap,
      fallbackPaint: strokePaint,
    });
  ctx.strokeStyle = sgpBind7606;
  applyStrokeLineStyle(ctx, sgpBind7603, _el, ctx.lineWidth);
  sgpH.drawConnectorArrowheads(
    _el,
    ctx,
    pres,
    slide,
    sgpBind7606,
    ctx.lineWidth,
    sgpBind7604,
    fillRectFallback({
      bbox: sgpBind7605,
      fill: lineFill,
      themeMap,
      fallbackPaint: sgpBind7606,
      metrics: sgpBind7604,
    }),
  );
  ctx.restore();
}
export function fillRectFallback({
  bbox,
  fill,
  themeMap,
  fallbackPaint,
  metrics,
}: any) {
  if (
    !(
      !bbox ||
      !fill ||
      !themeMap ||
      !metrics?.start ||
      !metrics?.end ||
      !isLinearGradientFill(fill)
    )
  )
    return {
      head: paintGradientOrSolidStroke({
        fill,
        bbox,
        point: metrics.start,
        themeMap,
        fallbackPaint,
      }),
      tail: paintGradientOrSolidStroke({
        fill,
        bbox,
        point: metrics.end,
        themeMap,
        fallbackPaint,
      }),
    };
}
export function strokeFillPaint({
  ctx,
  bbox,
  fill,
  themeMap,
  fallbackPaint,
}: any) {
  return !bbox || !fill || !themeMap
    ? fallbackPaint
    : workbookHelper212(
        ctx,
        bbox,
        fill,
        themeMap,
        typeof fallbackPaint == "string" ? fallbackPaint : "transparent",
      );
}
export function strokePathBBox(sgpIn11683: any, sgpIn11684: any) {
  let sgpBind22054 = tTe(sgpIn11683);
  return sgpBind22054 && (sgpBind22054.width > 0 || sgpBind22054.height > 0)
    ? sgpBind22054
    : sgpIn11684;
}
export function isLinearGradientFill(sgpIn6565: any) {
  if (
    sgpIn6565.type !== tr.FILL_TYPE_GRADIENT ||
    (sgpIn6565.gradientStops?.length ?? 0) === 0
  )
    return false;
  let sgpBind16828 = sgpIn6565.gradientKind;
  return (
    sgpBind16828 == null ||
    sgpBind16828 === "linear" ||
    sgpBind16828 === nr.GRADIENT_KIND_UNSPECIFIED ||
    sgpBind16828 === nr.GRADIENT_KIND_LINEAR
  );
}
export function paintGradientOrSolidStroke({
  fill,
  bbox,
  point,
  themeMap,
  fallbackPaint,
}: any) {
  let sgpBind9688 = [...(fill.gradientStops ?? [])].sort(
    (sgpIn15116, sgpIn15117) =>
      (sgpIn15116.position ?? 0) - (sgpIn15117.position ?? 0),
  );
  if (sgpBind9688.length === 0) return fallbackPaint;
  let sgpBind9689 = sgpBind9688.every(
      (item) => Math.abs(item.position ?? 0) <= 1,
    ),
    sgpBind9690 =
      typeof fallbackPaint == "string" ? fallbackPaint : "transparent",
    sgpBind9691 = sgpBind9688.map((item) => ({
      offset: normalizeGradientStopOffset(item.position ?? 0, sgpBind9689),
      color: workbookSt(item.color, themeMap, sgpBind9690),
    })),
    sgpBind9692 = gradientAxisT(fill, bbox, point);
  if (sgpBind9692 <= sgpBind9691[0].offset) return sgpBind9691[0].color;
  for (
    let sgpBind17996 = 1;
    sgpBind17996 < sgpBind9691.length;
    sgpBind17996 += 1
  ) {
    let sgpBind19103 = sgpBind9691[sgpBind17996 - 1],
      sgpBind19104 = sgpBind9691[sgpBind17996];
    if (sgpBind9692 > sgpBind19104.offset) continue;
    let sgpBind19105 = sgpBind19104.offset - sgpBind19103.offset,
      sgpBind19106 =
        sgpBind19105 <= 0
          ? 0
          : (sgpBind9692 - sgpBind19103.offset) / sgpBind19105;
    return lerpRgbaCss(sgpBind19103.color, sgpBind19104.color, sgpBind19106);
  }
  return sgpBind9691[sgpBind9691.length - 1].color;
}
export function gradientAxisT(sgpIn4016: any, sgpIn4017: any, sgpIn4018: any) {
  let sgpBind12934 = ((sgpIn4016.angleDeg ?? 0) * Math.PI) / 180,
    { x, y, width, height } = sgpIn4017,
    sgpBind12935 = x + width / 2,
    sgpBind12936 = y + height / 2,
    sgpBind12937 = Math.sqrt(width * width + height * height) / 2;
  if (sgpBind12937 <= 0) return 0;
  let sgpBind12938 = Math.cos(sgpBind12934) * sgpBind12937,
    sgpBind12939 = Math.sin(sgpBind12934) * sgpBind12937,
    sgpBind12940 = {
      x: sgpBind12935 - sgpBind12938,
      y: sgpBind12936 - sgpBind12939,
    },
    sgpBind12941 = {
      x: sgpBind12935 + sgpBind12938,
      y: sgpBind12936 + sgpBind12939,
    },
    sgpBind12942 = sgpBind12941.x - sgpBind12940.x,
    sgpBind12943 = sgpBind12941.y - sgpBind12940.y,
    sgpBind12944 = sgpBind12942 * sgpBind12942 + sgpBind12943 * sgpBind12943;
  return sgpBind12944 <= 0
    ? 0
    : unitInterval(
        ((sgpIn4018.x - sgpBind12940.x) * sgpBind12942 +
          (sgpIn4018.y - sgpBind12940.y) * sgpBind12943) /
          sgpBind12944,
      );
}
export function normalizeGradientStopOffset(sgpIn14614: any, sgpIn14615: any) {
  return unitInterval(sgpIn14615 ? sgpIn14614 : sgpIn14614 / 1e5);
}
export function lerpRgbaCss(sgpIn6919: any, sgpIn6920: any, sgpIn6921: any) {
  let sgpBind17267 = parseCssRgba(sgpIn6919),
    sgpBind17268 = parseCssRgba(sgpIn6920);
  if (!sgpBind17267 || !sgpBind17268)
    return sgpIn6921 < 0.5 ? sgpIn6919 : sgpIn6920;
  let sgpBind17269 = unitInterval(sgpIn6921);
  return `rgba(${Math.round(lerpChannel(sgpBind17267.r, sgpBind17268.r, sgpBind17269))},${Math.round(lerpChannel(sgpBind17267.g, sgpBind17268.g, sgpBind17269))},${Math.round(lerpChannel(sgpBind17267.b, sgpBind17268.b, sgpBind17269))},${round3(unitInterval(lerpChannel(sgpBind17267.a, sgpBind17268.a, sgpBind17269)))})`;
}
export function parseCssRgba(sgpIn2744: any) {
  let sgpBind10369 = sgpIn2744.trim(),
    sgpBind10370 =
      /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+))?\s*\)$/i.exec(
        sgpBind10369,
      );
  if (sgpBind10370)
    return {
      r: Number(sgpBind10370[1]),
      g: Number(sgpBind10370[2]),
      b: Number(sgpBind10370[3]),
      a: sgpBind10370[4] === undefined ? 1 : Number(sgpBind10370[4]),
    };
  let sgpBind10371 = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(sgpBind10369);
  if (!sgpBind10371) return;
  let sgpBind10372 = sgpBind10371[1],
    sgpBind10373 =
      sgpBind10372.length === 3
        ? sgpBind10372
            .split("")
            .map((item) => `${item}${item}`)
            .join("")
        : sgpBind10372;
  return {
    r: Number.parseInt(sgpBind10373.slice(0, 2), 16),
    g: Number.parseInt(sgpBind10373.slice(2, 4), 16),
    b: Number.parseInt(sgpBind10373.slice(4, 6), 16),
    a: 1,
  };
}
export function lerpChannel(sgpIn14816: any, sgpIn14817: any, sgpIn14818: any) {
  return sgpIn14816 + (sgpIn14817 - sgpIn14816) * sgpIn14818;
}
export function unitInterval(sgpIn14221: any) {
  return Math.min(1, Math.max(0, sgpIn14221));
}
export function round3(sgpIn14312: any) {
  return Math.round(sgpIn14312 * 1e3) / 1e3;
}
export function resolveLineCap(sgpIn7131: any, sgpIn7132: any) {
  for (let sgpBind18209 of sgpIn7132)
    sgpBind18209.cmd === "moveTo"
      ? sgpIn7131.moveTo(sgpBind18209.x, sgpBind18209.y)
      : sgpBind18209.cmd === "lineTo"
        ? sgpIn7131.lineTo(sgpBind18209.x, sgpBind18209.y)
        : sgpBind18209.cmd === "cubicBezTo" &&
          sgpIn7131.bezierCurveTo(
            sgpBind18209.x1,
            sgpBind18209.y1,
            sgpBind18209.x2,
            sgpBind18209.y2,
            sgpBind18209.x,
            sgpBind18209.y,
          );
}
export function applyStrokeLineStyle(
  sgpIn7799: any,
  sgpIn7800: any,
  sgpIn7801: any,
  sgpIn7802: any,
) {
  let sgpBind18282 = sgpBind1261(sgpIn7801, sgpIn7802),
    sgpBind18283 = canvasLineDashFromStyle(sgpIn7800, sgpBind18282),
    sgpBind18284 = sgpIn7799.lineCap;
  (sgpBind18282.startPx > 0 || sgpBind18282.endPx > 0) &&
    (sgpIn7799.lineCap = "butt");
  sgpIn7799.beginPath();
  resolveLineCap(sgpIn7799, sgpBind18283);
  sgpIn7799.stroke();
  sgpIn7799.lineCap = sgpBind18284;
}
export function canvasLineDashFromStyle(sgpIn11977: any, sgpIn11978: any) {
  let sgpBind22212 = uTe(sgpIn11977, sgpIn11978.startPx);
  return ((sgpBind22212 = dTe(sgpBind22212, sgpIn11978.endPx)), sgpBind22212);
}

export const Qwe = paintConnectorRoute;
export const $we = strokeFillPaint;
export const eTe = strokePathBBox;
export const nTe = isLinearGradientFill;
export const rTe = gradientAxisT;
export const iTe = normalizeGradientStopOffset;
export const aTe = lerpRgbaCss;
export const oTe = round3;
export const sTe = resolveLineCap;
export const lTe = canvasLineDashFromStyle;
