// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: ellipsis fit + text rotation + rotated bbox.
// Stage-3 wave-131 (legacy mid peels).

export function ellipsizeToWidth(tmIn6652: any, tmIn6653: any, tmIn6654: any) {
  if (tmIn6652.measureText(tmIn6653).width <= tmIn6654) return tmIn6653;
  let tmBind16946 = 0,
    tmBind16947 = tmIn6653.length;
  for (; tmBind16946 < tmBind16947; ) {
    let tmBind21327 = Math.ceil((tmBind16946 + tmBind16947) / 2);
    tmIn6652.measureText(tmIn6653.slice(0, tmBind21327) + "…").width <= tmIn6654
      ? (tmBind16946 = tmBind21327)
      : (tmBind16947 = tmBind21327 - 1);
  }
  return tmIn6653.slice(0, tmBind16946) + "…";
}

export function normalizeTextRotationDeg(tmIn4733: any) {
  let tmBind14053 = tmIn4733?.textStyle?.rotation;
  if (
    typeof tmBind14053 != "number" ||
    Number.isNaN(tmBind14053) ||
    tmBind14053 === -1000
  )
    return 0;
  let tmBind14054 = tmBind14053;
  if (Math.abs(tmBind14054) > 360) {
    let tmBind20900 = tmBind14054 / 6e4;
    Number.isFinite(tmBind20900) && Math.abs(tmBind20900) <= 360
      ? (tmBind14054 = tmBind20900)
      : Number.isFinite(tmBind14054) && (tmBind14054 %= 360);
  }
  return !Number.isFinite(tmBind14054) ||
    (Math.abs(tmBind14054) >= 360 && (tmBind14054 %= 360),
    Math.abs(tmBind14054) < 0.001)
    ? 0
    : tmBind14054;
}

export function rotatedBBoxSize(tmIn7229: any, tmIn7230: any, tmIn7231: any) {
  if (!isFinite(tmIn7231) || tmIn7231 === 0)
    return {
      width: tmIn7229,
      height: tmIn7230,
    };
  let tmBind17590 = Math.cos(tmIn7231),
    tmBind17591 = Math.sin(tmIn7231);
  return {
    width: Math.abs(tmIn7229 * tmBind17590) + Math.abs(tmIn7230 * tmBind17591),
    height: Math.abs(tmIn7229 * tmBind17591) + Math.abs(tmIn7230 * tmBind17590),
  };
}

export const workbookHelper427 = ellipsizeToWidth;
export const workbookHelper432 = normalizeTextRotationDeg;
export const workbookHelper437 = rotatedBBoxSize;
