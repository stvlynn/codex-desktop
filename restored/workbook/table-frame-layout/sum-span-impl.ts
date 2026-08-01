// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sum row/col span sizes (legacy helper #645).
// Stage-3 wave-135.

export function workbookHelper645(
  tflIn11282: any,
  tflIn11283: any,
  tflIn11284: any,
) {
  let tflBind21754 = 0;
  for (let tflBind22906 = 0; tflBind22906 < tflIn11284; tflBind22906 += 1)
    tflBind21754 += tflIn11282[tflIn11283 + tflBind22906] ?? 0;
  return tflBind21754;
}
