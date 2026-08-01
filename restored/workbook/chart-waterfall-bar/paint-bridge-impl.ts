// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall connector bridge stroke (legacy uCe).
// Stage-3 wave-133.

export const BRIDGE_STROKE = "#c7c7c7";
export const BRIDGE_WIDTH = 1;

export function uCe(
  cwbIn7944: any,
  cwbIn7945: any,
  cwbIn7946: any,
  cwbIn7947: any,
  cwbIn7948: any,
  cwbIn7949: any,
) {
  let cwbBind18429 = cwbIn7949(cwbIn7947);
  cwbIn7944.save();
  cwbIn7944.strokeStyle = BRIDGE_STROKE;
  cwbIn7944.lineWidth = BRIDGE_WIDTH;
  cwbIn7944.beginPath();
  cwbIn7944.moveTo(cwbIn7945 + cwbIn7948, cwbBind18429);
  cwbIn7944.lineTo(cwbIn7946, cwbBind18429);
  cwbIn7944.stroke();
  cwbIn7944.restore();
}

export const paintBridge = uCe;
