// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: manual layout rect resolve (legacy $L/558/559).
// Stage-3 wave-114.

export function clampUnitInterval(cplIn14219: any) {
  return Math.max(0, Math.min(1, cplIn14219));
}
export function resolveEdgeSize(
  cplIn10078: any,
  cplIn10079: any,
  cplIn10080: any,
  cplIn10081: any,
  cplIn10082: any,
  cplIn10083: any,
) {
  if (cplIn10082 === undefined) return cplIn10081;
  let cplBind20569 = cplIn10078 + cplIn10079 * clampUnitInterval(cplIn10082);
  return cplIn10083 === "edge"
    ? Math.max(0, cplBind20569 - cplIn10080)
    : cplBind20569 - cplIn10078;
}
export function resolveManualLayoutRect(
  cplIn4774: any,
  cplIn4775: any,
  cplIn4776: any,
) {
  let cplBind14121 =
      cplIn4776.x === undefined
        ? cplIn4775.x
        : cplIn4774.x + cplIn4774.width * clampUnitInterval(cplIn4776.x),
    cplBind14122 =
      cplIn4776.y === undefined
        ? cplIn4775.y
        : cplIn4774.y + cplIn4774.height * clampUnitInterval(cplIn4776.y),
    cplBind14123 = resolveEdgeSize(
      cplIn4774.x,
      cplIn4774.width,
      cplBind14121,
      cplIn4775.width,
      cplIn4776.w,
      cplIn4776.wMode,
    ),
    cplBind14124 = resolveEdgeSize(
      cplIn4774.y,
      cplIn4774.height,
      cplBind14122,
      cplIn4775.height,
      cplIn4776.h,
      cplIn4776.hMode,
    ),
    cplBind14125 = Math.max(0, cplIn4774.x + cplIn4774.width - cplBind14121),
    cplBind14126 = Math.max(0, cplIn4774.y + cplIn4774.height - cplBind14122);
  return {
    x: cplBind14121,
    y: cplBind14122,
    width: Math.min(cplBind14123, cplBind14125),
    height: Math.min(cplBind14124, cplBind14126),
  };
}

export { clampUnitInterval as $L };
