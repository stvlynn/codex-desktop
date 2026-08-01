// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sum contiguous row/col span sizes (legacy LTe).
// Stage-3 wave-139.

export function LTe(tflIn11244: any, tflIn11245: any, tflIn11246: any) {
  let tflBind21709 = 0;
  for (let tflBind22905 = 0; tflBind22905 < tflIn11246; tflBind22905 += 1)
    tflBind21709 += tflIn11244[tflIn11245 + tflBind22905] ?? 0;
  return tflBind21709;
}
