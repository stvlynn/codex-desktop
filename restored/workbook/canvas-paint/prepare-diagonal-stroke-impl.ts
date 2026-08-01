// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: canvas diagonal border stroke prep.
// Stage-3 wave-116.

export function prepareDiagonalStroke(
  cpIn2530: any,
  cpIn2531: any,
  cpIn2532: any,
) {
  switch (
    (cpIn2530.save(),
    cpIn2532 && (cpIn2530.strokeStyle = cpIn2532),
    (cpIn2530.lineWidth = 1),
    cpIn2530.setLineDash([]),
    cpIn2531)
  ) {
    case "thin":
      cpIn2530.lineWidth = 1;
      break;
    case "medium":
      cpIn2530.lineWidth = 2;
      break;
    case "thick":
      cpIn2530.lineWidth = 3;
      break;
    case "dashed":
    case "mediumDashed":
      cpIn2530.lineWidth = cpIn2531 === "mediumDashed" ? 2 : 1;
      cpIn2530.setLineDash([6, 3]);
      break;
    case "dashDot":
      cpIn2530.setLineDash([6, 3, 1, 3]);
      break;
    case "dashDotDot":
      cpIn2530.setLineDash([6, 3, 1, 3, 1, 3]);
      break;
    case "slantDashDot":
      cpIn2530.setLineDash([]);
      break;
    case "double":
      break;
    default:
      cpIn2530.lineWidth = 1;
      break;
  }
}

