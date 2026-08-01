// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rotated category label paint (legacy Nye/Pye).
// Stage-3 wave-134.

export function Nye(props: any) {
  let { ctx, text, anchorX, anchorY, rotationDeg, fontSizePx, side } = props,
    calBind12696 = ctx.measureText(text).width;
  if (!(calBind12696 > 0) || !(fontSizePx > 0)) return;
  let calBind12697 = Pye({
    widthPx: calBind12696,
    heightPx: fontSizePx,
    rotationDeg,
    side,
  });
  ctx.save();
  ctx.translate(anchorX, anchorY);
  ctx.rotate((rotationDeg * Math.PI) / 180);
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(text, calBind12697.leftPx, calBind12697.topPx);
  ctx.restore();
}
export function Pye(props: any) {
  let { widthPx, heightPx, rotationDeg } = props;
  return {
    leftPx: rotationDeg < 0 ? -widthPx : 0,
    topPx: -heightPx / 2,
    widthPx,
    heightPx,
  };
}
