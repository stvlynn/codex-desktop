// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: radial/pie gridline paint.
// Stage-3 wave-113.

export function paintRadialGridlines(
  cpIn2765: any,
  cpIn2766: any,
  cpIn2767: any,
  cpIn2768: any,
) {
  if (cpIn2766.arcs.length === 0 || cpIn2766.radius === 0) return;
  let cpBind10407 = cpIn2768.padAngle ?? 0.005,
    cpBind10408 = cpIn2766.radius,
    cpBind10409 = cpIn2767.x + cpIn2767.width / 2,
    cpBind10410 = cpIn2767.y + cpIn2767.height / 2,
    cpBind10411 = appInitialNit()
      .startAngle((cpIn16362) => cpIn16362.startAngle)
      .endAngle((cpIn16435) => cpIn16435.endAngle)
      .padAngle((cpIn13782) =>
        Math.min(
          ((cpIn13782.endAngle - cpIn13782.startAngle) / 2) * 0.25,
          cpBind10407,
        ),
      )
      .padRadius(cpBind10408 * 0.5)
      .innerRadius((cpIn16335) => cpIn16335.innerRadius)
      .outerRadius((cpIn14892) =>
        Math.max(cpIn14892.innerRadius, cpIn14892.outerRadius - 1),
      )
      .context(cpIn2765);
  cpIn2765.save();
  cpIn2765.translate(cpBind10409, cpBind10410);
  for (let cpBind22438 of cpIn2766.arcs) {
    cpIn2765.beginPath();
    cpBind10411(cpBind22438);
    cpIn2765.fillStyle = cpBind22438.fill;
    cpIn2765.fill();
  }
  qSe(cpIn2765, cpIn2766.arcs, cpBind10411, cpIn2768.valueFormatCode);
  cpIn2765.restore();
}

export const KSe = paintRadialGridlines;
