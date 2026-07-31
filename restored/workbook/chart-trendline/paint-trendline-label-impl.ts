// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trendline/data-label card paint (legacy helper524).
// Stage-3 wave-107.

import { ctlH } from "./boundary-hooks";

void ctlH;

export function paintTrendlineLabel(
  ctlIn1247: any,
  ctlIn1248: any,
  ctlIn1249: any,
  ctlIn1250: any,
  ctlIn1251: any,
) {
  if (!ctlH.hasLabel(ctlIn1248)) return;
  let ctlBind6816 = ctlH.resolveLabel(ctlIn1248, ctlIn1249);
  if (!ctlBind6816) return;
  let ctlBind6817 = ctlH.layoutLabel(ctlIn1251, ctlBind6816.manualLayout);
  if (ctlBind6817.width <= 0 || ctlBind6817.height <= 0) return;
  let ctlBind6818 = ctlIn1248.label;
  (ctlBind6818?.fill || ctlBind6818?.stroke || ctlBind6818?.line) &&
    (ctlIn1247.save(),
    (ctlIn1247.fillStyle = "rgba(255,255,255,0.85)"),
    (ctlIn1247.strokeStyle = "rgba(0,0,0,0.20)"),
    (ctlIn1247.lineWidth = 1),
    ctlIn1247.beginPath(),
    ctlIn1247.rect(
      ctlBind6817.x,
      ctlBind6817.y,
      ctlBind6817.width,
      ctlBind6817.height,
    ),
    ctlIn1247.fill(),
    ctlIn1247.stroke(),
    ctlIn1247.restore());
  let ctlBind6819 = {
    type: ctlH.ELEMENT_TYPE_TEXT,
    paragraphs: ctlBind6816.paragraphs,
    textStyle: {
      ...(ctlBind6816.resolvedStyle &&
      typeof ctlBind6816.resolvedStyle == "object"
        ? ctlBind6816.resolvedStyle
        : {}),
      fontSize:
        typeof ctlBind6816.resolvedStyle?.fontSize == "number"
          ? ctlBind6816.resolvedStyle.fontSize
          : 9,
      alignment: ctlH.ALIGNMENT_TYPE_LEFT,
    },
    effects: [],
    children: [],
    citations: [],
    levelsStyles: [],
    id: "",
  };
  ctlBind6819.textStyle.fill ||
    (ctlBind6819.textStyle.fill = {
      type: ctlH.FILL_TYPE_SOLID,
      color: {
        type: ctlH.COLOR_TYPE_RGB,
        value: "FF111111",
        transform: undefined,
      },
      gradientStops: [],
    });
  ctlH.paintText(ctlBind6819, ctlIn1247, ctlIn1250, undefined, {
    bboxPx: ctlBind6817,
    resolvedStyle: ctlBind6819.textStyle,
    wrap: true,
  });
}

/** Legacy alias. */
export const workbookHelper524 = paintTrendlineLabel;
