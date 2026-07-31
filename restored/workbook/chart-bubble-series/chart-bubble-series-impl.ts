// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bubble series paint (legacy aCe; was misnamed paintMap).
// Stage-3 wave-101.

import { cbbH } from "./boundary-hooks";

void cbbH;

export function paintBubbleSeries(
  bubIn765: any,
  bubIn766: any,
  bubIn767: any,
  bubIn768: any,
  bubIn769: any,
  bubIn770: any,
  bubIn771: any,
) {
  let bubBind5316 = bubIn767.r,
    bubBind5317 = cbbH.bh533(bubIn766.bubbleOptions?.scale);
  bubIn765.save();
  bubIn765.beginPath();
  bubIn765.rect(bubIn770.x, bubIn770.y, bubIn770.width, bubIn770.height);
  bubIn765.clip();
  bubIn768.series.forEach(({ series, seriesIndex, points }) => {
    let bubBind5783 =
      cbbH.bh465(series, seriesIndex, bubIn769) ?? bubIn765.fillStyle;
    points.forEach((item) => {
      let bubBind6138 = bubIn767.x(item.x),
        bubBind6139 = bubIn767.y(item.y);
      if (!Number.isFinite(bubBind6138) || !Number.isFinite(bubBind6139))
        return;
      let bubBind6140 = cbbH.bh534(item.size, bubBind5316, bubBind5317);
      if (bubBind6140 === 0) return;
      let bubBind6141 = cbbH.bh474(series, item.idx),
        bubBind6142,
        bubBind6143;
      bubBind6141 ||
        ((bubBind6142 = cbbH.bh469(series, item.idx, seriesIndex, bubIn769)),
        bubBind6142 === undefined && (bubBind6142 = bubBind5783),
        (bubBind6143 = cbbH.bh470(
          bubIn765,
          {
            x: bubBind6138 - bubBind6140,
            y: bubBind6139 - bubBind6140,
            width: bubBind6140 * 2,
            height: bubBind6140 * 2,
          },
          series,
          item.idx,
          seriesIndex,
          bubIn769,
        )),
        bubBind6143 === undefined && (bubBind6143 = bubBind5783));
      let bubBind6144 = cbbH.bh473(series, item.idx, bubIn769),
        bubBind6145 = bubBind6144.color;
      bubBind6145 === undefined && (bubBind6145 = bubBind5783);
      let bubBind6146 = bubBind6144.widthPx;
      bubBind6146 === undefined && (bubBind6146 = bubBind1212);
      let bubBind6147 = bubBind6142;
      bubBind6147 === undefined && (bubBind6147 = bubBind5783);
      bubIn765.save();
      bubIn765.beginPath();
      bubIn765.arc(bubBind6138, bubBind6139, bubBind6140, 0, Math.PI * 2);
      bubBind6143 !== undefined &&
        ((bubIn765.fillStyle = bubBind6143), bubIn765.fill());
      bubBind6144.visible !== false &&
        bubBind6146 > 0 &&
        ((bubIn765.lineWidth = bubBind6146),
        (bubIn765.strokeStyle = bubBind6145),
        bubIn765.stroke());
      bubIn765.restore();
      bubIn771 &&
        bubIn771.push({
          kind: "bubble-point",
          x: bubBind6138 - bubBind6140,
          y: bubBind6139 - bubBind6140,
          width: bubBind6140 * 2,
          height: bubBind6140 * 2,
          seriesName: series.name,
          category: String(item.x),
          value: item.y,
          color: bubBind6147,
          anchorX: bubBind6138,
          anchorY: bubBind6139,
        });
    });
  });
  bubIn765.restore();
}

/** Legacy alias. */
export const aCe = paintBubbleSeries;
