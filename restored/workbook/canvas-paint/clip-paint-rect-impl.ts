// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: selection-clip hatch stroke (legacy #601).
// Wired historically as clipPaintRect.
// Stage-3 wave-114.

export function clipPaintRect(
  cpbIn1633: any,
  cpbIn1634: any,
  cpbIn1635: any,
  cpbIn1636: any,
  cpbIn1637: any,
  cpbIn1638: any,
  cpbIn1639: any,
) {
  if (
    (cpbIn1633.save(),
    (cpbIn1633.strokeStyle = cpbIn1635),
    cpbIn1633.setLineDash([]),
    (cpbIn1633.lineWidth = 2),
    cpbIn1633.beginPath(),
    cpbIn1634 === "top"
      ? (cpbIn1633.moveTo(cpbIn1636, cpbIn1637),
        cpbIn1633.lineTo(cpbIn1636 + cpbIn1638, cpbIn1637))
      : cpbIn1634 === "bottom"
        ? (cpbIn1633.moveTo(cpbIn1636, cpbIn1637 + cpbIn1639),
          cpbIn1633.lineTo(cpbIn1636 + cpbIn1638, cpbIn1637 + cpbIn1639))
        : cpbIn1634 === "left"
          ? (cpbIn1633.moveTo(cpbIn1636, cpbIn1637),
            cpbIn1633.lineTo(cpbIn1636, cpbIn1637 + cpbIn1639))
          : cpbIn1634 === "right" &&
            (cpbIn1633.moveTo(cpbIn1636 + cpbIn1638, cpbIn1637),
            cpbIn1633.lineTo(cpbIn1636 + cpbIn1638, cpbIn1637 + cpbIn1639)),
    cpbIn1633.stroke(),
    cpbIn1633.save(),
    (cpbIn1633.globalAlpha = 0.5),
    (cpbIn1633.strokeStyle = "#ffffff"),
    (cpbIn1633.lineWidth = 1),
    cpbIn1634 === "left" || cpbIn1634 === "right")
  ) {
    let cpbBind18960 =
        cpbIn1634 === "right" ? cpbIn1636 + cpbIn1638 : cpbIn1636,
      cpbBind18961 = cpbIn1634 === "right" ? -6 : 6;
    for (
      let cpbBind21506 = cpbIn1637;
      cpbBind21506 <= cpbIn1637 + cpbIn1639;
      cpbBind21506 += 8
    ) {
      cpbIn1633.beginPath();
      cpbIn1633.moveTo(cpbBind18960 + cpbBind18961, cpbBind21506);
      cpbIn1633.lineTo(cpbBind18960, cpbBind21506 + 6);
      cpbIn1633.stroke();
    }
  } else {
    let cpbBind18895 =
        cpbIn1634 === "bottom" ? cpbIn1637 + cpbIn1639 : cpbIn1637,
      cpbBind18896 = cpbIn1634 === "bottom" ? -6 : 6;
    for (
      let cpbBind21507 = cpbIn1636;
      cpbBind21507 <= cpbIn1636 + cpbIn1638;
      cpbBind21507 += 8
    ) {
      cpbIn1633.beginPath();
      cpbIn1633.moveTo(cpbBind21507, cpbBind18895 + cpbBind18896);
      cpbIn1633.lineTo(cpbBind21507 + 6, cpbBind18895);
      cpbIn1633.stroke();
    }
  }
  cpbIn1633.restore();
  cpbIn1633.restore();
}
