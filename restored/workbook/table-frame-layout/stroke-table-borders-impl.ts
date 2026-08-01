// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table cell border strokes (legacy TTe).
// Stage-3 wave-127.

const TABLE_BORDER_COLOR = "#000000";

export function strokeTableBorders(tflbIn4557: any, tflbIn4558: any, tflbIn4559: any, tflbIn4560: any, tflbIn4561: any, tflbIn4562: any, tflbIn4563: any, ) {
  let tflbBind13833 = Math.round(tflbIn4558) + 0.5,
    tflbBind13834 = Math.round(tflbIn4559) + 0.5,
    tflbBind13835 =
      Math.round(tflbIn4558 + tflbIn4560) + 0.5,
    tflbBind13836 =
      Math.round(tflbIn4559 + tflbIn4561) + 0.5;
  tflbIn4557.strokeStyle = TABLE_BORDER_COLOR;
  tflbIn4557.lineWidth = 1;
  tflbIn4557.beginPath();
  tflbIn4557.moveTo(tflbBind13833, tflbBind13834);
  tflbIn4557.lineTo(tflbBind13835, tflbBind13834);
  tflbIn4557.moveTo(tflbBind13833, tflbBind13834);
  tflbIn4557.lineTo(tflbBind13833, tflbBind13836);
  tflbIn4562 &&
    (tflbIn4557.moveTo(tflbBind13835, tflbBind13834),
    tflbIn4557.lineTo(tflbBind13835, tflbBind13836));
  tflbIn4563 &&
    (tflbIn4557.moveTo(tflbBind13833, tflbBind13836),
    tflbIn4557.lineTo(tflbBind13835, tflbBind13836));
  tflbIn4557.stroke();
}

export const TTe = strokeTableBorders;
