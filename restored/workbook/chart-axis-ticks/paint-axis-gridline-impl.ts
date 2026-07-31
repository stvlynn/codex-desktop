// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: axis gridline stroke paint.
// Stage-3 wave-113.

import { ur } from "../presentation-protobuf";

void ur;

export function paintAxisGridlineStroke(
  catIn2206: any,
  catIn2207: any,
  catIn2208: any,
  catIn2209: any = {},
) {
  let catBind9234 =
      catIn2207?.fill?.color === undefined
        ? catIn2209.color
        : workbookSt(catIn2207.fill.color, catIn2208, catIn2209.color),
    catBind9235 = catIn2207?.widthEmu,
    catBind9236 =
      catBind9235 != null && Number.isFinite(Number(catBind9235))
        ? Math.max(0, Number(catBind9235) * workbookGt)
        : catIn2209.widthPx;
  switch (
    (catBind9234 && (catIn2206.strokeStyle = catBind9234),
    catBind9236 !== undefined && (catIn2206.lineWidth = catBind9236),
    catIn2207?.style)
  ) {
    case ur.LINE_STYLE_DASHED:
      catIn2206.setLineDash([4, 3]);
      break;
    case ur.LINE_STYLE_DOTTED:
      catIn2206.setLineDash([1, 2]);
      break;
    case ur.LINE_STYLE_DASH_DOT:
      catIn2206.setLineDash([4, 2, 1, 2]);
      break;
    case ur.LINE_STYLE_DASH_DOT_DOT:
      catIn2206.setLineDash([4, 2, 1, 2, 1, 2]);
      break;
    case ur.LINE_STYLE_SOLID:
    case ur.LINE_STYLE_UNSPECIFIED:
    default:
      catIn2206.setLineDash([]);
      break;
  }
  return {
    color: catBind9234,
    widthPx: catBind9236,
  };
}
