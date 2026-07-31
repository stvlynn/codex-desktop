// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: path command bounding box (legacy tTe).
// Stage-3 wave-110.

export function pathCommandsBBox(spIn2911: any) {
  let spBind10791 = 1 / 0,
    spBind10792 = 1 / 0,
    spBind10793 = -1 / 0,
    spBind10794 = -1 / 0,
    spBind10795 = (spIn10002) => {
      spBind10791 = Math.min(spBind10791, spIn10002.x);
      spBind10792 = Math.min(spBind10792, spIn10002.y);
      spBind10793 = Math.max(spBind10793, spIn10002.x);
      spBind10794 = Math.max(spBind10794, spIn10002.y);
    };
  for (let spBind18535 of spIn2911)
    spBind18535.cmd === "moveTo" || spBind18535.cmd === "lineTo"
      ? spBind10795(spBind18535)
      : spBind18535.cmd === "cubicBezTo" &&
        (spBind10795({
          x: spBind18535.x1,
          y: spBind18535.y1,
        }),
        spBind10795({
          x: spBind18535.x2,
          y: spBind18535.y2,
        }),
        spBind10795({
          x: spBind18535.x,
          y: spBind18535.y,
        }));
  if (
    !(
      !Number.isFinite(spBind10791) ||
      !Number.isFinite(spBind10792) ||
      !Number.isFinite(spBind10793) ||
      !Number.isFinite(spBind10794)
    )
  )
    return {
      x: spBind10791,
      y: spBind10792,
      width: spBind10793 - spBind10791,
      height: spBind10794 - spBind10792,
    };
}

/** Legacy alias. */
export const tTe = pathCommandsBBox;
